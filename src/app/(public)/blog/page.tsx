import BlogHero from "@/components/contact/BlogHero";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
  description: "Explore the latest articles and insights from our tech experts",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="">
      <BlogHero />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-2 pb-12 mt-10">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
