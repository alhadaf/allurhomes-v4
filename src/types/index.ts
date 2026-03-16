export interface EngineeringExcellenceMeetsLuxuryLivingData {
  id: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface MasterBuilding30YearsData {
  id: string;
  title: string;
  content: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
}

export interface OurMasterpiecesData {
  id: string;
  title: string;
  projects: Array<{
    id: string;
    title: string;
    category: string;
    image: string;
    link: string;
  }>;
}

export interface OurExpertiseData {
  id: string;
  title: string;
  items: Array<{
    title: string;
    description: string;
    image: string;
    link: string;
  }>;
}

export interface FeaturedProjectsData {
  id: string;
  title: string;
  projects: Array<{
    id: string;
    title: string;
    category: string;
    image: string;
    link: string;
  }>;
}

export interface TheTurnkeyProcessData {
  id: string;
  title: string;
  steps: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface ClientStoriesData {
  id: string;
  title: string;
  testimonials: Array<{
    author: string;
    role: string;
    quote: string;
    image?: string;
  }>;
}

export interface StartYourProjectData {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}
