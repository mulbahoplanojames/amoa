import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog | AMOA",
  description: "Explore the latest articles and insights from our tech experts",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 pb-12 pt-32">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore the latest insights, tutorials, and technology trends from our
          expert team
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
