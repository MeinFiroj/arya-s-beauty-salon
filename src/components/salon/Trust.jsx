import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, Award, Heart, GraduationCap, Sparkles } from "lucide-react";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span className="inline-flex items-baseline">
      <motion.span ref={ref}>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

const items = [
  { icon: Heart, value: 245, suffix: "+", label: "Happy Reviews" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 1000, suffix: "+", label: "Happy Clients" },
  { icon: GraduationCap, value: 100, suffix: "+", label: "Students Trained" },
  { icon: Sparkles, value: 20, suffix: "+", label: "Premium Services" },
];

export function Trust() {
  return (
    <section className="relative py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-10">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blush text-primary">
                <it.icon className="h-6 w-6" />
              </div>
              <p className="text-3xl lg:text-4xl font-display text-gradient-primary">
                <Counter value={it.value} suffix={it.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{it.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
