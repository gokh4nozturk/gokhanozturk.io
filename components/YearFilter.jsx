'use client';
import { useRouter } from 'next/navigation';

export default function YearFilter({ year = 'all' }) {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 4 }, (_, i) => currentYear - i);

  const handleChange = (e) => {
    const selectedYear = e.target.value;

    if (selectedYear === 'all') {
      router.push('/bookmarks');
      return;
    }

    router.push(`/bookmarks?year=${selectedYear}`);
  };

  return (
    <div className="relative">
      <select
        name="year"
        id="year"
        defaultValue={year.split('-')[0] || 'all'}
        onChange={handleChange}
        className="mt-2 block w-full min-w-20 rounded-md border border-p3-border bg-p3-background-light px-2 py-0.5 text-sm outline-none transition-colors hover:border-p3-border focus:border-p3-border dark:border-p3-border-dark dark:bg-p3-background-dark dark:hover:border-p3-border-dark dark:focus:border-p3-border-dark"
      >
        <option value="all">All</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
}
