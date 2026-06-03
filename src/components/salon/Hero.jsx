import { motion } from "framer-motion";
import { Star, Sparkles, Heart, ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-salon.png";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-rose/30 blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-lavender/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/70">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Premium Beauty Salon · Pimpri-Chinchwad
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              Reveal Your <em className="not-italic text-gradient-primary">Natural</em>
              <br />
              Beauty With <span className="text-gradient-gold">Expert Care</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Experience premium beauty treatments, skincare, haircare, makeup, facials, and professional
              beauty training trusted by hundreds of happy clients in Pimpri-Chinchwad.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-rose px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:border-primary/40 transition-all"
              >
                <Play className="h-3.5 w-3.5 text-primary" />
                View Services
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">4.9/5 · 245+ Reviews</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-2xl font-display">10+</p>
                <p className="text-xs text-muted-foreground">Years of expertise</p>
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-2xl font-display">1000+</p>
                <p className="text-xs text-muted-foreground">Happy clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-4/5 rounded-4xl overflow-hidden shadow-soft">
              <img
                src={heroImg}
                alt="Premium beauty salon interior"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-left-8 glass rounded-2xl px-4 py-3 shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-gold to-rose text-white">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <p className="text-lg font-display leading-none">4.9</p>
                  <p className="text-[10px] text-muted-foreground">245+ reviews</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/3 -right-4 sm:-right-8 glass rounded-2xl px-4 py-3 shadow-card max-w-50"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blush text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-tight">Hydra Facial</p>
                  <p className="text-[11px] text-muted-foreground">Glow guaranteed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 left-4 sm:left-10 glass rounded-2xl px-4 py-3 shadow-card max-w-65"
            >
              <div className="flex items-center gap-2 mb-1">
                <Heart className="h-3.5 w-3.5 text-primary fill-current" />
                <p className="text-xs font-medium">Loved by 1000+ clients</p>
              </div>
              <p className="text-[11px] text-muted-foreground leading-snug">
                "Best salon experience in PCMC. Absolutely glowing!"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
