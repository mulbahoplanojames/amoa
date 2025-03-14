import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content?: string;
  image?: string;
  readingTime?: string;
  author?: {
    name: string;
    avatar?: string;
  };
}

const postsDirectory = path.join(process.cwd(), "content/blog");

export async function getAllPosts(): Promise<Post[]> {
  // For development/preview environments, return mock data if directory doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Directory not found: ${postsDirectory}`);
    return getMockPosts();
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        image: data.image,
        readingTime: data.readingTime || calculateReadingTime(content),
        author: data.author,
      } as Post;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  // For development/preview environments, return mock data if directory doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    const mockPosts = getMockPosts();
    return mockPosts.find((post) => post.slug === slug) || null;
  }

  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content: content,
      image: data.image,
      readingTime: data.readingTime || calculateReadingTime(content),
      author: data.author,
    };
  } catch (error) {
    console.error(`Error getting post by slug: ${slug}`, error);
    return null;
  }
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/g).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}

// Mock data for development/preview environments
function getMockPosts(): Post[] {
  return [
    //     {
    //       title: "Optimizing React Performance",
    //       slug: "optimizing-react-performance",
    //       date: "2024-02-20",
    //       excerpt:
    //         "Deep dive into techniques for optimizing your React applications for better performance and user experience.",
    //       readingTime: "10 min read",
    //       image: "/placeholder.svg?height=600&width=800",
    //       author: {
    //         name: "Emily Parker",
    //         avatar: "/placeholder.svg?height=100&width=100",
    //       },
    //
  ];
}
