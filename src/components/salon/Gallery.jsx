import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.png";
import g2 from "@/assets/gallery-2.png";
import g3 from "@/assets/gallery-3.png";
import g4 from "@/assets/gallery-4.png";
import about from "@/assets/about-salon.png";
import hero from "@/assets/hero-salon.png";

const tags = ["All", "Hair", "Facial", "Skin Brightening", "Bridal Makeup"];

const items = [
  { src: g3, tag: "Hair", title: "Silk-smooth Hair", span: "row-span-2" },
  { src: g2, tag: "Bridal Makeup", title: "Bridal Glow", span: "" },
  { src: g1, tag: "Skin Brightening", title: "Radiance Ritual", span: "" },
  { src: g4, tag: "Facial", title: "Makeup Artistry", span: "row-span-2" },
  { src: about, tag: "Facial", title: "Hydra Glow", span: "" },
  { src: hero, tag: "Hair", title: "Salon Sanctuary", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-medium text-primary">
              Before & After
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Real <em className="text-gradient-primary not-italic">transformations</em>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A glimpse at the glow we create — captured in our studio in Pimpri Colony.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span
                key={t}
                className={`text-xs px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  i === 0
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl shadow-card ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] tracking-widest uppercase text-white/80">{it.tag}</span>
                <p className="mt-1 text-lg font-display text-white">{it.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
