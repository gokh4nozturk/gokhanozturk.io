import { cn } from '@lib/utils';
import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from 'components/Header';
import Navigation from 'components/Navigation';
import { ThemeProvider } from 'components/ThemeProvider';
import { Toaster } from 'sonner';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'mx-auto grid h-dvh grid-rows-[auto_1fr] items-center bg-p3-background-light px-4 pt-4 font-sans text-p3-text',
          'tracking-tight selection:bg-p3-accent-light selection:text-p3-text sm:max-w-3xl sm:px-10 sm:pt-10',
          'dark:bg-p3-background dark:text-p3-text-dark dark:selection:bg-p3-accent-dark dark:selection:text-p3-text-dark [&_*]:transition-all'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex h-full flex-col justify-between">{children}</main>
          <Navigation />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <Toaster offset={64} />
      </body>
    </html>
  );
}
