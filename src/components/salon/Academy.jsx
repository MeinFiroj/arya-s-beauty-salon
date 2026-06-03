import { motion } from "framer-motion";
import { GraduationCap, Check, ArrowRight } from "lucide-react";
import academy from "@/assets/academy.jpg";

const features = [
  "Basic & Advanced Beauty Courses",
  "Hands-on Practical Training",
  "Industry-recognized Certification",
  "Small Batches, Personal Mentorship",
  "Career Guidance & Placement Support",
];

export function Academy() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-blush via-card to-beige p-8 lg:p-16">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-rose/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary">
                <GraduationCap className="h-3.5 w-3.5" />
                Beauty Training Academy
              </span>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
                Turn your passion into a <em className="text-gradient-gold not-italic">profession</em>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-lg">
                Join Arya's Beauty Academy and learn the craft from experienced professionals.
                From beginners to advanced learners, our courses are designed to make you industry-ready.
              </p>

              <ul className="mt-7 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-linear-to-br from-primary to-rose text-primary-foreground">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold to-rose px-7 py-3.5 text-sm font-medium text-gold-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-4xl overflow-hidden shadow-soft"
            >
              <img src={academy} alt="Beauty academy training session" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <p className="text-xs text-muted-foreground">Next batch starting</p>
                <p className="text-lg font-display">Limited seats — Enroll today</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
