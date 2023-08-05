import Image from 'next/image';
import Link from 'next/link';
import { PostMetadata } from '../types/PostMetadata';

const PostPreview = ({ slug, date, title, subtitle, image }: PostMetadata) => {
  console.log(image);
  return (
    <Link href={`/posts/${slug}`} key={slug}>
      <div className="flex justify-between text-slate-400">
        <p>
          <span className="text-bold text-black">Tags: </span>
          Skiing, Hockey, Soccer
        </p>
        <p>{date}</p>
      </div>

      <div className="border-b border-black" />

      <h2 className="mt-5 font-serif text-4xl font-bold hover:underline">
        {title}
      </h2>

      {/* TODO: Make div for image container */}
      {image && (
        <Image src={image} alt="Post Preview Image" width="100" height="100" />
      )}

      <p className="mt-3 text-slate-700">{subtitle}</p>
    </Link>
  );
};

export default PostPreview;
