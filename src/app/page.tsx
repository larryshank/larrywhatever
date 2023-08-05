import Hero from '@/components/Hero';
import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/helpers/getPostMetadata';

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <Hero />
      <h1 className="my-5 text-center text-9xl font-extrabold">
        LARRY WHATEVER
      </h1>
      <div className="mx-auto grid grid-cols-1 gap-10 px-10 md:grid-cols-2">
        {postPreviews}
      </div>
    </>
  );
}
