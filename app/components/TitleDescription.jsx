export default function TitleDescription({ title, description }) {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="my-3 text-neutral-400">{description}</p>
    </div>
  )
}
