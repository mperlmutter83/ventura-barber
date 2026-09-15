'use client';

import { useRef, useState } from 'react';

const PHONE_DISPLAY = '(805) 779-3804';
const PHONE_HREF = 'tel:+18057793804';

const EXPERIENCE_OPTIONS = [
  'No experience yet — willing to learn',
  'Less than 1 year',
  '1–3 years',
  '3–5 years',
  '5+ years',
];

const inputClass =
  'w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 outline-none transition focus:ring-2 focus:ring-orange-500 focus:border-orange-500';

export default function WorkForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
    company_website: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const submissionId = useRef<string>(crypto.randomUUID());
  const startedAt = useRef<number>(Date.now());

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: 'Looking for Work',
          message: `Experience: ${formData.experience || 'not specified'}. ${formData.message}`.trim(),
          company_website: formData.company_website,
          submission_id: submissionId.current,
          elapsed_ms: Date.now() - startedAt.current,
        }),
      });

      if (response.ok) {
        // GA4/GTM conversion event — picked up by the site's GTM container when present.
        const dlWindow = window as unknown as { dataLayer?: Record<string, unknown>[] };
        dlWindow.dataLayer = dlWindow.dataLayer ?? [];
        dlWindow.dataLayer.push({ event: 'generate_lead' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center">
        <p className="text-3xl">🎉</p>
        <h3 className="mt-3 font-serif text-2xl text-stone-900">You&apos;re on the list!</h3>
        <p className="mt-3 text-gray-600">
          Thanks, {formData.name.split(' ')[0]}! Your details are in. Local shops that are
          hiring will reach out to you directly.
        </p>
        <p className="mt-4 text-gray-600">
          Want to move faster?{' '}
          <a href={PHONE_HREF} className="font-bold text-orange-500 underline">
            Call {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — invisible to humans, bots fill it and get silently dropped */}
      <input
        type="text"
        id="company_website"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] w-px h-px opacity-0"
        aria-hidden="true"
        value={formData.company_website}
        onChange={(e) => updateField('company_website', e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-stone-700">
            Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1 text-stone-700">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-stone-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium mb-1 text-stone-700">
          Experience
        </label>
        <select
          id="experience"
          value={formData.experience}
          onChange={(e) => updateField('experience', e.target.value)}
          className={inputClass}
        >
          <option value="">How much experience do you have?</option>
          {EXPERIENCE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-stone-700">
          Availability &amp; anything we should know
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="e.g. Available weekdays, have my own transportation, looking for full-time…"
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-orange-500 py-3 px-6 font-semibold text-white hover:bg-orange-600 transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending...' : 'Find Work Near Me'}
      </button>

      {status === 'error' && (
        <p className="text-center font-medium text-red-500">
          Something went wrong. Please call us at{' '}
          <a href={PHONE_HREF} className="underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      )}
    </form>
  );
}
