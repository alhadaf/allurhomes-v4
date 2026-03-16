import { EngineeringExcellenceMeetsLuxuryLiving } from "@/components/EngineeringExcellence";
import { MasterBuilding30Years } from "@/components/MasterBuilding";
import { OurExpertise } from "@/components/OurExpertise";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { TheTurnkeyProcess } from "@/components/TheTurnkeyProcess";
import { ClientStories } from "@/components/ClientStories";
import { StartYourProject } from "@/components/StartYourProject";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const heroData = {
  id: "hero",
  headline: "Engineering Rare Quality.",
  subheadline: "A synthesis of structural mastery and timeless architecture in Edmonton.",
  ctaText: "Discover Our Work",
  ctaLink: "/portfolio",
  backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
};

const masterBuildingData = {
  id: "master-building",
  title: "The Intersection of Engineering & Elegance",
  content: `
    <p>Founded by Jeff Akl, Allure Homes Ltd. represents a rare bridge between high-level structural theory and on-site reality. After graduating from Florida University in 1985 and building homes in Toronto, Jeff earned his Master’s in Structural Engineering in Edmonton in 1998.</p>
    <p>This dual background allows us to navigate architectural complexities that other builders cannot. We provide a complete turnkey operation focused on absolute structural integrity and uncompromising aesthetic quality.</p>
  `,
  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  stats: [
    { label: "Experience", value: "30+ Years" },
    { label: "Engineering", value: "Master's" },
    { label: "Satisfaction", value: "100%" },
    { label: "Service Area", value: "YEG" }
  ]
};

const expertiseData = {
  id: "expertise",
  title: "Core Disciplines",
  items: [
    {
      title: "Custom Residences",
      description: "Bespoke homes built on new or infill lots, developed hand-in-hand with your requirements.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      link: "/expertise"
    },
    {
      title: "Infill Developments",
      description: "Investor-focused developments. Replace old structures with modern 4-plexes or 8-unit buildings.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      link: "/expertise"
    },
    {
      title: "Major Renovations",
      description: "Realize your dream home without full demolition. We specialize in high-impact structural renovations.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1974&auto=format&fit=crop",
      link: "/expertise"
    },
    {
      title: "Commercial Plazas",
      description: "New commercial builds and multi-level office complexes designed for high demand.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      link: "/expertise"
    }
  ]
};

const featuredProjectsData = {
  id: "featured",
  title: "Selected Archives",
  projects: [
    {
      id: "1",
      title: "The Glenora Estate",
      category: "Custom Residence",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      link: "/portfolio"
    },
    {
      id: "2",
      title: "Windermere Ridge",
      category: "Investment Project",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop",
      link: "/portfolio"
    }
  ]
};

const turnkeyProcessData = {
  id: "process",
  title: "A Turnkey Operation",
  steps: [
    {
      title: "Drafting",
      description: "We help select land and create drawings that become your dream home.",
      icon: "Home"
    },
    {
      title: "Permitting",
      description: "We handle the entire application process for all municipal permits.",
      icon: "FileCheck"
    },
    {
      title: "Construction",
      description: "Periodic site visits and direct involvement to ensure your vision is realized.",
      icon: "HardHat"
    },
    {
      title: "Handover",
      description: "A complete turnkey experience with 100% customer satisfaction.",
      icon: "PenTool"
    }
  ]
};

const clientStoriesData = {
  id: "testimonials",
  title: "Client Reflections",
  testimonials: [
    {
      author: "David Thompson",
      role: "Edmonton Homeowner",
      quote: "Jeff's engineering background made all the difference. I felt completely safe knowing the structural integrity was handled by an expert.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      author: "Sarah Jenkins",
      role: "Infill Investor",
      quote: "They turned our old lot into a high-revenue 4-plex. Their knowledge of city bylaws saved us months of delays.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    },
    {
      author: "Michael Rossi",
      role: "Business Owner",
      quote: "Clean, straight to the point, and highly professional. Our commercial plaza was delivered on time and within budget.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    }
  ]
};

const startProjectData = {
  id: "cta",
  title: "Initiate Your Legacy",
  description: "Whether it's a family home, an investment infill, or a commercial plaza, our structural engineering team is ready.",
  ctaText: "Request Consultation",
  ctaLink: "/contact",
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop"
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <EngineeringExcellenceMeetsLuxuryLiving data={heroData} />
      <MasterBuilding30Years data={masterBuildingData} imagePosition="left" />
      <OurExpertise data={expertiseData} />
      <FeaturedProjects data={featuredProjectsData} />
      <TheTurnkeyProcess data={turnkeyProcessData} />
      <ClientStories data={clientStoriesData} />
      <StartYourProject data={startProjectData} />
      <Footer />
    </main>
  );
}
