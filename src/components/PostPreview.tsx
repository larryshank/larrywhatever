import Image from 'next/image';
import Link from 'next/link';
import { PostMetadata } from '../types/PostMetadata';

const PostPreview = ({
  slug,
  date,
  title,
  subtitle,
  image,
  tags,
}: PostMetadata) => {
  const postTags = tags?.split(',');
  return (
    <div>
      <div className="flex justify-between text-slate-400">
        <p>
          <span className="text-bold text-black">Tags: </span>
          {postTags?.map((tag) => (
            <Link href={`/${tag}`} key={tag} className="hover:underline">
              {`#${tag} `}
            </Link>
          ))}
        </p>
        <p>{date}</p>
      </div>

      <Link href={`/posts/${slug}`} key={slug}>
        <div className="border-b border-black" />
        <h2 className="mt-5 font-serif text-4xl font-bold hover:underline">
          {title}
        </h2>

        {image && (
          <div className="relative mt-5 h-[50vh] w-full overflow-hidden">
            <Image
              src={image}
              alt="Post Preview Image"
              className="object-cover"
              fill={true}
              // objectFit="cover"
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <p className="mt-3 text-slate-700">{subtitle}</p>
      </Link>
    </div>
  );
};

export default PostPreview;
