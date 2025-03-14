import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import { formatDate } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { getPostBySlug } from "@/lib/mdx";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  console.log("Post", post);
  console.log("Params", slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  return {
    title: `${post.title} | TechFusion`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-2 pb-12 md:pt-32 pt-24">
      <article className="max-w-3xl mx-auto ">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            {post.author && (
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
            )}
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>

        <div className="relative h-96 mb-10">
          <Image
            src={post.image || "/placeholder.svg?height=800&width=1200"}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Render the content using ReactMarkdown instead of MDX */}
        <div className="prose prose-lg dark:prose-invert mx-auto">
          {post.content && <ReactMarkdown>{post.content}</ReactMarkdown>}
        </div>
      </article>
    </div>
  );
}
