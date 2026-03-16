import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { OurMasterpieces } from "@/components/OurMasterpieces";

const portfolioHero = {
  title: "The Archives",
  subtitle: "A curated selection of our most ambitious structural engineering and custom building achievements.",
  backgroundImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
};

const portfolioData = {
  id: "portfolio-grid",
  title: "All Projects",
  projects: [
    {
      id: "1",
      title: "The Glenora Estate",
      category: "Custom",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      link: "/portfolio/1"
    },
    {
      id: "2",
      title: "Windermere Ridge",
      category: "Infill",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop",
      link: "/portfolio/2"
    },
    {
      id: "3",
      title: "Modern 4-Plex",
      category: "Infill",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      link: "/portfolio/3"
    },
    {
      id: "4",
      title: "Executive Office Plaza",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      link: "/portfolio/4"
    },
    {
      id: "5",
      title: "The Parkland Manor",
      category: "Custom",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      link: "/portfolio/5"
    },
    {
      id: "6",
      title: "Riverside Garden Suite",
      category: "Infill",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1974&auto=format&fit=crop",
      link: "/portfolio/6"
    }
  ]
};

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <PageHero {...portfolioHero} />
      <OurMasterpieces data={portfolioData} />
      <Footer />
    </main>
  );
}
