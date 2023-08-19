import getPostMetadata from '@/helpers/getPostMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';

const getPostContent = (slug: string) => {
  const folder = 'src/posts/';
  const file = `${folder}${slug}.mdx`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

// Makes static (NOT SSG OR Client side)
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="flex flex-col items-center">
      <Link href="/">
        <h1 className="mt-5 font-serif text-4xl font-bold">
          {post.data.title}
        </h1>
        <div className="mt-2 border-b border-black" />
      </Link>
      <article className="lg:prose-l prose w-[95vw] prose-a:text-blue-600 prose-img:mx-auto">
        <Markdown className="px-5">{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
