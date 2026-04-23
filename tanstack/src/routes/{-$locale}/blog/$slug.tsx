import { createFileRoute, notFound } from '@tanstack/react-router';
import { marked } from 'marked';
import { ArrowLeftIcon } from 'lucide-react';
import { LocalizedLink } from '@/components/localized-link';
import { Button } from '@/components/ui/button';
import { getPostBySlug } from '@/lib/blog';
import { MotionDiv } from '@/components/atom';

export const Route = createFileRoute('/{-$locale}/blog/$slug')({
  component: BlogPostPage,
  head: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) return {};
    return {
      meta: [
        { title: `${post.title} — Serge Mezui` },
        { name: 'description', content: post.excerpt },
      ],
    };
  },
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  const html = marked(post.content) as string;

  return (
    <div className="container pt-32 pb-20 max-w-3xl">
      <MotionDiv className="mb-8">
        <LocalizedLink to="/blog">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to Blog
          </Button>
        </LocalizedLink>

        <div className="flex gap-2 flex-wrap mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono text-primary border border-primary/30 rounded-full px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-5xl font-bold mb-3">{post.title}</h1>
        <span className="text-sm text-muted-foreground">{post.date}</span>
      </MotionDiv>

      <MotionDiv
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
