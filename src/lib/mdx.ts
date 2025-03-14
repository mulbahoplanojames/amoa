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
    //       title: "The Future of AI in Software Development",
    //       slug: "future-of-ai-in-software-development",
    //       date: "2024-03-10",
    //       excerpt:
    //         "Exploring how AI is transforming the way developers build software and what this means for the future of the industry.",
    //       readingTime: "8 min read",
    //       image: "/placeholder.svg?height=600&width=800",
    //       author: {
    //         name: "Alex Johnson",
    //         avatar: "/placeholder.svg?height=100&width=100",
    //       },
    //       content: `
    // # The Future of AI in Software Development
    // Artificial intelligence is rapidly transforming the software development landscape. From code generation to automated testing, AI tools are becoming an essential part of the modern developer's toolkit.
    // ## How AI is Changing Development Workflows
    // The integration of AI into development workflows has already begun to show significant benefits:
    // - **Code Completion and Generation**: Tools like GitHub Copilot can suggest entire functions based on comments or context
    // - **Automated Testing**: AI can generate test cases and identify potential edge cases
    // - **Bug Detection**: Machine learning models can identify patterns that lead to bugs before they make it to production
    // ## The Impact on Developer Productivity
    // Studies have shown that developers using AI-assisted tools can see productivity increases of up to 40%. This isn't about replacing developers but rather enhancing their capabilities and allowing them to focus on more complex problems.
    // ## Looking Ahead: The Next Five Years
    // In the coming years, we expect to see:
    // 1. More sophisticated code generation capabilities
    // 2. AI-driven architecture recommendations
    // 3. Automated refactoring of legacy codebases
    // 4. Real-time collaboration between AI and human developers
    // The future of software development will be a partnership between human creativity and AI capabilities, leading to faster development cycles and more robust software.
    //       `,
    //     },
    //     {
    //       title: "Building Scalable Microservices with Node.js",
    //       slug: "building-scalable-microservices",
    //       date: "2024-03-05",
    //       excerpt:
    //         "Learn the best practices for designing and implementing scalable microservice architectures using Node.js.",
    //       readingTime: "6 min read",
    //       image: "/placeholder.svg?height=600&width=800",
    //       author: {
    //         name: "Sarah Chen",
    //         avatar: "/placeholder.svg?height=100&width=100",
    //       },
    //     },
    //     {
    //       title: "The Ultimate Guide to Next.js 15",
    //       slug: "ultimate-guide-nextjs-15",
    //       date: "2024-02-28",
    //       excerpt:
    //         "Everything you need to know about the latest features and improvements in Next.js 15.",
    //       readingTime: "7 min read",
    //       image: "/placeholder.svg?height=600&width=800",
    //       author: {
    //         name: "Miguel Rodriguez",
    //         avatar: "/placeholder.svg?height=100&width=100",
    //       },
    //     },
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
    //     },
  ];
}
