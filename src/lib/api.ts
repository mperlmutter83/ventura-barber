/**
 * Fetch blog posts from the central Yes Crew API
 * Uses ISR (Incremental Static Regeneration) with 60 second revalidation
 */

const API_BASE = "https://yescrew-dashboard.vercel.app/api/posts";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  image_url: string | null;
  category: string | null;
  author?: string;
  seoTitle?: string;
  seoDescription?: string;
  metaDescription?: string;
  publishedAt?: string;
  publish_at: string | null;
  created_at: string;
}

export type ApiBlogPost = BlogPost;

export interface RenderPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  author?: string;
  seoTitle?: string;
  seoDescription?: string;
  metaDescription?: string;
  publishedAt?: string;
  content: string;
}

export async function getPosts(siteDomain: string): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `${API_BASE}?site=${encodeURIComponent(siteDomain)}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.posts || [];
  } catch {
    return [];
  }
}

export async function getPost(
  siteDomain: string,
  slug: string
): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${API_BASE}?site=${encodeURIComponent(siteDomain)}&slug=${encodeURIComponent(slug)}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.post || null;
  } catch {
    return null;
  }
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
}

export function toRenderPost(p: BlogPost): RenderPost {
  return {
    slug: p.slug,
    title: p.title,
    date: formatDate(p.publish_at || p.created_at),
    category: p.category || "Marketing",
    excerpt: p.excerpt || "",
    image: p.image_url || undefined,
    author: p.author || "Yes Crew",
    content: p.content,
  };
}

export function contentToHtml(content: string): string {
  const inline = (s: string) =>
    s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  const blocks = content.split(/\n\n+/);
  const out: string[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) {
      out.push("<ul>" + list.map((i) => `<li>${inline(i)}</li>`).join("") + "</ul>");
      list = [];
    }
  };
  for (const raw of blocks) {
    const b = raw.trim();
    if (!b) continue;
    if (b.startsWith("<")) { flush(); out.push(b); continue; }
    if (b.startsWith("- ")) {
      const items = b.split("\n").filter((l) => l.trim().startsWith("- "));
      list.push(...items.map((l) => l.trim().slice(2)));
      continue;
    }
    flush();
    if (b.startsWith("### ")) out.push(`<h3>${inline(b.slice(4))}</h3>`);
    else if (b.startsWith("## ")) out.push(`<h2>${inline(b.slice(3))}</h2>`);
    else out.push(`<p>${inline(b).replace(/\n/g, "<br>")}</p>`);
  }
  flush();
  return out.join("\n");
}
