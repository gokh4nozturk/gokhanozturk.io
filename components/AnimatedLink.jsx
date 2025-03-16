import cn from 'classnames';

export default function AnimatedLink({
  children,
  color = 'black',
  href = '#',
  name = 'Link',
  className,
}) {
  const textColor = {
    black: 'sm:hover:text-p3-text dark:sm:hover:text-p3-text-dark',
    rockads: 'sm:hover:text-p3-primary',
    teknasyon: 'sm:hover:text-p3-secondary',
    blue: 'hover:text-p3-accent dark:hover:text-p3-accent-light',
  }[color];
  const fromColor = {
    black: 'from-p3-text dark:from-p3-text-dark',
    rockads: 'from-p3-primary',
    teknasyon: 'from-p3-secondary',
    blue: 'from-p3-accent dark:from-p3-accent-light',
  }[color];
  const toColor = {
    black: 'to-p3-text dark:to-p3-text-dark',
    rockads: 'to-p3-primary',
    teknasyon: 'to-p3-secondary',
    blue: 'to-p3-accent dark:to-p3-accent-light',
  }[color];

  return (
    <a
      className={cn('group transition-all duration-300 ease-in-out', textColor, className)}
      href={href}
      target="_blank"
      aria-label={`Link to external website of ${name}`}
      name={name}
      title={name}
      rel="noreferrer"
    >
      <span
        className={cn(
          'bg-gradient-to-r',
          fromColor,
          toColor,
          'bg-[length:0%_1px] bg-left-bottom bg-no-repeat',
          'transition-all duration-500 ease-out',
          'group-hover:bg-[length:100%_1px] max-sm:bg-[length:100%_1px]'
        )}
      >
        {children}
      </span>
    </a>
  );
}
