import { ArrowRight, CheckCircle2, Home, Hammer, Mail, Phone } from "lucide-react";

const heroImage = "/bunkie-exterior.png";
const interiorImage = "/bunkie-interior.png";

const conceptDesigns = [
  {
    title: "Modern Garden Shed",
    description: "A clean, modern storage solution with upgraded finishes and strong curb appeal.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Backyard Workshop",
    description: "A practical build for tools, hobby use, and extra functional space at home.",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Custom Retreat Cabin",
    description: "A premium concept for a backyard office, guest space, or quiet personal retreat.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
];

const features = [
  "Custom sizing available",
  "Modern exterior finishes",
  "Fast build planning",
  "Designed for real backyard use",
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-bold tracking-tight">Northwood Backyard Builds</div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Bunkies, sheds, and custom backyard structures
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#featured" className="hover:text-slate-600">
              Featured Build
            </a>
            <a href="#designs" className="hover:text-slate-600">
              Designs
            </a>
            <a href="#contact" className="hover:text-slate-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Featured backyard bunkie exterior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-20">
          <div className="max-w-2xl text-white">
            <div className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em]">
              Flagship Concept Build
            </div>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Custom Backyard Bunkies & Sheds Built to Feel Premium
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 md:text-xl">
              Modern backyard structures designed for storage, workspace, guest use,
              and personal retreat — with clean design, efficient planning, and real
              homeowner appeal.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
              >
                Request a Quote
              </a>

              <a
                href="#designs"
                className="flex items-center gap-2 rounded-2xl border border-white/60 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Explore Designs <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <Home className="mb-3" size={24} />
            <h3 className="text-lg font-semibold">Modern Backyard Living</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Built to look like a premium addition to the property, not an afterthought.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <Hammer className="mb-3" size={24} />
            <h3 className="text-lg font-semibold">Practical Construction</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Designed around efficient building, installation, and scalable future models.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <CheckCircle2 className="mb-3" size={24} />
            <h3 className="text-lg font-semibold">Flexible Use Cases</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Workspace, bunkie, retreat, guest room, workshop, or upgraded storage.
            </p>
          </div>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Featured Build
            </div>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Modern Backyard Bunkie
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              This flagship concept combines a striking exterior with a warm, functional
              interior layout. It is positioned as a higher-end backyard structure that
              can serve as a private office, guest space, or personal retreat.
            </p>

            <div className="mt-8 grid gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-slate-100 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Positioning
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Designed to be built efficiently using a repeatable structure with room for
                custom finishes, helping balance visual appeal, practical construction, and
                future scalability.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <img
              src={heroImage}
              alt="Backyard bunkie exterior"
              className="rounded-3xl shadow-xl"
            />
            <img
              src={interiorImage}
              alt="Backyard bunkie interior"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section id="designs" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Other Design Concepts
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Additional Styles We Can Build Toward
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These are concept images to show range and direction until final project
              photography is available.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {conceptDesigns.map((design) => (
              <div
                key={design.title}
                className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={design.image}
                  alt={design.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{design.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {design.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Start Planning Your Backyard Build
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Tell us what you want to build and we can discuss size, intended use,
              style, and next steps.
            </p>

            <div className="mt-8 space-y-4 text-slate-700">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>(555) 555-5555</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@northwoodbuilds.ca</span>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Name"
                className="rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-slate-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-slate-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-slate-500"
              />
              <textarea
                rows="5"
                placeholder="Tell us about your project"
                className="rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-slate-500"
              />
              <button
                type="button"
                className="rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                Request Quote
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}