import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl mb-4">Ventura Barber</h3>
          <p className="text-gray-400">Fresh Since 2000</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-gray-400">3130 Telegraph Rd, Ventura, CA 93003</p>
          <a href="tel:+18057793804" className="text-orange-400">(805) 779-3804</a>
        </div>
        <div>
          <h4 className="font-bold mb-4">Hours</h4>
          <p className="text-gray-400">Sun – Fri: 10am – 6pm</p>
          <p className="text-gray-400">Sat: 10am – 6pm</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-stone-700 text-center text-gray-500">
        <p>Designed by Elegant Themes | Powered by WordPress</p>
      </div>
    </footer>
  );
}
