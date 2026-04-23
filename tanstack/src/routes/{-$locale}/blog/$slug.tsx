import { createFileRoute, notFound } from '@tanstack/react-router';
import { ArrowLeftIcon } from 'lucide-react';
import { LocalizedLink } from '@/components/localized-link';
import { Button } from '@/components/ui/button';
import { getPostBySlug } from '@/lib/blog';
import { MotionDiv } from '@/components/atom';

export const Route = createFileRoute('/{-$locale}/blog/$slug')({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return post!;
  },
});

function BlogPostPage() {
  const post = Route.useLoaderData();

  // Render markdown synchronously using a simple approach
  // (marked is async by default in v15 — use parseInline for simple rendering)
  const renderMarkdown = (md: string) => {
    // Simple line-by-line renderer for basic markdown
    return md
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/```[\s\S]*?```/g, (block) => `<pre><code>${block.slice(3, -3)}</code></pre>`)
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(?!<[h|p|u|o|l|pre])/gm, '')
      .replace(/^(.+)$/gm, (line) => line.startsWith('<') ? line : `<p>${line}</p>`);
  };

  return (
    <div className="container pt-32 pb-20 max-w-3xl">
      <MotionDiv className="mb-8">
        <LocalizedLink to="/blog">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to Blog
          </Button>
        </LocalizedLink>

        <div className="flex gap-2 flex-wrap mb-4">
          {post.tags.map((tag: string) => (
            <span key={tag} className="text-xs font-mono text-primary border border-primary/30 rounded-full px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-5xl font-bold mb-3">{post.title}</h1>
        <span className="text-sm text-muted-foreground">{post.date}</span>
      </MotionDiv>

      <MotionDiv
        className="prose prose-lg dark:prose-invert max-w-none [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-4 [&_p]:my-3 [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_pre]:bg-muted [&_pre]:p-4 [&_pre]:rounded-lg [&_a]:text-primary [&_a]:underline [&_strong]:font-bold"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
      />
    </div>
  );
}
