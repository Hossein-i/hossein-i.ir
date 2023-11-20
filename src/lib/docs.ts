import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import moment from "moment";
import path from "path";
import readingTime from "reading-time";
import { IDoc, INote, IProject } from "./interfaces";

const docsDir = path.join(process.cwd(), "docs");
const formatFile = ".mdx";

// const getDirectories = (source: string) =>
//   readdirSync(source, { withFileTypes: true })
//     .filter((dirent) => dirent.isDirectory())
//     .map((dirent) => dirent.name);

export const getDoc = (directory: string, slug: string): IDoc => {
  const realSlug = slug.replace(formatFile, "");
  const filePath = path.join(docsDir, directory, `${realSlug}${formatFile}`);
  const fileContent = readFileSync(filePath, { encoding: "utf-8" });
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  const doc = {
    slug: realSlug,
    meta: { ...data, readTime: stats?.text },
    content: content,
  };

  return doc;
};

export const getDocs = (directory: string): IDoc[] => {
  const directoryPath = path.join(docsDir, directory);
  const files = readdirSync(directoryPath);
  const slugs = files.filter((file) => file.endsWith(formatFile));
  const docs = slugs.map((slug) => getDoc(directory, slug));

  return docs.sort((a, b) =>
    moment(a.meta.date).isBefore(b.meta.date) ? 1 : -1,
  );
};

export const getNote = (slug: string): INote => getDoc("notes", slug) as INote;

export const getNotes = (): INote[] => getDocs("notes") as INote[];

export const getProject = (slug: string): IProject =>
  getDoc("projects", slug) as IProject;

export const getProjects = (): IProject[] => getDocs("projects") as IProject[];

export const getReadTime = (directory: string, slug: string) => {
  const doc = getDoc(directory, slug);
  return doc.meta.readTime;
};

export const getAllSlugs = (directory: string) => {
  const directoryPath = path.join(docsDir, directory);
  const files = readdirSync(directoryPath);
  return files.map((file) => file.replace(formatFile, ""));
};

export const getAllTags = () => {
  const notes = getNotes();
  const tags = notes.map(({ meta: { tags } }) => tags);

  return Array.from(new Set(tags.flat()));
};
