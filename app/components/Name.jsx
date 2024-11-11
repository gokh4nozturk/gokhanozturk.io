export function NameTransition() {
  return (
    <h1 className="transition-element text-xl font-medium sm:text-3xl">
      <span className="sr-only">Gökhan Öztürk</span>
      <span aria-hidden="true" className="group relative block overflow-hidden">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {/* these '123' suffix for second word, because they are not same length */}
          {'Gökhan Öztürk123'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === ' ' || ['1', '2', '3'].includes(letter) ? '\u00A0' : letter}
            </span>
          ))}
        </span>
        <span className="absolute left-0 top-0 inline-block translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
          {Array.from('👻 Witchcraft 🕸️').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
      </span>
    </h1>
  )
}
