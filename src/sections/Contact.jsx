import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowRight, CheckCircle, Mail } from 'lucide-react';
import '../styles/contact.css';

/* ── Custom SVG icons for social platforms (not available in lucide-react v1.8) ── */
const LinkedInSvg = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubSvg = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramSvg = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

/* ── Social links data ── */
const SOCIALS = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Wahyu Rohman Dwiutra',
    href: 'https://www.linkedin.com/in/wahyu-rohman-dwiputra/',
    icon: <LinkedInSvg size={20} />,
    mod: 'linkedin',
    label: 'Connect on LinkedIn',
  },
  {
    id: 'github',
    name: 'GitHub',
    handle: '@wahyurohmann',
    href: 'https://github.com/wahyurohmann',
    icon: <GitHubSvg size={20} />,
    mod: 'github',
    label: 'View GitHub Profile',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: 'wahyurohman12',
    href: 'https://www.instagram.com/wahyurohman12/',
    icon: <InstagramSvg size={20} />,
    mod: 'instagram',
    label: 'DM me on Instagram',
  },
];

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

const slideIn = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Ganti fungsi handleSubmit lama (baris 77-85) dengan kode ini:
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Mengambil data langsung dari form menggunakan FormData (sesuai Quick Start)
    const formData = new FormData(e.target);

    // 2. Menambahkan access_key (Ganti dengan Key kamu sendiri atau gunakan .env)
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      // 3. Mengirim data ke API Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setLoading(false);
        setSent(true);
        // Opsional: Reset state form jika kamu menggunakannya untuk value input
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setLoading(false);
        alert("Error: " + data.message);
      }
    } catch (error) {
      setLoading(false);
      console.error("Submission error:", error);
      alert("Terjadi kesalahan saat mengirim pesan.");
    }
  };

  return (
    <section className="contact section" id="contact">
      {/* Orbs */}
      <div className="orb orb-green  contact__orb-1" />
      <div className="orb orb-orange contact__orb-2" />

      <div className="container">

        {/* Section heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-heading__label">Let's Talk</span>
          <h2 className="section-heading__title">
            Get In <span>Touch</span>
          </h2>
          <div className="section-heading__line" />
        </motion.div>

        <div className="contact__inner">

          {/* ── Left: Info ── */}
          <motion.div
            className="contact__info"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.h3 className="contact__tagline" variants={fadeUp}>
              Open to <span>collaborations,<br />
                freelance &amp; internship roles</span>
            </motion.h3>

            <motion.p className="contact__description" variants={fadeUp}>
              Whether you have a project idea, an internship opportunity, or just want to
              say hello — my inbox is always open. I'll do my best to get back
              to you within 24 hours.
            </motion.p>

            {/* Social links */}
            <motion.div className="contact__socials" variants={stagger}>
              <p className="contact__socials-label">Find me on</p>
              {SOCIALS.map(s => (
                <motion.a
                  key={s.id}
                  href={s.href}
                  className={`contact__social-link contact__social-link--${s.mod}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  id={`contact-${s.id}`}
                  variants={fadeUp}
                >
                  <div className={`contact__social-icon contact__social-icon--${s.mod}`}>
                    {s.icon}
                  </div>
                  <div className="contact__social-text">
                    <span className="contact__social-name">{s.name}</span>
                    <span className="contact__social-handle">{s.handle}</span>
                  </div>
                  <ArrowRight size={16} className="contact__social-arrow" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            variants={slideIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="contact__form-card">
              <div className="contact__form-title">
                <Mail size={18} style={{ color: 'var(--clr-light-green)' }} />
                Send a Message
              </div>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    className="contact__success"
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="contact__success-icon">
                      <CheckCircle size={26} />
                    </div>
                    <p className="contact__success-title">Message sent!</p>
                    <p className="contact__success-text">
                      Thanks for reaching out. I'll reply within 24 hours.
                    </p>
                    <button
                      className="btn btn-outline"
                      onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      id="contact-send-another-btn"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    className="contact__form"
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    id="contact-form"
                  >
                    <div className="contact__form-row">
                      <div className="contact__field">
                        <label className="contact__label" htmlFor="contact-name">Name</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          className="contact__input"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                        />
                      </div>
                      <div className="contact__field">
                        <label className="contact__label" htmlFor="contact-email">Email</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          className="contact__input"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    <div className="contact__field">
                      <label className="contact__label" htmlFor="contact-subject">Subject</label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        className="contact__input"
                        placeholder="Project Collaboration / Internship Opportunity…"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="contact__field">
                      <label className="contact__label" htmlFor="contact-message">Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="contact__textarea"
                        placeholder="Tell me about your project or opportunity…"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                      />
                    </div>

                    <button
                      type="submit"
                      className="contact__submit"
                      disabled={loading}
                      id="contact-submit-btn"
                    >
                      {loading ? (
                        <>Sending…</>
                      ) : (
                        <><Send size={15} /> Send Message</>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
