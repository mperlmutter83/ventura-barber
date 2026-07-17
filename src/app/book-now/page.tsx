import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Book Now' };

export default function BookNowPage() {
  return (
    <div>
      <section className="bg-stone-900 text-white py-16 text-center">
        <h1 className="font-serif text-4xl">Book A Chair</h1>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded" />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border rounded" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded" />
            <select className="w-full px-4 py-3 border rounded">
              <option>Select Service</option>
              <option>Haircut</option>
              <option>Buzz Cut</option>
              <option>Kids Cut</option>
              <option>Beard Trim</option>
              <option>Clean Shave</option>
              <option>Styled Haircut</option>
            </select>
            <input type="date" className="w-full px-4 py-3 border rounded" />
            <textarea placeholder="Special requests" rows={3} className="w-full px-4 py-3 border rounded"></textarea>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 font-bold hover:bg-orange-600">Book Appointment</button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-600">Or call us:</p>
            <a href="tel:+18057793804" className="text-2xl font-bold text-orange-500">(805) 779-3804</a>
          </div>
        </div>
      </section>
    </div>
  );
}
