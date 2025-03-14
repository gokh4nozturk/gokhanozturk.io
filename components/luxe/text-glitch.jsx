export function TextGlitch({ children }) {
  return (
    <div className="group relative overflow-hidden font-medium">
      <span className="invisible">{children}</span>
      <span className="absolute left-0 top-0 text-neutral-500 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full dark:text-neutral-400">
        {children}
      </span>
      <span className="absolute left-0 top-0 translate-y-full text-neutral-500 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0 dark:text-neutral-400">
        {children}
      </span>
    </div>
  );
}
