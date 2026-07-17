'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-stone-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/scissors.png" alt="Ventura Barber" width={40} height={40} />
          <span className="font-serif text-xl">Ventura Barber</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-orange-400">Home</Link>
          <Link href="/about" className="hover:text-orange-400">About Us</Link>
          <Link href="/services" className="hover:text-orange-400">Services</Link>
          <Link href="/blog" className="hover:text-orange-400">Blog</Link>
          <Link href="/contact" className="hover:text-orange-400">Contact</Link>
          <Link href="/book-now" className="bg-orange-500 px-4 py-2 hover:bg-orange-600">Book A Chair</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <nav className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/services" className="block">Services</Link>
          <Link href="/blog" className="block">Blog</Link>
          <Link href="/contact" className="block">Contact</Link>
          <Link href="/book-now" className="block bg-orange-500 px-4 py-2 text-center">Book A Chair</Link>
        </nav>
      )}
    </header>
  );
}
