import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { Post } from "@/lib/mdx";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48">
        <Image
          src={post.image || "/placeholder.svg?height=400&width=600"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="flex-1 p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <div className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <span>•</span>
          <div className="flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            <span>{post.readingTime || "5 min read"}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm text-primary font-medium hover:underline"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
}
