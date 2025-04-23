export default function TitleDescription({ title, description }) {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl sm:text-3xl">{title}</h1>
      <p className="my-3 text-p3-text-light text-sm sm:text-lg">{description}</p>
    </div>
  );
}
