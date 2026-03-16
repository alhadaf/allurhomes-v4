import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

const contactHero = {
  title: "Initiate Consultation",
  subtitle: "Connect with our structural engineering team to request a professional quote.",
  backgroundImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop"
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero {...contactHero} />
      
      <section className="py-24 lg:py-32 bg-secondary" id="contact-form">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading text-primary mb-8 leading-tight uppercase tracking-wide">
                  Direct Line
                </h2>
                <p className="text-sm md:text-base text-text-muted font-body leading-loose mb-12">
                  "We thrive on our customer satisfaction and encourage our clients to be involved in every step of the construction process."
                </p>
              </div>

              <div className="space-y-10">
                <div className="editorial-border-b pb-4">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted mb-2 font-body">Headquarters</h4>
                  <address className="not-italic text-2xl font-heading text-primary">
                    Edmonton & Surrounding Areas<br />
                    Alberta, Canada
                  </address>
                </div>

                <div className="editorial-border-b pb-4">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted mb-2 font-body">Direct Line</h4>
                  <p className="text-2xl font-heading text-primary hover:text-accent transition-colors">
                    780.000.0000
                  </p>
                </div>

                <div className="editorial-border-b pb-4">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted mb-2 font-body">Quote Submissions</h4>
                  <a href="mailto:example@example.com" className="text-2xl font-heading text-primary hover:text-accent transition-colors">
                    example@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
