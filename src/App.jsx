import gargiPhoto from "../assets/Gargi.png";
import prashansaPhoto from "../assets/Prashansa.png";
import shaheenPhoto from "../assets/Shaheen.jpg";

const parentFormLink = "https://forms.gle/93KnwwxLAhy3kWtP9";

const trustItems = [
  { title: "Elite mentor network", body: "Mentors pursuing PhDs at IITs, IIITs, and IIMs." },
  { title: "Verified & screened", body: "Background checks, identity verification, and quality audits." },
  { title: "Outcome focused", body: "Weekly goals, parent updates, and measurable progress tracking." },
];

const trustBadges = [
  "IIT PhD Mentors",
  "IIIT PhD Mentors",
  "IIM PhD Mentors",
  "Background Checked",
];

const tutorJoinBenefits = [
  "One tutor teaches only one student at a time",
  "Flexible schedule with remote-first mentoring",
  "Structured curriculum and mentorship support",
  "Premium payouts linked to student outcomes",
];

const steps = [
  { title: "Tell us about your child", body: "Share goals, class level, and challenges." },
  { title: "Get matched with a tutor", body: "We select the best-fit mentor." },
  { title: "Attend a free trial class", body: "Experience our teaching before commitment." },
  { title: "Start structured growth", body: "Weekly plan, tracking, and parent updates." },
];

const problems = [
  "Child gets distracted and depends on quick AI shortcuts",
  "School classes move fast with little personal attention",
  "Confidence drops even when effort is high",
];

const founders = [
  {
    name: "Md Shaheen Perwez",
    role: "Founder • PhD (Brain Science and Application), IIT Jodhpur",
    photo: shaheenPhoto,
  },
  {
    name: "Prashansa Tripathi",
    role: "Founder • PhD (Brain Science and Application), IIT Jodhpur",
    photo: prashansaPhoto,
  },
  {
    name: "Gargi Bhattacharjee",
    role: "Founder • PhD (Brain Science and Application), IIT Jodhpur",
    photo: gargiPhoto,
  },
];

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/80 bg-slate-50/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[78px] w-[min(1160px,92%)] items-center justify-between gap-5">
        <a href="#" className="inline-flex items-center gap-2.5 text-base font-bold text-slate-900">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/30">
            S
          </span>
          <span>Scholarhaus</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex" aria-label="Main navigation">
          <a href="#trust" className="transition hover:text-slate-900">
            Trust
          </a>
          <a href="#join-tutor" className="transition hover:text-slate-900">
            Join as Tutor
          </a>
          <a href="#how" className="transition hover:text-slate-900">
            How it works
          </a>
          <a href="#founders" className="transition hover:text-slate-900">
            Founders
          </a>
        </nav>
        <a
          href={parentFormLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5"
        >
          Book Free Trial
        </a>
      </div>
    </header>
  );
}

function ContactForm() {
  return (
    <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-soft backdrop-blur">
      <p className="mb-5 text-slate-600">
        Please fill out our parent form and we will contact you with the right mentor match.
      </p>
      <a
        href={parentFormLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5"
      >
        Fill Parent Form
      </a>
    </div>
  );
}

export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="relative overflow-hidden font-sans text-slate-900">
      <div className="pointer-events-none absolute -top-36 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-100/70 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-[560px] h-80 w-80 rounded-full bg-emerald-100/70 blur-3xl" />
      <Header />

      <main className="relative z-10">
        <section className="px-0 pb-12 pt-16 md:pt-20">
          <div className="mx-auto grid w-[min(1160px,92%)] gap-8 lg:grid-cols-[1.25fr,1fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">
                Premium 1:1 tutoring for Classes 6-12
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
                Your Child Deserves Personal Attention — Not Just AI Answers
              </h1>
              <p className="mb-7 mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                Scholarhaus pairs your child with dedicated mentors pursuing PhDs at IITs, IIITs,
                and IIMs who teach with structure, accountability, and confidence-building support.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={parentFormLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5"
                >
                  Book Free Trial
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/90 px-6 py-3.5 font-semibold text-slate-800 transition hover:border-slate-400"
                >
                  See How It Works
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5 text-sm text-slate-700">
                {["Background Checked", "Parent-Focused Progress Reports", "Personalized Study Plans"].map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white/90 px-3 py-2 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-soft backdrop-blur md:p-7">
              <p className="mb-5 font-semibold text-slate-900">What you get from day one</p>
              <div className="mb-6 grid gap-3.5">
                <article className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4">
                  <strong className="block text-2xl font-bold tracking-tight text-slate-900">1:1</strong>
                  <span className="text-sm text-slate-600">One mentor teaches one student at a time</span>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4">
                  <strong className="block text-2xl font-bold tracking-tight text-slate-900">PhD</strong>
                  <span className="text-sm text-slate-600">Mentors pursuing PhDs at premium institutes</span>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4">
                  <strong className="block text-2xl font-bold tracking-tight text-slate-900">Weekly</strong>
                  <span className="text-sm text-slate-600">Parent feedback and clear progress updates</span>
                </article>
              </div>
              <a
                href={parentFormLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5"
              >
                Talk to an Expert
              </a>
            </aside>
          </div>
        </section>

        <section id="trust" className="py-16">
          <div className="mx-auto w-[min(1160px,92%)]">
            <SectionHeading
              title="Built on trust, not promises"
              subtitle="We only provide mentors who are currently pursuing PhDs at India's premium institutes, trained to deliver focused 1:1 mentoring."
            />
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {trustItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft transition hover:-translate-y-0.5"
                >
                  <h3 className="mb-1.5 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {trustBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-sm shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid w-[min(1160px,92%)] gap-6 lg:grid-cols-[1.2fr,1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                If this sounds familiar, you are not alone
              </h2>
              <ul className="mt-4 list-disc space-y-2.5 pl-5 text-slate-700">
                {problems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <article className="rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-soft">
              <h3 className="text-xl font-semibold text-slate-900">Our solution: Dedicated 1:1 mentorship</h3>
              <p className="mt-2 text-slate-600">
                We map your child’s learning style, close core gaps, and build strong academic habits
                with personal mentoring.
              </p>
              <a
                href={parentFormLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5"
              >
                Book Free Trial
              </a>
            </article>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-[min(1160px,92%)]">
            <article className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-brand-50/40 p-7 shadow-soft md:p-10">
              <SectionHeading title="Why Choose Us?" />
              <p className="mt-3 text-slate-600 md:text-lg md:leading-relaxed">
                In a world where students are increasingly turning to quick answers and AI tools
                without truly understanding concepts, your child deserves more than just a tutor -
                they deserve a mentor. At our platform, we pair every student with a dedicated
                one-on-one mentor who is pursuing a PhD at premier institutes like IITs, IIITs,
                and IIMs, and who not only teaches but guides, motivates, and understands your
                child personally. We go beyond completing syllabi - we build confidence, discipline,
                and independent thinking. With
                personalized attention, continuous feedback, and a strong human connection, our
                mentors become role models who shape not just academic success, but your child&rsquo;s
                long-term growth and mindset.
              </p>
            </article>
          </div>
        </section>

        <section id="join-tutor" className="py-16">
          <div className="mx-auto w-[min(1160px,92%)]">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-soft md:p-9">
              <SectionHeading title="Join us as a Tutor" />
              <p className="mt-2 max-w-3xl text-slate-600">
                Are you currently pursuing a PhD at IIT, IIIT, IIM, or another premier institute
                with strong teaching ability? Each tutor teaches only one student at a time for deep,
                personalized outcomes.
              </p>
              <ul className="mt-5 grid gap-3 text-slate-700 md:grid-cols-2">
                {tutorJoinBenefits.map((benefit) => (
                  <li key={benefit} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:careers@scholarhaus.com?subject=Tutor%20Application"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5"
              >
                Apply as Tutor
              </a>
            </div>
          </div>
        </section>

        <section id="how" className="py-16">
          <div className="mx-auto w-[min(1160px,92%)]">
            <SectionHeading title="How it works" />
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, idx) => (
                <article
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft transition hover:-translate-y-0.5"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-r from-brand-100 to-brand-50 text-sm font-bold text-brand-600">
                    {idx + 1}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-slate-600">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-[min(1160px,92%)]">
            <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-white p-7 shadow-soft md:flex-row md:items-center md:p-9">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Every child learns differently.</h2>
                <p className="mt-1.5 text-slate-600">We don’t teach batches. We mentor individuals.</p>
              </div>
              <a
                href={parentFormLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5"
              >
                Book Free Trial
              </a>
            </div>
          </div>
        </section>

        <section id="founders" className="py-16">
          <div className="mx-auto w-[min(1160px,92%)]">
            <SectionHeading
              title="Meet Our Founders"
              subtitle="Built by mentors who care deeply about student outcomes and long-term growth."
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {founders.map((founder) => (
                <article
                  key={founder.name}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-soft transition hover:-translate-y-0.5"
                >
                  <img src={founder.photo} alt={founder.name} className="h-72 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-slate-900">{founder.name}</h3>
                    <p className="mt-1 text-slate-600">{founder.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="mx-auto grid w-[min(1160px,92%)] gap-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-100/70 p-7 shadow-soft lg:grid-cols-2 lg:p-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Talk to an Academic Expert</h2>
              <p className="mt-2 text-slate-600">Share your child’s needs and we’ll recommend the right mentor.</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 py-6">
        <div className="mx-auto flex w-[min(1160px,92%)] flex-col items-start justify-between gap-2 text-sm text-slate-600 md:flex-row md:items-center">
          <p>© {year} Scholarhaus. Real teachers. Real growth.</p>
          <a href={parentFormLink} target="_blank" rel="noreferrer" className="transition hover:text-slate-900">
            Talk to an Expert
          </a>
        </div>
      </footer>
    </div>
  );
}
