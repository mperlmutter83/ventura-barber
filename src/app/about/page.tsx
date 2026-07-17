import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'About Us' };

export default function AboutPage() {
  return (
    <div>
      <section className="bg-stone-900 text-white py-16 text-center">
        <h1 className="font-serif text-4xl">About Us</h1>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Image src="/images/barber-shop-11.jpg" alt="Barber shop" width={800} height={500} className="rounded-lg mb-8" />
          <p className="text-gray-600 mb-4">At Ventura Barber, we believe that a great haircut is more than just a trim; it&apos;s an experience that enhances your confidence and reflects your unique style. Our journey began with a passion for grooming and a commitment to creating a welcoming space where every client feels valued and understood.</p>
          <p className="text-gray-600 mb-4">Our skilled barbers are dedicated to staying ahead of trends while mastering timeless techniques, ensuring that each visit leaves you looking and feeling your best. Whether you&apos;re here for a classic cut, a trendy style, or a simple buzz, you&apos;ll find that our friendly team is always ready to listen and deliver exactly what you envision.</p>
          <p className="text-gray-600">Join us in celebrating the art of barbering at Ventura Barber, where every cut tells a story.</p>
        </div>
      </section>
    </div>
  );
}
