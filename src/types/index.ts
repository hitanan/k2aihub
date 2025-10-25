export * from './blog';

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

export interface BlogTag {
  slug: string;
  name: string;
  description: string;
}

export interface TouristAttraction {
  name: string;
  description: string;
  imageUrl: string;
  location?: string;
  url?: string;
}

export interface City {
  id: number;
  code: string;
  name: string;
  slug: string;
  oldNames: string[];
  region: string;
  coordinates: {
    x: number;
    y: number;
  };
  color: string;
  population: string;
  area: string;
  description: string;
  fullPageContent?: string;
  touristAttractions?: TouristAttraction[];
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Region {
  name: string;
  slug: string;
  description: string;
}

export interface Contributor {
  name: string;
  bio: string;
  avatarUrl: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}
