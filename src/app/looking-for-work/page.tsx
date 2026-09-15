import type { Metadata } from 'next';
import WorkForm from '@/components/WorkForm';

const PHONE_DISPLAY = '(805) 779-3804';
const PHONE_HREF = 'tel:+18057793804';

export const metadata: Metadata = {
  title: 'Looking for Work',
  description:
    "Looking for barber work in Ventura? Local barbershops are hiring. Fill out the quick form and we'll connect you — or call (805) 779-3804.",
  alternates: { canonical: 'https://venturabarber.com/looking-for-work' },
};

const STEPS = [
  {
    n: '1',
    title: 'Tell us about yourself',
    body: 'A quick 60-second form — no resume, no cover letter, no endless applications.',
  },
  {
    n: '2',
    title: 'We connect you',
    body: 'We share your details with local barbershops that are actively hiring.',
  },
  {
    n: '3',
    title: 'You hear back directly',
    body: 'Interested shops contact you by phone, usually within a few days.',
  },
];

const WORK_TYPES = [
  'Haircuts',
  'Fades',
  'Beard Trims',
  'Line-Ups',
  'Hot Towel Shaves',
  'Kids Cuts',
];

export default function LookingForWorkPage() {
  return (
    <div className="bg-stone-100">
      <section className="bg-stone-900 text-white py-20 text-center">
        <p className="text-orange-400 tracking-widest uppercase text-sm font-semibold">Looking for Work?</p>
        <h1 className="font-serif text-4xl md:text-6xl mt-2 mb-6">Barber Work in Ventura</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-400 px-4">
          Local barbershops are growing and looking for dependable barbers. Tell us about
          yourself and we&apos;ll connect you with shops that are hiring — free, fast, and no
          obligation.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#work-form"
            className="inline-block bg-orange-500 px-8 py-3 font-medium text-white hover:bg-orange-600"
          >
            Fill Out the Quick Form
          </a>
          <a
            href={PHONE_HREF}
            className="inline-block border-2 border-orange-400 px-8 py-3 font-medium text-orange-400 hover:bg-orange-400/10"
          >
            Or Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-center text-stone-900 mb-10">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-stone-100 p-8 rounded-lg text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 font-serif text-xl text-stone-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-center text-stone-900">The Kind of Work Available</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Barbershops across Ventura hire for a range of barber work, including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {WORK_TYPES.map((w) => (
              <li
                key={w}
                className="rounded-lg border border-stone-200 bg-white px-5 py-4 text-stone-700 font-medium shadow-sm"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work-form" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-lg border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-center text-stone-900">Apply in 60 Seconds</h2>
            <p className="mt-2 text-center text-gray-600">
              Free and confidential — we&apos;ll only share your details with shops that are hiring.
            </p>
            <div className="mt-8">
              <WorkForm />
            </div>
          </div>
          <p className="mt-8 text-center text-gray-600">
            Own a barbershop and need reliable barbers?{' '}
            <a href={PHONE_HREF} className="font-bold text-orange-500 underline">
              Call {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
