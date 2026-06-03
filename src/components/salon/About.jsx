import { motion } from "framer-motion";
import { Shield, Heart, Sparkles, UserCheck } from "lucide-react";
import about from "@/assets/about-salon.png";

const pillars = [
  { icon: UserCheck, title: "Professional Team", desc: "Experienced & certified beauty experts." },
  { icon: Shield, title: "Hygienic Environment", desc: "Sterilized tools & spotless studio." },
  { icon: Sparkles, title: "Premium Products", desc: "Trusted international beauty brands." },
  { icon: Heart, title: "Personalized Care", desc: "Treatments tailored to your skin & hair." },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-4/5 rounded-4xl overflow-hidden shadow-soft">
              <img src={about} alt="Inside Arya's Beauty Salon" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 glass rounded-2xl px-5 py-4 shadow-card">
              <p className="text-3xl font-display text-gradient-primary">10+</p>
              <p className="text-xs text-muted-foreground">Years of artistry</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 text-xs font-medium text-primary">
              About Arya's
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
              A sanctuary for <em className="text-gradient-primary not-italic">your beauty</em>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Arya's Beauty Salon has been serving clients across Pimpri-Chinchwad for over a decade with
              an unwavering commitment to quality, care, and customer satisfaction. Every visit is a
              personalized ritual — designed to help you feel confident, refreshed, and beautifully you.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-2xl bg-card border border-border p-5 hover:border-primary/30 transition-colors">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blush text-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 font-medium">{p.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
