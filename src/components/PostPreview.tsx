import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-200 p-4 rounded-md shadow-md bg-white"
      key={props.slug}
    >
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold text-violet-600 hover:underline">
          {props.title}
        </h2>
        <p className="text-sm text-slate-400">{props.date}</p>
        <p className="text-slate-700">{props.subtitle}</p>
      </Link>
    </div>
  );
};

export default PostPreview;
