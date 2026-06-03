import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Calendar } from "lucide-react";

const services = [
  "Haircut", "Hair Spa", "Hair Smoothening",
  "Hydra Facial", "Gold Facial", "Skin Brightening",
  "Party Makeup", "Bridal Makeup",
  "Waxing", "Tan Removal", "Body Polishing", "Cleanup",
  "Beauty Course Enquiry",
];

export function Booking() {
  const [form, setForm] = useState({
    name: "", phone: "", service: "", date: "", time: "", message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Arya's Beauty Salon, I would like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.time}\nMessage: ${form.message}`;
    const url = `https://wa.me/917775931069?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <section id="booking" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blush/40 via-background to-beige/40" />
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-rose/30 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary">
            <Calendar className="h-3.5 w-3.5" />
            Book Your Visit
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Ready to <em className="text-gradient-primary not-italic">glow</em>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fill in your details and we'll confirm your appointment instantly via WhatsApp.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl glass shadow-soft p-6 sm:p-10 grid sm:grid-cols-2 gap-5"
        >
          <Field label="Full Name" required>
            <input required value={form.name} onChange={upd("name")} type="text" className={inputCls} placeholder="Your name" />
          </Field>
          <Field label="Phone Number" required>
            <input required value={form.phone} onChange={upd("phone")} type="tel" className={inputCls} placeholder="+91" />
          </Field>
          <Field label="Service" required>
            <select required value={form.service} onChange={upd("service")} className={inputCls}>
              <option value="">Select a service</option>
              {services.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="Preferred Date" required>
            <input required value={form.date} onChange={upd("date")} type="date" className={inputCls} />
          </Field>
          <Field label="Preferred Time" required>
            <input required value={form.time} onChange={upd("time")} type="time" className={inputCls} />
          </Field>
          <Field label="Message">
            <input value={form.message} onChange={upd("message")} type="text" className={inputCls} placeholder="Anything we should know?" />
          </Field>

          <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground">
              Booking opens WhatsApp with your pre-filled message.
            </p>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-rose px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              Book via WhatsApp
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl bg-card border border-border px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15";

function Field({ label, children, required }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-foreground/70 mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}
