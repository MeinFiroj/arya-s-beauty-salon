import { motion } from "framer-motion";
import { Scissors, Sparkles, Flower2, Brush, ArrowUpRight } from "lucide-react";

const categories = [
  {
    icon: Scissors,
    title: "Hair Services",
    desc: "Precision cuts, hair spa, and smoothening treatments that bring out your hair's natural shine.",
    items: ["Haircut", "Layer Haircut", "Hair Spa", "Hair Smoothening"],
  },
  {
    icon: Sparkles,
    title: "Skin Care",
    desc: "Advanced facials and treatments designed to give you a radiant, healthy glow.",
    items: ["Hydra Facial", "Gold Facial", "Bleach", "Skin Brightening"],
  },
  {
    icon: Brush,
    title: "Makeup",
    desc: "Flawless makeup for every occasion — from intimate parties to your dream wedding day.",
    items: ["Party Makeup", "Bridal Makeup", "HD Makeup", "Engagement Look"],
  },
  {
    icon: Flower2,
    title: "Beauty Treatments",
    desc: "Pamper your skin with hygienic, premium waxing and full-body care treatments.",
    items: ["Waxing", "Tan Removal", "Body Polishing", "Cleanup"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
            Our Services
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Curated services <em className="text-gradient-primary not-italic">for every you</em>
          </h2>
          <p className="mt-5 text-muted-foreground">
            From everyday glow-ups to once-in-a-lifetime moments, every service is designed
            with care, premium products, and an artist's eye for detail.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl bg-card border border-border p-7 shadow-card hover:shadow-soft transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-blush/60 blur-2xl group-hover:bg-rose/50 transition-colors duration-500" />

              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-rose text-primary-foreground shadow-soft">
                  <cat.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl">{cat.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>

                <ul className="mt-5 space-y-1.5">
                  {cat.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
