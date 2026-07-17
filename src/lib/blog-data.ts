export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-fix-a-bad-haircut-what-barbers-can-and-cant-do',
    title: 'How to Fix a Bad Haircut — What Barbers Can (and Can\'t) Do',
    date: 'April 29, 2026',
    category: 'Haircuts',
    excerpt: 'A bad haircut can feel like a disaster—especially when you have work, photos, or a big event coming up. The good news: most "bad cuts" are fixable...',
    image: '/images/AdobeStock_327102759-400x250.jpeg',
    content: '<p>A bad haircut can feel like a disaster—especially when you have work, photos, or a big event coming up. The good news: most "bad cuts" are fixable. The not-so-good news: not every fix can happen in one visit, and sometimes the best option is a smart plan that blends time and technique.</p><h2>What We Can Fix</h2><p>At Ventura Barber, we specialize in corrective cuts. Uneven fades, choppy layers, and awkward lengths can often be blended or reshaped.</p>',
  },
  {
    slug: 'how-to-maintain-your-fade-longer-between-cuts',
    title: 'How to Maintain Your Fade Longer Between Cuts',
    date: 'April 4, 2026',
    category: 'Fades',
    excerpt: 'A crisp fade is one of the cleanest looks you can wear—but it can lose its sharpness quickly as hair grows out...',
    image: '/images/AdobeStock_115727227-400x250.jpeg',
    content: '<p>A crisp fade is one of the cleanest looks you can wear—but it can lose its sharpness quickly as hair grows out. The good news: with the right at-home routine and a smart game plan with your barber, you can keep your fade looking fresh longer between appointments.</p>',
  },
  {
    slug: 'a-guide-to-barbershops-in-ventura-what-makes-a-great-cut',
    title: 'A Guide to Barbershops in Ventura: What Makes a Great Cut?',
    date: 'March 19, 2026',
    category: 'Barbers',
    excerpt: 'Finding the right barbershop is about more than convenience. A truly great cut should match your face shape, hair type, and lifestyle...',
    image: '/images/AdobeStock_238613870-400x250.jpeg',
    content: '<p>Finding the right barbershop is about more than convenience. A truly great cut should match your face shape, hair type, and lifestyle, while also giving you a clean, confident look that lasts.</p>',
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
