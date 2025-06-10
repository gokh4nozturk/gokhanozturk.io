import { cn } from "@lib/utils";
import { usePathname } from "next/navigation";

export function NameTransition() {
  const pathname = usePathname();
  const isResume = pathname === "/resume";

  return (
    <h1 className="font-medium text-xl transition-element sm:text-3xl">
      <span className="sr-only">Gökhan Öztürk</span>
      <span aria-hidden="true" className="group relative block overflow-hidden">
        <span
          className={cn(
            "group-hover:-translate-y-full inline-block transition-all duration-300 ease-in-out",
            isResume && "-translate-y-full",
          )}
        >
          {/* these '123' suffix for second word, because they are not same length */}
          {"Gökhan Öztürk123".split("").map((letter) => (
            <span
              key={`name-${Math.random().toString(36).substr(2, 9)}`}
              className={cn(
                "inline-block",
                `group-hover:delay-[${letter.charCodeAt(0) * 25}ms]`,
              )}
            >
              {letter === " " || ["1", "2", "3"].includes(letter)
                ? "\u00A0"
                : letter}
            </span>
          ))}
        </span>
        <span
          className={cn(
            "absolute top-0 left-0 inline-block translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0",
            isResume && "translate-y-0",
          )}
        >
          {Array.from("👻 Witchcraft 🕸️").map((letter) => (
            <span
              key={`witch-${Math.random().toString(36).substr(2, 9)}`}
              className="inline-block"
              style={{ transitionDelay: `${letter.charCodeAt(0) * 25}ms` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
    </h1>
  );
}
