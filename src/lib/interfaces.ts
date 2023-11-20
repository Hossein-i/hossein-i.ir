export interface IDoc {
  slug: string;
  meta: { [key: string]: any };
  content: string;
}

export interface INote {
  slug: string;
  meta: {
    readTime: string;
    title: string;
    excerpt: string;
    coverImage: string;
    author: {
      name: string;
      image: string;
    };
    date: string;
    tags: string[];
  };
  content: string;
}

export interface IProject {
  slug: string;
  meta: {
    readTime: string;
    title: string;
    excerpt: string;
    coverImage: string;
    author: {
      name: string;
      image: string;
    };
    date: string;
    tags: string[];
  };
  content: string;
}
