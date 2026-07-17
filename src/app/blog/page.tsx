import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <div>
      <section className="bg-stone-900 text-white py-16 text-center">
        <h1 className="font-serif text-4xl">Blog</h1>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Image src={post.image} alt={post.title} width={400} height={250} className="rounded-lg mb-4" />
              <span className="text-orange-500 text-sm">{post.category}</span>
              <h3 className="font-bold text-stone-900 group-hover:text-orange-500 mt-1">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
