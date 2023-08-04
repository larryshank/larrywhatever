import Link from "next/link";
import { PostMetadata } from "../types/PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`} key={props.slug}>
      <div className="flex justify-between">
        <p className="text-sm text-slate-400">Tags: Skiing, Hockey, Soccer</p>
        <p className="text-sm text-slate-400">{props.date}</p>
      </div>
      <div className="border-b border-black" />
      <h2 className="font-bold text-violet-600 hover:underline">
        {props.title}
      </h2>

      <p className="text-slate-700">{props.subtitle}</p>
    </Link>
  );
};

export default PostPreview;
