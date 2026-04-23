import { useState, useEffect, useRef } from "react";

const categories = [
  "All",
  "Rooms & Suites",
  "Lobby",
  "Pool & Spa",
  "Dining",
  "Events",
];

const galleryItems = [
  {
    id: 1,
    category: "Rooms & Suites",
    title: "Presidential Suite",
    desc: "Panoramic city views",
    img: "/images/ah8.jpeg",
  },
  {
    id: 2,
    category: "Lobby",
    title: "Grand Entrance",
    desc: "Where elegance begins",
    img: "/images/ah5.jpeg",
  },
  {
    id: 3,
    category: "Pool & Spa",
    title: "Infinity Pool",
    desc: "Serenity above the skyline",
    img: "/images/ah11.jpeg",
  },
  {
    id: 4,
    category: "Dining",
    title: "The Terrace Restaurant",
    desc: "Farm-to-table cuisine",
    img: "/images/ah4.jpeg",
  },
  {
    id: 5,
    category: "Rooms & Suites",
    title: "Deluxe King Room",
    desc: "Refined comfort",
    img: "/images/ah6.jpeg",
  },
  {
    id: 6,
    category: "Events",
    title: "Grand Ballroom",
    desc: "Moments made memorable",
    img: "/images/ah12.jpeg",
  },
  {
    id: 7,
    category: "Pool & Spa",
    title: "The Spa Retreat",
    desc: "Total rejuvenation",
    img: "/images/ah9.jpeg",
  },
  {
    id: 8,
    category: "Rooms & Suites",
    title: "Junior Suite",
    desc: "Intimate luxury",
    img: "/images/ah0.jpeg",
  },
  {
    id: 9,
    category: "Lobby",
    title: "Lounge Bar",
    desc: "Cocktails & conversations",
    img: "/images/ah1.jpeg",
  },
  {
    id: 10,
    category: "Dining",
    title: "Breakfast Pavilion",
    desc: "Mornings elevated",
    img: "/images/ah11.jpeg",
  },
  {
    id: 11,
    category: "Events",
    title: "Conference Hall",
    desc: "Business meets elegance",
    img: "/images/ah12.jpeg",
  },
  {
    id: 12,
    category: "Pool & Spa",
    title: "Steam & Sauna",
    desc: "Purify the senses",
    img: "/images/ah10.jpeg",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [visible, setVisible] = useState({});
  const refs = useRef({});

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible((prev) => ({ ...prev, [e.target.dataset.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  const navigate = (dir) => {
    const idx = filtered.findIndex((i) => i.id === lightbox.id);
    setLightbox(filtered[(idx + dir + filtered.length) % filtered.length]);
  };

  return (
    <div className="min-h-screen text-stone-100">
      <div className="relative flex items-center justify-center overflow-hidden md:h-[50vh] h-[40vh]">
        <img
          src="/images/ah12.jpeg"
          alt="Aisha Homes Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-4">
          <p className="text-xs tracking-widest text-yellow-500 uppercase mb-5">
            Aisha Homes · Our Story in Images
          </p>

          <h1 className="font-cormorant font-light text-white text-4xl md:text-6xl italic leading-none">
            The Gallery
          </h1>

          <div className="gold-divider" />

          <p className="font-light text-gray-200 tracking-widest text-sm">
            Every corner, a memory
          </p>
        </div>
      </div>

      <div className="w-full py-8 px-4">
        <div className="flex justify-center md:justify-center overflow-x-auto">
          <div className="flex gap-2 md:gap-3 min-w-max">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={[
                    "uppercase tracking-widest whitespace-nowrap transition-all duration-300 border rounded-md",
                    "text-[10px] md:text-xs px-4 md:px-5 py-2",
                    isActive
                      ? "bg-blue-900 text-white border-blue-900"
                      : "bg-white text-gray-600 border-gray-200 hover:text-blue-800 hover:border-blue-300 hover:bg-gray-50",
                  ].join(" ")}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-center text-xs tracking-widest text-blue-900/70 pb-6">
        {filtered.length} images
      </p>

      <div className="masonry max-w-7xl mx-auto px-6 pb-24">
        {filtered.map((item, i) => (
          <div
            key={item.id}
            data-id={item.id}
            ref={(el) => (refs.current[item.id] = el)}
            onClick={() => setLightbox(item)}
            className="masonry-item card-wrap mb-4 relative overflow-hidden cursor-pointer"
            style={{
              opacity: visible[item.id] ? 1 : 0,
              transform: visible[item.id]
                ? "translateY(0)"
                : "translateY(28px)",
              transition: `opacity .6s ease ${(i % 6) * 80}ms, transform .6s ease ${(i % 6) * 80}ms`,
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="img-zoom w-full block"
            />

            <div className="overlay-grad absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <div className="flex-1">
                <h3 className="text-stone-100 text-xl font-normal mb-0.5">
                  {item.title}
                </h3>
                <p className="text-yellow-500 text-xs tracking-widest">
                  {item.category}
                </p>
              </div>
            </div>

            <div className="absolute top-3 right-3 w-9 h-9 rounded-full border border-yellow-500/60 flex items-center justify-center text-yellow-500 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              +
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="lb-fade fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8"
          onClick={() => setLightbox(null)}
        >
          <div
            className="lb-scale relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 w-9 h-9 rounded-full border border-yellow-600/40 text-yellow-500 flex items-center justify-center text-sm hover:bg-yellow-600 hover:text-neutral-950 transition-all duration-200"
            >
              ✕
            </button>

            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-11 h-11 border border-yellow-600/30 bg-black/50 text-yellow-500 text-2xl flex items-center justify-center hover:bg-yellow-600 hover:text-neutral-950 transition-all duration-200"
              style={{ left: "auto", right: "auto" }}
            >
              ‹
            </button>

            <button
              onClick={() => navigate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-11 h-11 border border-yellow-600/30 bg-black/50 text-yellow-500 text-2xl flex items-center justify-center hover:bg-yellow-600 hover:text-neutral-950 transition-all duration-200"
            >
              ›
            </button>

            <img
              src={lightbox.img.replace(/w=\d+/, "w=1200")}
              alt={lightbox.title}
              className="w-full block object-cover"
              style={{ maxHeight: "75vh" }}
            />

            <div className="flex justify-between items-center px-6 py-4 bg-neutral-950/95 border-t border-yellow-700/30">
              <div>
                <h2 className="font-light text-2xl text-stone-100">
                  {lightbox.title}
                </h2>
                <p className="text-stone-500 text-sm mt-0.5">{lightbox.desc}</p>
              </div>
              <span className="text-yellow-500 text-xs tracking-widest">
                {lightbox.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
