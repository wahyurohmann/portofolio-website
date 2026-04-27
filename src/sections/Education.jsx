import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import logoPens from '../assets/logo-pens.png';
import logoSmaga from '../assets/logo-smaga.png';
import '../styles/education.css';

/* ── Animation variants ── */
const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ── Education Data ── */
const EDUCATION = [
  {
    id: 'edu-1',
    degree: 'D4 — Applied Data Science',
    institution: 'Politeknik Elektronika Negeri Surabaya',
    location: 'Surabaya, East Java',
    period: '2023 – Present',
    gpa: '3.69 / 4.00',
    description: 'Studied about data analysis and processing data covering both structured and unstructured data—using various methods, including statistics, machine learning and deep learning. Furthermore, data visualisation using visualisation tools is an essential part of this work. In addition, I have also been involved in developing projects, both independently and as part of a team.',
    logo: logoPens,
  },
  {
    id: 'edu-2',
    degree: 'Natural Science',
    institution: 'SMA Negeri 3 Blitar',
    location: 'Blitar, East Java',
    period: '2020 – 2023',
    gpa: null,
    description: 'Completed secondary education with a focus on the natural sciences, which includes chemistry, physics, biology and mathematics.',
    logo: logoSmaga,
  },
];

export default function Education() {
  return (
    <section className="education section" id="education">
      {/* Decorative orb */}
      <div className="orb orb-green education__orb" />

      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-heading__label">Background</span>
          <h2 className="section-heading__title">
            <span>Education</span>
          </h2>
          <div className="section-heading__line" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="education__timeline"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {EDUCATION.map(edu => (
            <motion.div key={edu.id} className="edu-item" variants={itemVariant}>

              {/* Institution logo node */}
              <div className="edu-item__node" aria-hidden="true">
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="edu-item__logo"
                />
              </div>

              {/* Card */}
              <article className="edu-item__card">

                {/* Header */}
                <div className="edu-item__header">
                  <h3 className="edu-item__degree">{edu.degree}</h3>
                  <span className="edu-item__year-badge">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                </div>

                {/* Institution */}
                <div className="edu-item__institution">
                  <MapPin size={14} />
                  {edu.institution} &mdash; {edu.location}
                </div>

                {/* Description */}
                <p className="edu-item__description">
                  {edu.description}
                </p>

                {/* GPA */}
                {edu.gpa && (
                  <div className="edu-item__gpa">
                    <span className="edu-item__gpa-label">GPA</span>
                    <span className="edu-item__gpa-value">{edu.gpa}</span>
                  </div>
                )}

              </article>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
