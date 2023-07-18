import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../types/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "src/posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return posts;
};

export default getPostMetadata;
