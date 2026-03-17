import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary pt-32 pb-12 editorial-border-b border-t">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-4 flex flex-col">
            <Link href="/" className="flex flex-col mb-8 group w-max">
              <span className="text-3xl font-heading tracking-widest uppercase text-primary">
                Allure
              </span>
              <span className="text-[10px] font-body tracking-[0.4em] uppercase text-accent ml-1">
                HOMES
              </span>
            </Link>
            <p className="text-text-muted font-body text-sm leading-relaxed max-w-xs pr-4">
              Master builders and structural engineers crafting timeless residences and commercial spaces in Edmonton, Alberta.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-heading text-lg text-primary mb-8 tracking-widest uppercase">Explore</h4>
            <ul className="flex flex-col gap-4">
              {["Home", "Expertise", "Portfolio", "Our Story"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-text-muted hover:text-accent transition-colors font-body text-sm tracking-wider"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-heading text-lg text-primary mb-8 tracking-widest uppercase">Disciplines</h4>
            <ul className="flex flex-col gap-4">
              {["Custom Luxury Homes", "Infill Developments", "Garden Suites", "Renovations", "Commercial Plazas"].map((item) => (
                <li key={item}>
                  <Link 
                    href="/expertise"
                    className="text-text-muted hover:text-accent transition-colors font-body text-sm tracking-wider"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-heading text-lg text-primary mb-8 tracking-widest uppercase">Contact</h4>
            <ul className="flex flex-col gap-5 font-body text-sm text-text-muted tracking-wider">
              <li>
                <span className="block text-primary mb-1 text-xs">Headquarters</span>
                Edmonton, Alberta<br/>Canada
              </li>
              <li>
                <span className="block text-primary mb-1 text-xs">Direct</span>
                780.000.0000
              </li>
              <li>
                <span className="block text-primary mb-1 text-xs">Email</span>
                <a href="mailto:example@example.com" className="hover:text-accent transition-colors">
                  example@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-xs font-body tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Allure Homes
          </p>
          <div className="flex gap-8 text-text-muted text-xs uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-accent transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
