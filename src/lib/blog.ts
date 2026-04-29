export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  locale: string;
  content: string;
};

function parseFrontmatter(raw: string): { frontmatter: Record<string, unknown>; body: string } {
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) return { frontmatter: {}, body: raw };

  const frontmatter: Record<string, unknown> = {};
  for (const line of fmMatch[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const rawValue = line.slice(colonIdx + 1).trim();
    if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
      frontmatter[key] = rawValue
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim());
    } else {
      frontmatter[key] = rawValue;
    }
  }

  return { frontmatter, body: fmMatch[2] };
}

const modules = import.meta.glob('/content/blog/*.md', { query: '?raw', eager: true, import: 'default' }) as Record<string, string>;

export function getAllPosts(): BlogPost[] {
  return Object.entries(modules).map(([path, raw]) => {
    const slug = path.replace('/content/blog/', '').replace('.md', '');
    const { frontmatter, body } = parseFrontmatter(raw);
    return {
      slug,
      title: String(frontmatter.title ?? slug),
      date: String(frontmatter.date ?? ''),
      excerpt: String(frontmatter.excerpt ?? ''),
      tags: (frontmatter.tags as string[]) ?? [],
      locale: String(frontmatter.locale ?? 'en'),
      content: body,
    };
  }).sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
