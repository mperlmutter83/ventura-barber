import { getHours, hoursToLines } from '@/lib/hours';

/**
 * Live business hours (synced from the provider's Yes Crew portal).
 * Async server component; falls back to last known hours if the API is down.
 */
export default async function HoursLines({
  as = 'p',
  className,
  showClosed = true,
}: {
  as?: 'p' | 'li';
  className?: string;
  showClosed?: boolean;
}) {
  const lines = hoursToLines(await getHours());
  const shown = showClosed ? lines : lines.filter((l) => l.value !== 'Closed');
  const Tag = as;
  return (
    <>
      {shown.map((l) => (
        <Tag key={l.label} className={className}>
          {l.label}: {l.value}
        </Tag>
      ))}
    </>
  );
}
