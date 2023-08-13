import Hero from '@/components/Hero';
import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/helpers/getPostMetadata';
import Link from 'next/link';

export default function Home() {
  const postMetadata = getPostMetadata();
  console.log(postMetadata.map((post) => post.date));
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const header = (
    <div className="sticky top-0 z-10 flex w-full justify-end gap-5 border-b bg-white pr-5 font-bold">
      <div>Pics</div>
      <Link href="/about">About</Link>
    </div>
  );

  return (
    <div>
      {header}
      <Hero />
      <h1 className="my-5 text-center text-9xl font-extrabold">
        LARRY WHATEVER
      </h1>
      <div className="mx-auto grid grid-cols-1 gap-10 px-10 md:grid-cols-2">
        {postPreviews}
      </div>
    </div>
  );
}
