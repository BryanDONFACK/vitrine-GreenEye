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
  title: 'Green Eye | Agriculture de Précision en Afrique : Drones & IA pour des Rendements Optimaux',
  description: 'Révolutionnez l\'agriculture africaine avec Green Eye. Solutions de cartographie drone, analyse IA des cultures et gestion intelligente pour -30% de coûts, +20% de rendements et une agriculture durable. Votre partenaire AgriTech au Cameroun et en Afrique.',
  keywords: [
    'agriculture de précision Afrique',
    'drone agricole IA',
    'analyse culture par IA',
    'optimisation rendements agricoles',
    'réduction coûts agriculture',
    'technologie agricole durable',
    'AgriTech Afrique',
    'cartographie parcelles drone',
    'détection maladies cultures IA',
    'gestion agricole intelligente',
    'innovation agricole Cameroun',
    'Green Eye agriculture',
    'solution agricole low-cost Afrique',
    'stress hydrique drone',
    'NDVI agriculture',
    'agriculture connectée Afrique'
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
  // Structured data for SEO
  /* scripts: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Green Eye",
      "url": "https://greeneye.africa",
      "logo": "https://greeneye.africa/assets/logo.png",
      "description": "Green Eye révolutionne l'agriculture africaine avec des drones et l'IA pour une agriculture de précision durable.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+237 693 972 173",
        "contactType": "Customer Service"
      },
      "sameAs": [
        "https://twitter.com/green_eye_africa"
      ]
    }),
  }], */
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Green Eye",
              "url": "https://greeneye.africa",
              "logo": "https://greeneye.africa/assets/logo.png",
              "description": "Green Eye révolutionne l'agriculture africaine avec des drones et l'IA pour une agriculture de précision durable.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+237 693 972 173",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://twitter.com/green_eye_africa"
              ]
            }),
          }}
        />
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