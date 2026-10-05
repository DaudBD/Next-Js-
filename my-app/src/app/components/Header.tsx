const navigation = [
  { label: "Our approach", href: "#about" },
  { label: "Care & services", href: "#services" },
  { label: "Patient stories", href: "#reviews" },
];

export default function Header() {
  return (
    <header className="relative z-10 border-b border-[#dce7e2] bg-[#fbfaf6]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-5 sm:px-8 lg:flex-nowrap lg:px-12">
        <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="Harbor Health home">
          <span className="grid size-10 place-items-center rounded-full bg-[#155e58] text-2xl leading-none text-white" aria-hidden="true">
            +
          </span>
          <span className="leading-tight">
            <span className="block font-semibold tracking-[0.01em] text-[#193c38]">Harbor Health</span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-[#71827b]">Primary care, made personal</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="order-3 flex w-full items-center justify-between gap-4 border-t border-[#e5ebe7] pt-4 text-sm text-[#52665f] lg:order-none lg:w-auto lg:justify-center lg:gap-9 lg:border-0 lg:pt-0">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-[#155e58]">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#d16d50] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#b9563c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155e58]">
          Book a visit <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}