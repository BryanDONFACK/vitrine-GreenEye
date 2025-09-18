import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { LanguageProvider } from '@/components/providers/language-provider';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Green Eye - Agriculture de Précision | Drone IA pour Agriculteurs Africains',
  description: 'Révolutionnez votre agriculture avec Green Eye : cartographie drone automatique, analyse IA des cultures, gestion intelligente. -30% coûts, +20% rendements. Solution low-cost adaptée à l\'Afrique.',
  keywords: [
    'agriculture de précision',
    'drone agricole',
    'intelligence artificielle agriculture',
    'AgriTech Afrique',
    'cartographie parcelles',
    'analyse spatiale cultures',
    'gestion agricole digitale',
    'technologie agricole Cameroun',
    'Green Eye',
    'agriculture durable',
    'optimisation rendements',
    'réduction coûts agricoles',
    'détection maladies cultures',
    'stress hydrique',
    'NDVI',
    'agriculture connectée'
  ],
  authors: [{ name: 'Green Eye' }],
  creator: 'Green Eye',
  publisher: 'Green Eye',
  metadataBase: new URL('https://greeneye.africa'),
  alternates: {
    languages: {
      'fr': '/fr',
      'en': '/en',
    },
  },
  category: 'technology',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    title: 'Green Eye - Révolutionnez votre Agriculture avec l\'IA et les Drones',
    description: 'Cartographie automatique, analyse IA des cultures, gestion intelligente. La solution AgriTech qui transforme l\'agriculture africaine. Réduisez vos coûts de 30% et augmentez vos rendements de 20%.',
    siteName: 'Green Eye',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Green Eye - Drone et IA pour Agriculture de Précision en Afrique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Eye - Révolutionnez votre Agriculture avec l\'IA',
    description: 'Cartographie drone, analyse IA, gestion intelligente. -30% coûts, +20% rendements. Solution AgriTech adaptée à l\'Afrique.',
    creator: '@green_eye_africa',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  other: {
    'application-name': 'Green Eye',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/logo.png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4CAF50" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}