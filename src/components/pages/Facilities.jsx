import { useState } from "react";

const buildings = [
  {
    id: "boris",
    name: "Boris",
    image: "/facilities/BORIS-1-1024x682.jpg",
    subtitle: "A Sister's Love",
    tag: "Family · Dedication",
    story: `We are proud to honor the founder's sister with a special tribute. The building named Boris is dedicated to the founder's nephew, Boresa, in recognition of the sister's unwavering support and love over the last forty years and still counting. She has been a bedrock for the founder, standing by him through thick and thin and supporting him in everything he has done. Her contribution has been immense, shaping the very essence of who the founder is today. Naming the building Boris is a heartfelt gesture of appreciation for this lovely sister, and we invite you to experience the warmth and hospitality that Aisha Homes is known for.`,
  },
  {
    id: "awushi",
    name: "Awushi",
    image: "/facilities/Awushi-1024x682.jpg",
    subtitle: "No Matter What, You Will Go Through",
    tag: "Resilience · Heritage",
    story: `This name was given to our founder, Dr. Doli-Wura Awushi AMS Zakaria by his sister (Muni) when he was enskinned as a chief. Awushi means "no matter what happens, you will go through." At Aisha Homes, we believe that this name represents the resilience and determination that our founder embodies. We strive to create an environment that fosters this same spirit in our staff and clients, encouraging them to overcome obstacles and persevere in the face of challenges. We are proud to have named this building after our founder and his family's heritage. It serves as a constant reminder of the importance of pushing forward, no matter what life may throw our way.`,
  },
  {
    id: "jm",
    name: "JM",
    image: "/facilities/JM-1024x768.jpg",
    subtitle: "H.E President John Dramani Mahama",
    tag: "Legacy · Community",
    story: `One of our buildings is named JM, dedicated to H.E President John Dramani Mahama. He is seen by our founder and by many as a hero and he is the first president to emerge from the Gonja land and they share a strong friendship. The name JM honors his legacy and inspires our commitment to community development.`,
  },
  {
    id: "mills",
    name: "Mills",
    image: "/facilities/Awushi-1024x682.jpg",
    subtitle: "Former President Prof Mills",
    tag: "Education · Kindness",
    story: `Our building, Mills, is dedicated to former President Prof Mills, a man of peace beloved by Ghanaians. He offered our founder a scholarship to pursue his PhD, a testament to his commitment to education and empowering youths. The name Mills honors his legacy of leadership and kindness.`,
  },
  {
    id: "jawula",
    name: "Jawula",
    image: "/facilities/BORIS-1-1024x682.jpg",
    subtitle: "Lepowura M.N.D Jawula",
    tag: "Mentor · Godfather",
    story: `We are honored to share with you the story behind the building named Jawula at Aisha Homes. This building is a tribute to the late Lepowura M.N.D Jawula, who was not just a model, but a Godfather and mentor to our founder. Lepowura played a fatherly role in guiding the founder throughout his career, offering words of wisdom and support. He was always there to provide a listening ear and a shoulder to lean on, especially during the tough times. He had expressed his intention to make Aisha Homes his personal home upon its opening, but fate had a different plan. He passed away a few months before the hotel's opening, leaving behind a legacy that has endured. The naming of the building Jawula is a heartfelt tribute to this remarkable individual — a symbol of the profound impact that he had on the founder's life.`,
  },
];

const principles = [
  {
    id: "kasha",
    name: "Kasha",
    image: "/facilities/KASHA1-1024x668.jpg",
    meaning: "Love",
    child: "1st Daughter",
    description: `Kasha simply means LOVE. Love is the name of the 1st child of the founder of Aisha Homes which symbolizes his love for everyone, no bias over religion, race and tribe. He sees everyone the same. Love unconditionally.`,
  },
  {
    id: "kashintang",
    name: "Kashintang",
    image: "/facilities/KASHA1-1024x668.jpg",
    meaning: "Truth",
    child: "2nd Child",
    description: `Another principle of the founder is Kashintang, which means TRUTH. Truth is the name of the 2nd child of the founder which symbolizes his stand for the truth at all times. He believes the truth is bitter but it is still the best and on this pillar of truth Aisha Homes stands.`,
  },
  {
    id: "kenyiti",
    name: "Kenyiti",
    image: "/facilities/KENYI-1024x668.jpg",
    meaning: "Patience",
    child: "3rd Child",
    description: `Kanyiti literally means PATIENCE. Patience is a virtue that allows individuals to remain calm and composed in the face of adversity, delays, or challenges. There is a saying that "anyone who is patient will eventually get the reward. If you are patient and you haven't received the reward, then it means you haven't done it to the end."`,
  },
  {
    id: "kenyi",
    name: "Kenyi",
    image: "/facilities/KENYI-1024x668.jpg",
    meaning: "Competence",
    child: "4th Child",
    description: `Kenyi simply means COMPETENCE or BRAINS. The founder believes in giving opportunity to the most competent and brainy people to explore. Competence involves possessing the necessary knowledge, skills, and abilities to accomplish a specific goal — including interpersonal skills such as communication, teamwork, and adaptability.`,
  },
];

function BuildingCard({ building, index }) {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-0 overflow-hidden rounded-2xl border border-blue-100 bg-white`}
      style={{ minHeight: 340 }}
    >
      <div className="relative md:w-2/5 w-full h-64 md:h-auto overflow-hidden">
        <img
          src={building.image}
          alt={building.name}
          width={600}
          height={400}
          loading="lazy"
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{
            transform: "translate3d(0,0,0)",
            backfaceVisibility: "hidden",
          }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.background = "#EFF6FF";
          }}
        />
        <div className="absolute inset-0 bg-gray-900/20" />
      </div>

      <div className="md:w-3/5 w-full flex flex-col justify-center px-8 py-10 gap-4">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-yellow-500 font-medium mb-2">
            Aisha Homes · Building
          </p>
          <h2
            className="text-4xl font-light italic text-slate-900"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {building.name}
          </h2>
          <p className="text-sm text-blue-600 font-medium mt-1">
            {building.subtitle}
          </p>
        </div>
        <div className="w-10 h-px bg-yellow-400" />
        <p className="text-sm text-slate-500 leading-relaxed">
          {building.story}
        </p>
      </div>
    </div>
  );
}

function PrincipleCard({ principle, index }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-0 overflow-hidden rounded-2xl border border-blue-100 bg-white`}
      style={{ minHeight: 340 }}
    >
      <div className="relative md:w-2/5 w-full h-64 md:h-auto overflow-hidden">
        <img
          src={principle.image}
          alt={principle.name}
          width={600}
          height={400}
          loading="lazy"
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{
            transform: "translate3d(0,0,0)",
            backfaceVisibility: "hidden",
          }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.background = "#EFF6FF";
          }}
        />

        <div className="absolute inset-0 bg-gray-900/20" />

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-end justify-between">
            <h3
              className="text-2xl font-light italic text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {principle.name}
            </h3>
          </div>
        </div>
      </div>

      <div className="md:w-3/5 w-full flex flex-col justify-center px-8 py-10 gap-4">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-yellow-500 font-medium mb-2">
            Meaning
          </p>

          <h2 className="text-lg font-medium text-blue-700">
            {principle.meaning}
          </h2>
        </div>

        <div className="w-10 h-px bg-yellow-400" />

        <p className="text-sm text-slate-500 leading-relaxed">
          {principle.description}
        </p>
      </div>
    </div>
  );
}

export default function Facilities() {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative px-6 py-20 text-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ah5.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gray-900/70" />

        <div className="relative max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.25em] uppercase text-yellow-500 font-medium mb-6">
            Aisha Homes · Our Heritage
          </p>

          <h1
            className="font-cormorant font-normal italic text-white leading-tight mb-5"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
            }}
          >
            The Naming of the Facilities
            <br /> Homes
          </h1>

          <div className="w-12 h-px bg-gray-500 mx-auto mb-6" />

          <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
            As you walk around our beautiful compound, you may notice the
            buildings bear different names. Below are the names and the
            rationale behind them.
          </p>
        </div>
      </div>

      {/* Buildings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-blue-600 rounded-full" />
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-blue-500 font-medium">
              Named After
            </p>
            <h2
              className="text-2xl font-light text-slate-800"
              style={{ fontFamily: "Georgia, serif" }}
            >
              People &amp; Legacies
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {buildings.map((building, i) => (
            <BuildingCard key={building.id} building={building} index={i} />
          ))}
        </div>
      </div>

      {/* Principles Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-8 bg-blue-600 rounded-full" />
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-blue-500 font-medium">
                Founder's Principles
              </p>
              <h2
                className="text-2xl font-light text-slate-800"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Seven Pillars, Four Names
              </h2>
            </div>
          </div>
          <p className="text-sm text-slate-500 max-w-xl mb-10 ml-5 pl-4 border-l border-blue-200 leading-relaxed">
            The founder has fundamental principles buried in the names of his
            children, by which he has also named some buildings in Aisha Homes.
          </p>

          <div className="flex flex-col gap-8">
            {principles.map((p, i) => (
              <PrincipleCard key={p.id} principle={p} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className=" py-8 text-center">
        <p className="text-xs text-slate-500 tracking-widest uppercase">
          Aisha Homes · Where Every Name Tells a Story
        </p>
      </div>
    </div>
  );
}
