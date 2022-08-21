interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

type Page = "home" | "list-posts" | "post";

export type { Post, Comment, Page };
