import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Dr. Lina - Pediatric Dentist & Orthodontist in Beirut | French-Trained Specialist",
  description:
    "Dr. Lina is Beirut's leading French-trained pediatric dentist & orthodontist with 30+ years experience. Specializing in pain-free dental care for children without anesthesia. Grand Beyrouth, Ras El Nabeh.",
  keywords:
    "dr lina abdel hussein chamseddine, best pediatric dentist beirut, best orthodontist lebanon, best dentist middle east, french trained dentist lebanon, maxillofacial prosthetics lebanon, children dentist ras el nabeh beirut, grand beyrouth dentist, kids dentist lebanon, gentle dental care beirut, pain-free dentist lebanon, dentist without anesthesia lebanon, university paris trained dentist, أفضل طبيب أسنان لبنان, أفضل طبيب أسنان أطفال بيروت, أفضل دكتور أسنان للأطفال لبنان, طبيب أسنان أطفال بيروت, دكتور لينا عبد الحسين شمس الدين, تقويم أسنان بيروت, تقويم أسنان لبنان, طبيب أسنان راس النبع, طبيب أسنان بدون بنج, طبيب أسنان فرنسي التدريب, عيادة أسنان بيروت, أفضل عيادة أسنان أطفال الشرق الأوسط",
  authors: [{ name: "Dr. Lina Chamseddine" }],
  creator: "Dr. Lina Chamseddine",
  publisher: "Dr. Lina Chamseddine",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://drlina.info",
    languages: {
      "en-US": "https://drlina.info",
      "en-LB": "https://drlina.info",
      "ar-LB": "https://drlina.info/ar",
      "ar-SA": "https://drlina.info/ar",
      "ar-AE": "https://drlina.info/ar",
      "ar-KW": "https://drlina.info/ar",
      "ar-QA": "https://drlina.info/ar",
      "fr-LB": "https://drlina.info/fr",
    },
  },
  openGraph: {
    title: "Dr. Lina Chamseddine - Leading Pediatric Dentist in Beirut",
    description:
      "30+ years of gentle, pain-free dental care for children. No anesthesia needed. Book your child's appointment with Beirut's most trusted pediatric dentist.",
    url: "https://drlina.info",
    siteName: "Dr. Lina Chamseddine Dental Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://drlina.info/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Lina Chamseddine - Pediatric Dentist in Beirut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Lina Chamseddine - Pediatric Dentist & Orthodontist in Beirut",
    description:
      "Gentle dental care for children with 30+ years experience. No anesthesia needed.",
    images: ["https://drlina.info/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
  name: "Dr. Lina Chamseddine",
  alternateName: ["Dr. Lina", "دكتور لينا عبد الحسين شمس الدين"],
  description:
    "French-trained pediatric dentist, orthodontist, and maxillofacial prosthetics specialist with 30+ years of experience providing gentle, pain-free dental care for children in Beirut, Lebanon. Specialist in treating children without anesthesia.",
  url: "https://drlina.info",
  telephone: "+9611647444",
  email: "info@drlina.info",
  image: "https://drlina.info/og-image.jpg",
  logo: "https://drlina.info/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grand Beyrouth Building, 5th Floor, Bechara Khoury Street",
    addressLocality: "Ras El Nabeh",
    addressRegion: "Beirut",
    addressCountry: "LB",
    postalCode: "1107",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.8938,
    longitude: 35.5018,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
  currenciesAccepted: "LBP",
  areaServed: [
    {
      "@type": "City",
      name: "Beirut",
    },
    {
      "@type": "Country",
      name: "Lebanon",
    },
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 33.8938,
        longitude: 35.5018,
      },
      geoRadius: "50000",
    },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 33.8938,
      longitude: 35.5018,
    },
    geoRadius: "100000",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
  },
  medicalSpecialty: [
    "Pediatric Dentistry",
    "Orthodontics",
    "Maxillofacial Prosthetics",
  ],
  knowsAbout: [
    "French Dental Techniques",
    "Pain-free Pediatric Dentistry",
    "Children Psychology",
    "Dental Anxiety Management",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Université Paris 7 - Denis Diderot / Garancière",
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
    },
  },
  memberOf: {
    "@type": "Organization",
    name: "Lebanese Dental Association",
    url: "https://www.lda.org.lb",
  },
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Pediatric Dental Care",
      description:
        "Specialized dental care for children without anesthesia using trust-based approach",
      procedureType: "Therapeutic",
    },
    {
      "@type": "MedicalProcedure",
      name: "Orthodontics",
      description:
        "Teeth alignment and bite correction for children and adults using modern French techniques",
      procedureType: "Therapeutic",
    },
    {
      "@type": "MedicalProcedure",
      name: "Maxillofacial Prosthetics",
      description:
        "Specialized prosthetic rehabilitation for patients with facial defects or oral conditions",
      procedureType: "Therapeutic",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "UniversityLevel",
      name: "Diplôme Universitaire de Prothèse Maxillo-Faciale",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "Université Paris 7 - Denis Diderot",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://drlina.info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="GOOGLE_SEARCH_CONSOLE_CODE"
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
