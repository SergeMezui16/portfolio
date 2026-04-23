import { createFileRoute } from '@tanstack/react-router';
import { ArrowRightIcon } from 'lucide-react';
import { LocalizedLink } from '@/components/localized-link';
import { Button } from '@/components/ui/button';
import { getAllPosts } from '@/lib/blog';
import { MotionDiv } from '@/components/atom';

export const Route = createFileRoute('/{-$locale}/blog/')({
  component: BlogPage,
  head: () => ({
    meta: [{ title: 'Blog — Serge Mezui' }],
  }),
});

function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container pt-32 pb-20">
      <MotionDiv className="mt-10 text-center w-full max-w-2xl mx-auto flex gap-4 flex-col items-center">
        <h1 className="font-thin text-7xl">Blog</h1>
        <p className="text-muted-foreground">
          Thoughts on web development, open source, and building things.
        </p>
      </MotionDiv>

      <div className="my-16 flex flex-col gap-6 max-w-3xl mx-auto">
        {posts.length === 0 && (
          <p className="text-center text-muted-foreground">No posts yet. Check back soon!</p>
        )}
        {posts.map((post) => (
          <MotionDiv
            key={post.slug}
            className="p-6 bg-card border rounded-lg cursor-pointer hover:border-primary hover:border-dashed hover:shadow-lg transition-all duration-300 flex flex-col gap-3"
          >
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono text-primary border border-primary/30 rounded-full px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <span className="text-sm text-muted-foreground">{post.date}</span>
            <p className="text-muted-foreground">{post.excerpt}</p>
            <div className="flex justify-end mt-2">
              <LocalizedLink to={`/blog/${post.slug}`}>
                <Button size="sm" variant="outline">
                  Read more <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Button>
              </LocalizedLink>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
