import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Girish Nagarmote",
    text: "I've been visiting this salon for years. The Hydra Facial and waxing services were exceptional. The glow was visible immediately.",
    service: "Hydra Facial",
  },
  {
    name: "Pooja Sabale",
    text: "I loved the Gold Facial. It was so relaxing and the results were amazing. My skin felt brand new for weeks.",
    service: "Gold Facial",
  },
  {
    name: "Vaishali Kamble",
    text: "I completed the Basic and Advanced Beauty Course here. The practical training helped me master the skills and start my career.",
    service: "Beauty Academy",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-medium text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Loved by our <em className="text-gradient-primary not-italic">beautiful clients</em>
          </h2>
          <div className="mt-6 inline-flex items-center gap-2">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <span className="text-sm text-muted-foreground">4.9 on Google · 245+ reviews</span>
          </div>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-3xl bg-card p-8 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-blush" />
              <div className="flex text-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-foreground/85 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-rose to-primary flex items-center justify-center text-primary-foreground font-display text-lg">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-medium text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
