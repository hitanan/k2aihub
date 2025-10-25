export interface BlogMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
  readingTime: string;
  coverImage?: string;
  lastModified?: string;
}

export interface BlogPost extends BlogMetadata {
  content: string;
}
