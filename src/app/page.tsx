import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/helpers/getPostMetadata";
import Link from "next/link";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <div className="flex h-11 bg-slate-300"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-2xl px-6">
        {postPreviews}
      </div>
    </>
  );
}
