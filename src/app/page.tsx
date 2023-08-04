import Hero from "@/components/Hero";
import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/helpers/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <Hero />
      <h1 className="font-extrabold text-9xl text-center my-5">
        LARRY WHATEVER
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto px-10">
        {postPreviews}
      </div>
    </>
  );
}
