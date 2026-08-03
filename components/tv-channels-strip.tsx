"use client"

import Image from "next/image"

const canales = [
  { name: "Canal 1", src: "/images/canales-tv/canal-1.jpeg" },
  { name: "Canal 2", src: "/images/canales-tv/canal-2.jpeg" },
  { name: "Canal 3", src: "/images/canales-tv/canal-3.jpeg" },
  { name: "Canal 4", src: "/images/canales-tv/canal-4.jpeg" },
  { name: "Canal 5", src: "/images/canales-tv/canal-5.jpeg" },
]

export function TvChannelsStrip() {
  // Duplicate list to create seamless loop
  const items = [...canales, ...canales]

  return (
    <section className="py-6 bg-primary/5 border-y border-primary/10 overflow-hidden">
      <div className="text-center mb-4">
        <span className="text-primary/70 font-medium tracking-wider uppercase text-xs">
          Nos puedes ver en
        </span>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-8 w-max">
          {items.map((canal, index) => (
            <div
              key={`${canal.name}-${index}`}
              className="flex-shrink-0 w-[140px] h-[80px] sm:w-[180px] sm:h-[100px] relative rounded-lg overflow-hidden bg-white shadow-sm border border-primary/10"
            >
              <Image
                src={canal.src}
                alt={canal.name}
                fill
                className="object-contain p-2 grayscale"
                sizes="180px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
