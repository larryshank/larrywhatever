import getPostMetadata from '@/helpers/getPostMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';

const getPostContent = () => {
  const file = `src/articles/about.mdx`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

// // Makes static (NOT SSG OR Client side)
// export const generateStaticParams = async () => {
//   const posts = getPostMetadata();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };

const header = (
  <div className="sticky top-0 flex w-full justify-between gap-5 border-b bg-white px-5 py-2 font-bold">
    <Link href="/">Home</Link>
    <div className="flex gap-5">
      <div>Pics</div>
    </div>
  </div>
);

const AboutPage = (props: any) => {
  const post = getPostContent();
  return (
    <div>
      {header}
      <Link href="/">
        <h1 className="text-2xl text-violet-600">{post.data.title}</h1>
      </Link>
      <article className="1g:prose-xl prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default AboutPage;
