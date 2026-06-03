import { Sparkles, Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-rose text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-display text-xl">
                Arya's <span className="text-gradient-primary">Beauty</span>
              </span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground font-display italic">आर्य'स ब्यूटी सालों</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Beauty, confidence & care in every service — proudly serving Pimpri-Chinchwad.
            </p>
          </div>

          <div>
            <p className="font-medium mb-4">Quick Links</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Home","Services","Gallery","About","Reviews","Contact"].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium mb-4">Services</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Hair Services","Skin Care","Makeup","Beauty Treatments","Beauty Academy"].map(s => (
                <li key={s}><a href="#services" className="hover:text-primary transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:+917775931069" className="hover:text-primary">+91 77759 31069</a></li>
              <li>Behind Ganesh Temple,<br />Sant Tukaram Nagar,<br />Pimpri Colony, Pune 411018</li>
              <li>Mon–Sun · 12:00 PM – 9:00 PM</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border hover:text-primary hover:border-primary/40 transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border hover:text-primary hover:border-primary/40 transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="https://wa.me/917775931069" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border hover:text-primary hover:border-primary/40 transition-colors"><MessageCircle className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© 2026 Arya's Beauty Salon. All Rights Reserved.</p>
          <p className="text-xs text-muted-foreground">Crafted with <span className="text-primary">♥</span> in Pune</p>
        </div>
      </div>
    </footer>
  );
}
