import fs from 'fs';
import matter from 'gray-matter';
import { DateTime } from 'luxon';
import { PostMetadata } from '../types/PostMetadata';

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'src/posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.mdx'));

  const posts = markdownPosts
    .map((fileName) => {
      const fileContents = fs.readFileSync(`src/posts/${fileName}`, 'utf8');
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        image: matterResult.data.image,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace('.mdx', ''),
        tags: matterResult.data.tags,
      };
    })
    .sort(function (a, b) {
      const aDate = DateTime.fromISO(a.date);
      const bDate = DateTime.fromISO(b.date);
      return bDate.toMillis() - aDate.toMillis();
    });

  return posts;
};

export default getPostMetadata;
