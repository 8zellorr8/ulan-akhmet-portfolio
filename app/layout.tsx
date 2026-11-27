import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/ibm-plex-sans';
import '@fontsource-variable/jetbrains-mono';
import { portfolio } from './content';
import './styles.css';

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = productionHost ? `https://${productionHost}` : 'http://127.0.0.1:4173';
const title = `${portfolio.name} | Backend & AI Projects`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: portfolio.description,
  icons: { icon: '/icon.png' },
  openGraph: {
    type: 'website',
    title,
    description: portfolio.description,
    images: [{ url: '/social-card.png', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: portfolio.description,
    images: ['/social-card.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
