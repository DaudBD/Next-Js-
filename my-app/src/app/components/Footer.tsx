const footerLinks = [
  { label: "Our approach", href: "#about" },
  { label: "Care & services", href: "#services" },
  { label: "Patient stories", href: "#reviews" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#163c38] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_0.8fr_1fr] lg:px-12 lg:py-16">
        <div>
          <a href="#top" className="inline-flex items-center gap-3" aria-label="Harbor Health home">
            <span className="grid size-10 place-items-center rounded-full bg-[#d16d50] text-2xl leading-none" aria-hidden="true">+</span>
            <span className="font-semibold">Harbor Health</span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-6 text-[#c6d6d0]">Thoughtful primary care for every season of life. Good health starts with being heard.</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a9c4b9]">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm text-[#e1ebe6]">
            {footerLinks.map((item) => (
              <li key={item.href}><a className="transition-colors hover:text-white" href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a9c4b9]">Visit the clinic</h2>
          <address className="mt-5 space-y-2 text-sm not-italic leading-6 text-[#e1ebe6]">
            <p>128 Seaview Avenue<br />Portland, ME 04101</p>
            <a className="block transition-colors hover:text-white" href="tel:+12075550148">(207) 555-0148</a>
            <a className="block transition-colors hover:text-white" href="mailto:hello@harborhealth.example">hello@harborhealth.example</a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-[#c6d6d0] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>© {new Date().getFullYear()} Harbor Health. All rights reserved.</p>
          <p>Monday–Friday, 8:00 am–5:00 pm</p>
        </div>
      </div>
    </footer>
  );
}