import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="mt-40 flex items-center justify-center">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-6xl font-bold">404 - Not Found</h1>
        <Image src="/taken.svg" alt="404" width={600} height={600} />
      </div>
    </div>
  )
}
