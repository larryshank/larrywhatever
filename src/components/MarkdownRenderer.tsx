'use client';

import Markdown from 'markdown-to-jsx';

interface MarkdownRendererProps {
  content: string;
  className?: string;
  articleClassName?: string;
}

export default function MarkdownRenderer({
  content,
  className,
  articleClassName = 'prose w-[95vw] lg:prose-lg prose-a:text-blue-600 prose-img:mx-auto',
}: MarkdownRendererProps) {
  return (
    <article className={articleClassName}>
      <Markdown className={className}>{content}</Markdown>
    </article>
  );
}
