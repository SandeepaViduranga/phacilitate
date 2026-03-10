"use client";

import { motion } from "framer-motion";
import { SiLoom, SiHubspot, SiRaycast } from "@icons-pack/react-simple-icons";

const LOGO_SIZE = 32;

const BRANDS = [
  {
    key: "loom",
    name: "Loom",
    type: "component" as const,
    Component: SiLoom,
  },
  {
    key: "hubspot",
    name: "HubSpot",
    type: "component" as const,
    Component: SiHubspot,
  },
  {
    key: "openai",
    name: "OpenAI",
    type: "img" as const,
    src: "/logos/openai.svg",
  },
  {
    key: "raycast",
    name: "Raycast",
    type: "component" as const,
    Component: SiRaycast,
  },
  {
    key: "zenefits",
    name: "Zenefits",
    type: "img" as const,
    src: "/logos/zenefits.svg",
  },
  {
    key: "microsoft",
    name: "Microsoft",
    type: "img" as const,
    src: "/logos/microsoft.svg",
  },
] as const;

function LogoItem({
  brand,
  index,
}: {
  brand: (typeof BRANDS)[number];
  index: number;
}) {
  return (
    <span
      className="flex min-w-[140px] flex-shrink-0 items-center justify-center gap-2 text-[#1c3f3a]"
      aria-hidden
    >
      {brand.type === "component" && brand.Component ? (
        <brand.Component size={LOGO_SIZE} color="#1c3f3a" />
      ) : brand.type === "img" && brand.src ? (
        <img
          src={brand.src}
          alt=""
          width={LOGO_SIZE}
          height={LOGO_SIZE}
          className="h-8 w-auto flex-shrink-0 object-contain"
        />
      ) : null}
      <span className="text-xl font-medium whitespace-nowrap">{brand.name}</span>
    </span>
  );
}

export function Partners() {
  return (
    <section className="bg-white px-4 py-4 sm:px-6 lg:px-8">
      <hr className="w-100 h-1 mx-auto mb-4 border-2 border-ascone-light-grey/50 rounded-sm md:my-10"></hr>
      <div className="mx-auto max-w-7xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="partners-track flex flex-nowrap items-center gap-20"
        >
          {[...BRANDS, ...BRANDS].map((brand, index) => (
            <LogoItem key={`${brand.key}-${index}`} brand={brand} index={index} />
          ))}
        </motion.div>
      </div>
      <hr className="w-100 h-1 mx-auto mt-4 border-2 border-ascone-light-grey/50 rounded-sm md:my-10"></hr>
    </section>
  );
}
