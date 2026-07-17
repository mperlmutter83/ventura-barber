import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog-data';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div>
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-orange-400">{post.category}</span>
          <h1 className="font-serif text-3xl md:text-4xl mt-2">{post.title}</h1>
          <p className="text-gray-400 mt-2">{post.date}</p>
        </div>
      </section>
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Image src={post.image} alt={post.title} width={800} height={500} className="rounded-lg mb-8 w-full" />
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-12 pt-8 border-t">
            <Link href="/blog" className="text-orange-500 font-medium">← Back to Blog</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
