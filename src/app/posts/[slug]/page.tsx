import getPostContent from '@/helpers/getPostContent';
import getPostMetadata from '@/helpers/getPostMetadata';

import Markdown from 'markdown-to-jsx';

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
      <div>
        <h1 className="m-5 font-serif text-4xl font-bold">{post.data.title}</h1>
        <div className="mt-2 border-b border-black" />
      </div>
      <article className="prose w-[95vw] lg:prose-lg prose-a:text-blue-600 prose-img:mx-auto">
        <Markdown className="px-5">{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
