import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { citiesData } from "@/data/cities";
import RegionClient from './RegionClient';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

// Static region data
const regions = [
  {
    slug: 'bac-bo',
    name: 'Bắc Bộ',
    description: 'Vùng Bắc Bộ là khu vực phía bắc Việt Nam, bao gồm thủ đô Hà Nội và các tỉnh thành xung quanh.',
    overview: 'Vùng Bắc Bộ có vai trò quan trọng trong lịch sử, chính trị và văn hóa Việt Nam.'
  },
  {
    slug: 'tay-bac',
    name: 'Tây Bắc',
    description: 'Vùng Tây Bắc nổi tiếng với cảnh quan núi non hùng vĩ và các dân tộc thiểu số.',
    overview: 'Khu vực có địa hình núi cao, khí hậu mát mẻ và nền văn hóa đa dạng.'
  },
  {
    slug: 'dong-bac',
    name: 'Đông Bắc',
    description: 'Vùng Đông Bắc với biên giới tiếp giáp Trung Quốc, nổi tiếng với danh lam thắng cảnh.',
    overview: 'Khu vực có nhiều điểm du lịch nổi tiếng như Hạ Long, Sapa, Cao Bằng.'
  },
  {
    slug: 'dong-bang-bac-bo',
    name: 'Đồng bằng Bắc Bộ',
    description: 'Đồng bằng Bắc Bộ là vùng đất phù sa màu mỡ, trung tâm nông nghiệp quan trọng.',
    overview: 'Khu vực có mật độ dân số cao và phát triển công nghiệp mạnh.'
  },
  {
    slug: 'bac-trung-bo',
    name: 'Bắc Trung Bộ',
    description: 'Vùng Bắc Trung Bộ nằm giữa miền Bắc và miền Nam, có nhiều di sản văn hóa.',
    overview: 'Khu vực có thành phố Huế - cố đô với nhiều di tích lịch sử quan trọng.'
  },
  {
    slug: 'nam-trung-bo',
    name: 'Nam Trung Bộ',
    description: 'Vùng Nam Trung Bộ có bờ biển dài và nhiều thành phố du lịch nổi tiếng.',
    overview: 'Khu vực phát triển mạnh du lịch biển với Nha Trang, Phan Thiết.'
  },
  {
    slug: 'tay-nguyen',
    name: 'Tây Nguyên',
    description: 'Tây Nguyên là cao nguyên rộng lớn, nổi tiếng với cà phê và văn hóa gông chiêng.',
    overview: 'Khu vực có khí hậu mát mẻ quanh năm và là trung tâm sản xuất cà phê.'
  },
  {
    slug: 'dong-nam-bo',
    name: 'Đông Nam Bộ',
    description: 'Vùng Đông Nam Bộ là trung tâm kinh tế lớn nhất cả nước với TP.HCM.',
    overview: 'Khu vực có tốc độ phát triển kinh tế nhanh nhất và hiện đại nhất.'
  },
  {
    slug: 'dong-bang-song-cuu-long',
    name: 'Đồng bằng sông Cửu Long',
    description: 'Đồng bằng sông Cửu Long là vựa lúa lớn nhất Việt Nam.',
    overview: 'Khu vực có hệ thống sông ngòi phong phú và nền nông nghiệp phát triển.'
  }
];

function getRegionBySlug(slug: string) {
  return regions.find(region => region.slug === slug);
}

function getCitiesByRegion(regionName: string) {
  return citiesData.filter(city => city.region === regionName);
}

type RegionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return regions.map((region) => ({
    slug: region.slug,
  }));
}

export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  
  if (!region) {
    return {
      title: createTitle("Vùng không tìm thấy"),
    };
  }

  const cities = getCitiesByRegion(region.name);
  
  return {
    title: createTitle(`Vùng ${region.name} - ${cities.length} Tỉnh Thành | Địa Lý Việt Nam`),
    description: createDescription(`Khám phá vùng ${region.name} với ${cities.length} tỉnh thành. ${region.description} Tìm hiểu về địa lý, văn hóa và kinh tế của khu vực`),
    keywords: createKeywords([
      region.name,
      `vùng ${region.name}`,
      'địa lý Việt Nam',
      'tỉnh thành',
      'du lịch',
      'văn hóa',
      ...cities.map(city => city.name)
    ]),
    authors: [{ name: "K2AiHub Team" }],
    openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

      title: createTitle(`Vùng ${region.name} - Khám Phá ${cities.length} Tỉnh Thành`),
      description: createDescription(`${region.description} Cùng khám phá các tỉnh thành: ${cities.slice(0, 3).map(c => c.name).join(', ')}...`),
      type: "article",
      images: [
        {
          url: `/regions/${region.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `Vùng ${region.name} - Địa Lý Việt Nam`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: createTitle(`Vùng ${region.name}`),
      description: createDescription(region.description),
    }
  };
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  
  if (!region) {
    notFound();
  }

  const cities = getCitiesByRegion(region.name);
  
  return <RegionClient region={region} cities={cities} />;
}

export const dynamic = 'force-static';
