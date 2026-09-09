import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nothing to see here.',
  description: 'Move along. Nothing to see here.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
