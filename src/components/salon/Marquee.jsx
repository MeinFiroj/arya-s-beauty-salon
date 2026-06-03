const items = [
  "Hydra Facial",
  "Gold Facial",
  "Waxing",
  "Bridal Makeup",
  "Hair Spa",
  "Tan Removal",
  "Body Polishing",
  "Skin Brightening",
  "Beauty Courses",
  "Hair Styling",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="py-10 border-y border-border bg-card overflow-hidden">
      <div className="group flex overflow-hidden">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {row.map((it, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-8 text-3xl sm:text-4xl font-display text-foreground/30 hover:text-primary transition-colors">
              {it}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
