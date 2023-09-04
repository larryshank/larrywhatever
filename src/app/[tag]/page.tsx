import Hero from '@/components/Hero';
import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/helpers/getPostMetadata';
import Link from 'next/link';

// TODO: Better props than any?
const PostsByTag = (props: any) => {
  const tag = props.params.tag;
  const postMetadata = getPostMetadata();
  const postPreviewsByTag = postMetadata
    .filter((post) => post.tags?.split(',').includes(tag))
    .map((post) => <PostPreview key={post.slug} {...post} />);

  const header = (
    <div className="sticky top-0 z-10 flex w-full justify-between gap-5 border-b bg-white px-5 py-2 font-bold">
      <Link href="/">Home</Link>
      <div className="flex gap-5">
        {/* <div>Pics</div> */}
        <Link href="/about">About</Link>
      </div>
    </div>
  );

  return (
    <>
      {header}
      <Hero />
      <h1 className="my-5 text-center text-5xl font-extrabold md:text-9xl">
        {tag.toUpperCase()}
      </h1>
      <div className="mx-auto grid grid-cols-1 gap-10 px-10 md:grid-cols-2">
        {postPreviewsByTag}
      </div>
    </>
  );
};

export default PostsByTag;
