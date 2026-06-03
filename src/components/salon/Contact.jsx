import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, Instagram, Facebook, MessageCircle } from "lucide-react";

const mapEmbed = "https://www.google.com/maps?q=Sant+Tukaram+Nagar+Pimpri+Colony+Pune+411018&output=embed";
const directions = "https://www.google.com/maps/dir/?api=1&destination=Sant+Tukaram+Nagar+Pimpri+Colony+Pune+411018";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 text-xs font-medium text-primary">
              Visit Us
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Come say <em className="text-gradient-primary not-italic">hello</em>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              We're located behind Ganesh Temple in Sant Tukaram Nagar. Walk in, or call ahead — we'll be ready for you.
            </p>

            <div className="mt-8 space-y-4">
              <Item icon={MapPin} title="Address">
                Behind Ganesh Temple, Sant Tukaram Nagar, Pimpri Colony, Pune,<br />
                Pimpri-Chinchwad, Maharashtra 411018
              </Item>
              <Item icon={Phone} title="Phone">
                <a href="tel:+917775931069" className="hover:text-primary transition-colors">+91 77759 31069</a>
              </Item>
              <Item icon={Clock} title="Business Hours">
                Monday – Sunday<br />12:00 PM – 9:00 PM
              </Item>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={directions}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-rose px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:-translate-y-0.5 transition-all"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <a
                href="tel:+917775931069"
                className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3 text-sm font-medium hover:border-primary/40 transition-all"
              >
                <Phone className="h-4 w-4 text-primary" /> Call Now
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <p className="text-xs text-muted-foreground mr-2">Follow us</p>
              <Social href="https://instagram.com" icon={Instagram} />
              <Social href="https://facebook.com" icon={Facebook} />
              <Social href="https://wa.me/917775931069" icon={MessageCircle} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-card min-h-[400px] border border-border"
          >
            <iframe
              title="Arya's Beauty Salon location"
              src={mapEmbed}
              className="h-full w-full min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Item({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blush text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{children}</p>
      </div>
    </div>
  );
}

function Social({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank" rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border text-foreground/70 hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
