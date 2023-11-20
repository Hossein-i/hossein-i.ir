import React, { FunctionComponent } from "react";

interface ArticleLayoutProps {
  children: React.ReactNode;
}

const ArticleLayout: FunctionComponent<ArticleLayoutProps> = ({ children }) => {
  return (
    <article className="prose prose-headings:text-foreground prose-p:text-foreground/75 mx-auto max-w-screen-lg px-6 py-16">
      {children}
    </article>
  );
};

export default ArticleLayout;
