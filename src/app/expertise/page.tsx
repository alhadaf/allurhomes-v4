import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StartYourProject } from "@/components/StartYourProject";
import { PageHero } from "@/components/PageHero";
import { MasterBuilding30Years } from "@/components/MasterBuilding";

const expertiseHero = {
  title: "Building Excellence",
  subtitle: "From custom luxury sanctuaries to high-ROI multi-unit developments and commercial plazas.",
  backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
};

const customHomesData = {
  id: "custom-homes",
  title: "Custom Luxury Homes",
  content: `
    <p>We build new homes on new or infill lots based on drawings developed collaboratively with our clients. Our process ensures the final plans perfectly match your specific requirements, lifestyle, and aesthetic goals.</p>
    <p>With Jeff Akl's background in structural engineering, we can integrate daring architectural features while maintaining absolute structural integrity.</p>
  `,
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  stats: [
    { label: "Project Range", value: "$300k-$2M" },
    { label: "Design", value: "Collaborative" },
    { label: "Approach", value: "Turnkey" },
    { label: "Lead", value: "Engineer" }
  ]
};

const infillData = {
  id: "infill",
  title: "Infill / Garage Suites",
  content: `
    <p>Specializing in maximizing land value, we help infill owners demolish aging structures to build high-density 4-plexes or 8-unit buildings. This model allows owners to move into a new unit while generating rental income from others.</p>
    <p>We also build custom Garden Suites in backyards, an ideal solution for supplementing income on existing residential properties.</p>
  `,
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  stats: [
    { label: "ROI Focus", value: "Peak" },
    { label: "Zoning", value: "Expert" },
    { label: "Density", value: "High" },
    { label: "Income", value: "Recurring" }
  ]
};

const renovationsData = {
  id: "renovations",
  title: "Residential Renovations",
  content: `
    <p>Realize your dream home without full demolition. We specialize in unique, high-impact renovations including kitchens, luxury baths, open-concept conversions, and large room additions.</p>
    <p>Every renovation is treated as a unique structural challenge, ensuring your modern upgrades are backed by engineered stability.</p>
  `,
  image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1974&auto=format&fit=crop",
  stats: [
    { label: "Complexity", value: "Handled" },
    { label: "Style", value: "Modern" },
    { label: "Detail", value: "Master" },
    { label: "Outcome", value: "Dream" }
  ]
};

const commercialData = {
  id: "commercial",
  title: "Commercial Projects",
  content: `
    <p>We build new commercial plazas, specializing in multi-level developments with street-level retail and second-floor offices. Our team helps you determine the best configuration based on location and local demand.</p>
    <p>We provide full construction services for landlords and business owners looking for professional, high-performance commercial assets.</p>
  `,
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  stats: [
    { label: "Sector", value: "Retail/Office" },
    { label: "Scale", value: "Plazas" },
    { label: "Focus", value: "Business" },
    { label: "Quality", value: "Commercial" }
  ]
};

export default function ExpertisePage() {
  return (
    <main>
      <Navbar />
      <PageHero {...expertiseHero} />
      
      <MasterBuilding30Years data={customHomesData} imagePosition="right" />
      <MasterBuilding30Years data={infillData} className="bg-background" imagePosition="left" />
      <MasterBuilding30Years data={renovationsData} imagePosition="right" />
      <MasterBuilding30Years data={commercialData} className="bg-background" imagePosition="left" />
      
      <StartYourProject 
        data={{
          id: "expertise-cta",
          title: "Request a Detailed Quote",
          description: "Let's discuss your project goals, whether it's a family legacy home or an investment plaza.",
          ctaText: "Get in Touch",
          ctaLink: "/contact",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop"
        }} 
      />
      <Footer />
    </main>
  );
}
