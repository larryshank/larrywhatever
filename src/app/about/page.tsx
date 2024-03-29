import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import Link from 'next/link';

const getPostContent = () => {
  const file = `src/articles/about.mdx`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

const header = (
  <div className="sticky top-0 flex w-full justify-between gap-5 border-b bg-white px-5 py-2 font-bold">
    <Link href="/">Home</Link>
    {/* <div className="flex gap-5"><div>Pics</div></div> */}
  </div>
);

const AboutPage = (props: any) => {
  const post = getPostContent();
  return (
    <div>
      {header}
      <div className="flex justify-center">
        <h1 className="my-5 text-4xl font-bold">{post.data.title}</h1>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-10 px-10 md:grid-cols-2">
        <article className="1g:prose-xl prose justify-self-center">
          <Markdown>{post.content}</Markdown>
        </article>
        <Image
          alt="Me"
          className="h-[400px] w-auto justify-self-center"
          height="0"
          priority
          quality={100}
          sizes="100vw"
          src="/images/about_me.jpeg"
          width="0"
        />
      </div>
    </div>
  );
};

export default AboutPage;
