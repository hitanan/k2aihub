import { redirect } from 'next/navigation';

interface RegionRedirectProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for known region slugs
export async function generateStaticParams() {
  return [
    { slug: 'bac-bo' },
    { slug: 'tay-bac' },
    { slug: 'dong-bac' },
    { slug: 'dong-bang-bac-bo' },
    { slug: 'bac-trung-bo' },
    { slug: 'nam-trung-bo' },
    { slug: 'tay-nguyen' },
    { slug: 'dong-nam-bo' },
    { slug: 'dong-bang-song-cuu-long' },
  ];
}

export default async function RegionRedirect({ params }: RegionRedirectProps) {
  const { slug } = await params;
  redirect(`/city/region/${slug}`);
}
