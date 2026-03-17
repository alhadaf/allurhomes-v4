import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { MasterBuilding30Years } from "@/components/MasterBuilding";

const aboutHero = {
  title: "The Foundation",
  subtitle: "The story of Jeff Akl and the rare engineering foundation of Allure Homes.",
  backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
};

const jeffStory = {
  id: "founder-story",
  title: "A Master's Journey",
  content: `
    <p>Jeff Akl, the founder of Allure Homes, began his journey in 1985, graduating from Florida University. After gaining critical experience building homes as a subcontractor for large builders in Toronto starting in 1986, Jeff moved to Edmonton in 1993.</p>
    <p>In Edmonton, he pursued a Master’s in Structural Engineering, graduating in 1998. Shortly after, Allure Homes was incorporated with a singular mission: to provide a rare combination of high-level engineering and deep on-site construction mastery.</p>
  `,
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
  stats: [
    { label: "Graduated Florida", value: "1985" },
    { label: "Toronto Builds", value: "1986" },
    { label: "Edmonton Master's", value: "1998" },
    { label: "Allure Homes", value: "Est." }
  ]
};

const philosophyData = {
  id: "philosophy",
  title: "Hands-On Philosophy",
  content: `
    <p>We believe that rarity breeds quality. The background in engineering combined with decades of hands-on experience allows us to thrive where other builders falter. We start early with our clients, aiding in land selection and the creation of drawings that eventually become dream homes.</p>
    <p>We encourage our clients to be deeply involved in the construction process. We schedule periodic site visits, taking the time to show you the house as it’s being built and explaining every structural detail to ensure 100% satisfaction.</p>
  `,
  image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1974&auto=format&fit=crop",
  stats: [
    { label: "Site Visits", value: "Regular" },
    { label: "Client Focus", value: "High" },
    { label: "Operation", value: "Turnkey" },
    { label: "Integrity", value: "Built-in" }
  ]
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero {...aboutHero} />
      <MasterBuilding30Years data={jeffStory} imagePosition="right" />
      <MasterBuilding30Years data={philosophyData} className="bg-background" imagePosition="left" />
      <Footer />
    </main>
  );
}
