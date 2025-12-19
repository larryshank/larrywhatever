import getPostContent from '@/helpers/getPostContent';
import getPostMetadata from '@/helpers/getPostMetadata';
import MarkdownRenderer from '@/components/MarkdownRenderer';

// Makes static (NOT SSG OR Client side)
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = async (props: any) => {
  const params = await props.params;
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="m-5 font-serif text-4xl font-bold">{post.data.title}</h1>
        <div className="mt-2 border-b border-black" />
      </div>
      <MarkdownRenderer content={post.content} />
    </div>
  );
};

export default PostPage;
