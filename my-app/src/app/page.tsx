import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-[#fbfaf6] font-sans text-[#193c38]">
      <Header />
      <main className="flex-1">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 md:pb-20 md:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-12 lg:pb-24 lg:pt-20">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#b9563c]">
              <span className="size-2 rounded-full bg-[#d16d50]" aria-hidden="true" /> Care that starts with listening
            </p>
            <h1 className="mt-6 text-5xl font-medium leading-[1.06] tracking-[-0.035em] text-[#193c38] sm:text-6xl lg:text-[4.4rem]">
              Your health.<br />Your whole story.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#5b7068] sm:text-lg sm:leading-8">
              Primary care built around you, not the clock. Find a trusted partner for the everyday and the unexpected.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#155e58] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#104b46] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d16d50]">
                Meet your care team <span aria-hidden="true">↗</span>
              </a>
              <a href="tel:+12075550148" className="inline-flex min-h-12 items-center px-2 text-sm font-semibold text-[#155e58] hover:text-[#b9563c]">Call (207) 555-0148</a>
            </div>
            <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#dce7e2] pt-6 text-sm text-[#52665f]">
              <p className="inline-flex items-center gap-2"><span className="font-semibold text-[#155e58]">4.9/5</span> patient rating</p>
              <span className="hidden h-4 border-l border-[#cbd9d2] sm:block" aria-hidden="true" />
              <p>Accepting new patients</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div
              role="img"
              aria-label="Dr. Maya Chen, a primary care physician, smiling in her clinic"
              className="aspect-[4/4.15] overflow-hidden rounded-[42%_42%_5%_5%] bg-[#dbe7e0] bg-cover bg-[center_35%]"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85')" }}
            />
            <div className="absolute -bottom-5 left-3 max-w-[calc(100%-1.5rem)] rounded-2xl border border-[#e5ebe7] bg-white p-4 shadow-[0_14px_40px_rgba(25,60,56,0.12)] sm:bottom-7 sm:-left-8 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#b9563c]">Your doctor, your advocate</p>
              <p className="mt-2 text-lg font-semibold text-[#193c38]">Dr. Maya Chen</p>
              <p className="mt-1 text-sm text-[#71827b]">Board-certified family medicine</p>
            </div>
            <div className="absolute right-3 top-5 rounded-full border border-white/60 bg-[#f0d6c9] px-4 py-2 text-xs font-semibold text-[#713f31] shadow-sm sm:right-0 sm:top-10">
              Here for every chapter
            </div>
          </div>
        </section>

        <section aria-label="Practice highlights" className="border-y border-[#dce7e2] bg-[#f1f4ef]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-7 px-5 py-8 sm:px-8 md:grid-cols-4 md:gap-8 lg:px-12">
            {[
              ["20+", "years of local care"],
              ["One-on-one", "time with your doctor"],
              ["All ages", "welcome here"],
              ["Same week", "appointments available"],
            ].map(([value, label]) => (
              <div key={label} className="md:border-l md:border-[#d5e0d9] md:pl-7 first:md:border-0 first:md:pl-0">
                <p className="text-lg font-semibold text-[#155e58]">{value}</p>
                <p className="mt-1 text-sm text-[#71827b]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#b9563c]">A different kind of doctor&apos;s visit</p>
            <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-4xl">Care is better when you feel known.</h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-base leading-7 text-[#5b7068] sm:text-lg sm:leading-8">We believe the best medicine begins with a conversation. Our small, connected team makes room for your questions, remembers what matters to you, and helps you make a plan that fits real life.</p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#155e58] hover:text-[#b9563c]">Get to know our practice <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section id="services" className="bg-[#eaf0eb]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-12">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#b9563c]">Care for real life</p>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.025em] sm:text-4xl">A steady hand, at every age.</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#5b7068]">From staying well to getting back on your feet, we&apos;re here for the long haul.</p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-[#d5e0d9] bg-[#d5e0d9] sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Preventive care", "Annual checkups, screenings, and a plan to help you stay well."],
                ["02", "Everyday health", "Thoughtful support for common concerns and ongoing conditions."],
                ["03", "Family medicine", "Connected care for adults, children, and everyone in between."],
                ["04", "Wellness visits", "Space to talk sleep, stress, nutrition, and the whole you."],
              ].map(([number, title, description]) => (
                <article key={number} className="min-h-48 bg-[#fbfaf6] p-6 sm:p-7">
                  <p className="text-xs font-semibold text-[#b9563c]">{number}</p>
                  <h3 className="mt-8 text-lg font-semibold text-[#193c38]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#71827b]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#b9563c]">From our patients</p>
            <h2 className="mt-4 max-w-sm text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-4xl">Good care feels personal.</h2>
            <p className="mt-5 text-sm leading-6 text-[#5b7068]">The relationships say more than we can.</p>
          </div>
          <figure className="border-l-2 border-[#d16d50] pl-6 sm:pl-9">
            <blockquote className="max-w-2xl text-2xl font-medium leading-snug text-[#193c38] sm:text-3xl">“For the first time, I didn’t feel rushed. Dr. Chen listened, explained my options, and made me feel like part of the conversation.”</blockquote>
            <figcaption className="mt-6 text-sm text-[#71827b]"><span className="font-semibold text-[#193c38]">A Harbor Health patient</span> · Portland, ME</figcaption>
          </figure>
        </section>

        <section className="bg-[#dce9e1]">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between md:py-14 lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#b9563c]">A good place to begin</p>
              <h2 className="mt-3 text-2xl font-medium tracking-[-0.02em] sm:text-3xl">Ready for care that feels like yours?</h2>
            </div>
            <a href="#contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#155e58] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#104b46] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d16d50] md:self-center">Schedule a first visit <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
