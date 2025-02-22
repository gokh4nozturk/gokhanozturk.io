'use client'
import { useRouter } from 'next/navigation'

export default function YearFilter({ year = 'all' }) {
  const router = useRouter()
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 4 }, (_, i) => currentYear - i)

  const handleChange = (e) => {
    const selectedYear = e.target.value

    if (selectedYear === 'all') {
      router.push('/bookmarks')
      return
    }

    router.push(`/bookmarks?year=${selectedYear}`)
  }

  return (
    <div className="relative">
      <select
        name="year"
        id="year"
        defaultValue={year.split('-')[0] || 'all'}
        onChange={handleChange}
        className="mt-2 block w-full min-w-20 rounded-md border border-gray-200 bg-white px-2 py-0.5 text-sm outline-none transition-colors hover:border-gray-300 focus:border-gray-400 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700 dark:focus:border-gray-600"
      >
        <option value="all">All</option>
        {years.map(y => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </div>
  )
}
