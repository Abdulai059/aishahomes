import { Check, Users, Mic, Utensils, NotebookPen } from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Essentials",
    price: 16,
    menu: "Water & Lunch",
    notes: "Writing Pad & Pen",
    bestFor: "Half-day workshops & training",
    featured: false,
  },
  {
    id: 2,
    name: "Professional",
    price: 20,
    menu: "Lunch, Water & Coffee",
    notes: "Writing Pad & Pen",
    bestFor: "Corporate meetings & presentations",
    featured: false,
  },
  {
    id: 3,
    name: "Executive",
    price: 24,
    menu: "Lunch, Coffee & Water",
    notes: "Writing Pad, Pen & Printed Agenda",
    bestFor: "Board meetings & strategy sessions",
    featured: true,
  },
  {
    id: 4,
    name: "Premium",
    price: 28,
    menu: "Lunch, Dessert & Coffee",
    notes: "Writing Pad, Pen & Branded Stationery",
    bestFor: "Executive summits & formal conferences",
    featured: false,
  },
];

export default function ConferenceHall() {
  return (
    <section>
      <div
        className="relative px-0 py-12 text-center mb-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ah6.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60 " />

        <div className="relative z-10">
          <p className="text-xs tracking-widest text-yellow-500 uppercase mb-4">
            Aisha Homes · Facilities
          </p>

          <h1 className="font-cormorant font-normal italic text-white text-4xl md:text-6xl leading-none">
            Our Conference Hall
          </h1>

          <div className="w-12 h-px bg-yellow-500 mx-auto my-5" />

          <p className="text-gray-300 px-4 text-sm max-w-md mx-auto leading-relaxed">
            Give your meetings the setting they deserve professional, fully
            equipped, and designed for focus.
          </p>

          <div className="flex justify-center gap-10 mt-8">
            {[
              ["60", "Capacity"],
              ["4", "Packages"],
              ["PA+", "AV System"],
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-medium text-white">{val}</div>
                <div className="text-[10px] text-yellow-500 racking-widest uppercase mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-0 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex flex-col gap-4 rounded-xl p-6 bg-white ${
                pkg.featured
                  ? "border border-yellow-500"
                  : "border border-gray-100"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] tracking-widest text-gray-500 uppercase">
                    Package {pkg.id}
                  </p>
                  <p className="text-base font-medium mt-1">{pkg.name}</p>
                </div>
                {pkg.featured && (
                  <span className="text-[10px] bg-yellow-500 text-white px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-start gap-0.5">
                  <span className="text-yellow-500 text-lg font-medium mt-1">
                    $
                  </span>
                  <span className="text-4xl font-medium">{pkg.price}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  per person / session
                </p>
              </div>

              <hr className="border-gray-100" />

              <ul className="space-y-4">
                {[
                  { text: "PA System & Projector", icon: Mic },
                  { text: "Up to 60 adults", icon: Users },
                  { text: pkg.menu, icon: Utensils },
                  { text: pkg.notes, icon: NotebookPen },
                ].map(({ text, icon: Icon }) => (
                  <li
                    key={text}
                    className="flex items-center gap-2 text-xs text-gray-500"
                  >
                    <Icon size={16} className="text-gray-500 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>

              <span className="text-[11px] bg-sky-100 text-gray-950 px-3 py-1 rounded-full self-start">
                {pkg.bestFor}
              </span>

              <button
                className={`mt-auto w-full py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                  pkg.featured
                    ? "bg-gray-600 text-white border-gray-600 hover:bg-blue-700"
                    : "border-blue-600 text-white hover:text-gray-900 hover:bg-blue-50"
                }`}
              >
                View details
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          All packages include complimentary WiFi · Air-conditioned hall ·
          Dedicated event coordinator
        </p>
      </div>
    </section>
  );
}
