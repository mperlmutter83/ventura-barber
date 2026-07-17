import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    { name: 'Haircut', desc: 'Our skilled barbers are dedicated to delivering excellence.' },
    { name: 'Buzz Cut', desc: 'Experience the timeless simplicity of a buzz cut.' },
    { name: 'Kids Cut', desc: 'Our friendly and patient barbers specialize in creating a relaxed environment.' },
    { name: 'Beard Trim', desc: 'Precision beard trims tailored to your unique look.' },
    { name: 'Clean Shave', desc: 'Traditional techniques for an impeccably smooth finish.' },
    { name: 'Styled Haircut', desc: 'Blending classic techniques with modern trends.' },
    { name: 'Long Sheer Cut', desc: 'Soft layers and seamless blends for natural shine.' },
    { name: 'Straight Razor', desc: 'The ultimate in grooming with this timeless tool.' },
    { name: 'Clipper Haircut', desc: 'Sharp, clean lines and effortlessly groomed looks.' },
  ];

  return (
    <div className="bg-stone-100">
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20 text-center">
        <Image src="/images/scissors.png" alt="Scissors" width={60} height={60} className="mx-auto mb-4" />
        <p className="text-orange-400 tracking-widest">Fresh Since 2000</p>
        <h1 className="font-serif text-5xl md:text-6xl mt-2 mb-6">Ventura Barber Shop</h1>
        <Link href="/book-now" className="inline-block bg-orange-500 px-8 py-3 font-medium hover:bg-orange-600">Book A Chair</Link>
        <div className="mt-8">
          <a href="tel:+18057793804" className="text-2xl font-bold">(805) 779-3804</a>
          <p className="text-gray-400 mt-2">Sun – Fri: 10am – 6pm | Sat: 10am – 6pm</p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <Image src="/images/barber-shop-11.jpg" alt="Barber shop" width={600} height={400} className="rounded-lg" />
          <div>
            <h2 className="font-serif text-3xl text-stone-900 mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">At Ventura Barber, we believe that a great haircut is more than just a trim; it&apos;s an experience that enhances your confidence and reflects your unique style. Our skilled barbers are dedicated to staying ahead of trends while mastering timeless techniques.</p>
            <Link href="/about" className="text-orange-500 font-medium hover:text-orange-600">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Image src="/images/barber-7.png" alt="Barber" width={500} height={600} className="rounded-lg" />
            <div className="grid grid-cols-1 gap-4">
              {services.map((s, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-stone-900">{s.name}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-12 bg-stone-900 text-white text-center">
        <Image src="/images/barber-9.png" alt="Book" width={200} height={200} className="mx-auto mb-4" />
        <h2 className="font-serif text-3xl mb-4">Book A Seat</h2>
        <Link href="/book-now" className="inline-block bg-orange-500 px-8 py-3 font-medium hover:bg-orange-600">Book Now</Link>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-center text-stone-900 mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Image src="/images/barber-shop-17.jpg" alt="Gallery 1" width={400} height={300} className="rounded-lg" />
            <Image src="/images/barber-shop-11.jpg" alt="Gallery 2" width={400} height={300} className="rounded-lg" />
            <Image src="/images/barber-7.png" alt="Gallery 3" width={400} height={300} className="rounded-lg object-cover h-48" />
          </div>
        </div>
      </section>
    </div>
  );
}
