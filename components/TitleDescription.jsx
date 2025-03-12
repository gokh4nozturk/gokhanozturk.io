export default function TitleDescription({ title, description }) {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
      <p className="my-3 text-sm text-neutral-400 sm:text-lg">{description}</p>
    </div>
  );
}
