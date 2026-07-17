import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Services' };

export default function ServicesPage() {
  const services = [
    { name: 'Haircut', price: '$25', desc: 'A men\'s haircut offering diverse styles tailored to reflect your unique style.' },
    { name: 'Buzz Cut', price: '$20', desc: 'Timeless simplicity, perfect for those who embrace a confident and fresh appearance.' },
    { name: 'Kids Cut', price: '$18', desc: 'A relaxed environment where children can enjoy their haircut experience.' },
    { name: 'Beard Trim', price: '$15', desc: 'Precision beard trims tailored to accentuate your facial features.' },
    { name: 'Clean Shave', price: '$22', desc: 'Traditional techniques for an impeccably smooth finish.' },
    { name: 'Styled Haircut', price: '$30', desc: 'Blending classic techniques with modern trends.' },
    { name: 'Long Sheer Cut', price: '$28', desc: 'Soft layers and seamless blends for a natural shine.' },
    { name: 'Straight Razor', price: '$25', desc: 'The ultimate in grooming with this timeless tool.' },
    { name: 'Clipper Haircut', price: '$22', desc: 'Sharp, clean lines and effortlessly groomed looks.' },
  ];
  return (
    <div>
      <section className="bg-stone-900 text-white py-16 text-center">
        <h1 className="font-serif text-4xl">Our Services</h1>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid gap-4">
          {services.map((s, i) => (
            <div key={i} className="flex justify-between items-center p-4 bg-stone-50 rounded-lg">
              <div>
                <h3 className="font-bold text-stone-900">{s.name}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
              <span className="text-orange-500 font-bold text-lg">{s.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
