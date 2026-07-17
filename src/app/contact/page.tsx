import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <div>
      <section className="bg-stone-900 text-white py-16 text-center">
        <h1 className="font-serif text-4xl">Contact Us</h1>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded" />
            <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 border rounded"></textarea>
            <button type="submit" className="bg-orange-500 text-white px-6 py-3 font-bold hover:bg-orange-600">Send Message</button>
          </form>
          <div className="bg-stone-50 p-8 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Visit Us</h3>
            <p className="text-gray-600 mb-2">3130 Telegraph Rd</p>
            <p className="text-gray-600 mb-4">Ventura, CA 93003</p>
            <h3 className="font-bold text-lg mb-2">Call</h3>
            <a href="tel:+18057793804" className="text-orange-500 text-xl font-bold">(805) 779-3804</a>
            <h3 className="font-bold text-lg mt-4 mb-2">Hours</h3>
            <p className="text-gray-600">Sun – Fri: 10am – 6pm</p>
            <p className="text-gray-600">Sat: 10am – 6pm</p>
          </div>
        </div>
      </section>
    </div>
  );
}
