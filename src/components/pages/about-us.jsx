import { useState, useEffect, useRef } from "react";
import {
  Utensils,
  Bath,
  Sofa,
  Wifi,
  Snowflake,
  Waves,
  Tv,
  Users,
} from "lucide-react";

const facilities = [
  { label: "Kitchen Facilities", icon: Utensils },
  { label: "Bath & Bedroom", icon: Bath },
  { label: "Dining & Living Room", icon: Sofa },
  { label: "Free Wi-Fi", icon: Wifi },
  { label: "Air Conditioning", icon: Snowflake },
  { label: "Swimming Pool", icon: Waves },
  { label: "Television", icon: Tv },
  { label: "Common Areas", icon: Users },
];

const whyItems = [
  {
    num: "01",
    title: "Lower cost than hotels",
    text: "Groups can share a single home, making stays far more affordable than comparable hotel rooms.",
  },
  {
    num: "02",
    title: "Privacy & security",
    text: "Full protection for local and foreign guests — your safety is always our prime concern.",
  },
  {
    num: "03",
    title: "Home-cooked meals",
    text: "Private fully equipped kitchen access so you can prepare healthy food just like at home.",
  },
  {
    num: "04",
    title: "Long-term discounts",
    text: "Extended stay rates for corporate clients, relocating families, and long-term residents.",
  },
];

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const boardMembers = [
  {
    name: "Dr. Doli-Wura Awushi AMS Zakaria",
    role: "Board Chair",
    img: "/team/doli.webp",
  },
  {
    name: "Rukaya Zakaria",
    role: "Vice-Chair",
    img: "/team/ruka.webp",
  },
  {
    name: "Dr. Sheila Tipaga Issahaku",
    role: "GM / Member-Secretary",
    img: "/team/sheila.webp",
  },
];

const managementTeam = [
  {
    name: "Martinu Sayibu",
    role: "Director of Finance",
    img: "/team/martinu.webp",
  },
];

function FadeIn({ children, className = "" }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`flex items-center gap-3 text-[10px] font-medium tracking-[3px] uppercase mb-5 ${light ? "text-blue-300" : "text-blue-700"}`}
    >
      {children}
    </div>
  );
}

function TeamCard({ person }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-2 hover:shadow-lg transition duration-300">
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={person.img}
          alt={person.name}
        />
      </div>

      <div className="flex flex-col items-center text-center p-4">
        <p className="font-semibold text-lg">{person.name}</p>
        <p className="text-gray-500 text-sm">{person.role}</p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="font-sans  bg-stone-100 text-stone-900 ">
      <div className="relative flex items-center justify-center overflow-hidden md:h-[60vh] h-[40vh]">
        <img
          src="/images/ah9.jpeg"
          alt="Serviced home interior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-4">
          <p className="text-xs tracking-widest text-yellow-500 uppercase mb-5">
            Aisha Homes · About Us
          </p>

          <h1 className="font-cormorant font-normal italic text-4xl md:text-6xl text-white leading-none">
            More Than a Stay
          </h1>

          <div className="gold-divider" />

          <p className="font-light text-gray-200 tracking-widest text-sm">
            We don't just host guests, we welcome people home
          </p>
        </div>
      </div>

      <div className=" max-w-7xl mx-auto overflow-x-hidden">
        <section className="px-5 sm:px-8 md:px-[6vw] py-16 sm:py-20 md:py-24 bg-stone-100">
          <FadeIn>
            <Eyebrow>Who we are</Eyebrow>

            <h2
              className="font-serif font-light leading-tight mb-6 sm:mb-8 md:mb-10
      text-[clamp(26px,4.5vw,48px)]"
            >
              Comfort, culture
              <br />& connection
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p
                className="font-serif  font-light leading-relaxed text-stone-900
        text-[clamp(16px,2.5vw,20px)]"
              >
                "Located in the heart of Northern Ghana, our apartment is the
                perfect place to immerse yourself in local culture and explore
                the beautiful surroundings."
              </p>

              <p
                className="font-light leading-loose text-stone-500
        text-xs sm:text-sm md:text-[15px]"
              >
                AISHA HOMES provides furnished accommodation for individuals and
                corporate bodies available for short and long-term stays. We
                offer the facilities of a hotel at a fraction of the cost, with
                the warmth, privacy, and convenience of a true home. Our
                knowledgeable staff are always on hand to help you plan your
                adventures and ensure an unforgettable stay.
              </p>
            </div>
          </FadeIn>
        </section>

        <section className="px-[6vw] py-24 bg-blue-950">
          <FadeIn>
            <Eyebrow light>Our mission</Eyebrow>
            <h2 className="font-serif  text-[clamp(26px,4.5vw,48px)] font-light  text-stone-100 leading-snug mb-6">
              Hospitality meets
              <br />a new horizon
            </h2>
            <p className="max-w-xl text-sm font-light leading-loose text-stone-100/60">
              We believe in building close relationships with every guest
              through attentive, personal service. Our homes are the ideal
              choice for corporate delegates, relocating families, and visitors
              seeking a pleasant, secure, and cost-efficient stay. Your feedback
              shapes everything we do.
            </p>
          </FadeIn>
        </section>

        <section className="px-[6vw] py-24 bg-stone-200">
          <FadeIn>
            <Eyebrow>Why AISHA HOMES</Eyebrow>
            <h2 className="font-serif  text-[clamp(26px,4.5vw,48px)] font-light leading-tight mb-10">
              The difference
              <br />
              you'll feel
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-stone-300/60 border border-stone-300/60">
              {whyItems.map((item) => (
                <div
                  key={item.num}
                  className="p-8 bg-stone-200 hover:bg-stone-100 transition-colors duration-300"
                >
                  <div className="font-serif text-5xl font-light text-emerald-800/20 mb-4">
                    {item.num}
                  </div>
                  <div className="text-sm font-medium text-stone-900 mb-2">
                    {item.title}
                  </div>
                  <p className="text-xs font-light text-stone-500 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="px-[6vw] py-24 bg-stone-100">
          <FadeIn>
            <Eyebrow>Facilities</Eyebrow>
            <h2 className="font-serif text-[clamp(26px,4.5vw,48px)] font-light leading-tight mb-10">
              Everything
              <br />
              under one roof
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {facilities.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition"
                  >
                    <Icon className="w-6 h-6 text-gray-600" />
                    <p className="text-sm text-gray-600 text-center">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </section>

        <section className="px-[6vw] py-24 bg-stone-200">
          <FadeIn>
            <Eyebrow>Our people</Eyebrow>

            <h2 className="font-serif text-[clamp(26px,4.5vw,48px)] font-light leading-tight mb-12">
              The faces <br /> behind the home
            </h2>

            {/* Board */}
            <p className="text-xs font-medium tracking-[2px] uppercase text-blue-700 mb-6">
              Board of directors
            </p>
            <p className="text-sm font-light text-gray-600 tracking-wide mb-10">
              The firm has a three (3) member Board of Directors of diverse
              backgrounds. Each member has at list fifteen (15) years experience
              in industry, commerce and in the hospitality industry. Besides,
              they have local and international torch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
              {boardMembers.map((person, i) => (
                <TeamCard key={i} person={person} />
              ))}
            </div>

            {/* Management */}
            <p className="text-xs font-medium tracking-[2px] uppercase text-blue-700 mb-6">
              Management team
            </p>

            <p className="text-sm font-light text-gray-600 tracking-wide mb-10">
              The facility is being managed by persons of high repute with track
              record of excellence in the hospitality industry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {managementTeam.map((person, i) => (
                <TeamCard key={i} person={person} />
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="relative px-[6vw] py-20 mb-20 bg-stone-100 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255, 255, 255, 0.2),transparent_70%)]" />
          <FadeIn className="relative max-w-lg mx-auto">
            <span className="text-[10px] font-medium tracking-[3px] uppercase text-blue-700 mb-5 block">
              Book your stay
            </span>
            <h2 className="font-serif text-[clamp(26px,4.5vw,48px)] font-light  text-stone-800 leading-snug mb-4">
              Ready to feel
              <br />
              at home?
            </h2>
            <p className="text-sm font-light text-stone-900/60 mb-10 leading-loose">
              Our team is always available to help you plan your visit and find
              the perfect accommodation for your needs.
            </p>
            <div className="flex flex-col items-center gap-6">
              {[
                { label: "Call us", phone: "+233 543 099 611" },
                { label: "WhatsApp", phone: "+233 207 768 623" },
              ].map((c) => (
                <div key={c.phone}>
                  <div className="text-[10px] tracking-widest uppercase text-stone-900 mb-1">
                    {c.label}
                  </div>
                  <div className="text-lg font-medium text-stone tracking-wide">
                    {c.phone}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
  );
}
