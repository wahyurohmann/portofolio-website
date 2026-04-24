import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  Building2,
  CheckCircle
} from 'lucide-react';
import '../styles/experience.css';

/* ── Animation variants ── */
const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ── Experience Data ── */
const EXPERIENCES = [
  {
    id: 'exp-1',
    role: 'Tech Development Intern',
    company: 'PT Inovasi Teknologi Solusindo - Trustmedis',
    type: 'Internship · Hybrid',
    duration: 'February 2026 – Present',
    abbr: 'TM',
    achievements: [
      'Assisted the team in creating database schemas.',
      'Created ODS master table migrations.',
      'Set up file definition query.',
      'Simulation on metabase dashboard visualization using dummy data about transactions and aggregations of  clinic and laboratorium.',
    ],
    stack: ['Git', 'Golang', 'Metabase Data Visualization', 'SQL DML Query'],
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      {/* Decorative orbs */}
      <div className="orb orb-orange experience__orb-1" />
      <div className="orb orb-yellow experience__orb-2" />

      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-heading__label">Career</span>
          <h2 className="section-heading__title">
            Internship <span>Experience</span>
          </h2>
          <div className="section-heading__line" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="exp__timeline"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {EXPERIENCES.map(exp => (
            <motion.div key={exp.id} className="exp-item" variants={itemVariant}>

              {/* Node */}
              <div className="exp-item__node" aria-label={exp.company}>
                {exp.abbr}
              </div>

              {/* Card */}
              <article className="exp-item__card">

                {/* Header */}
                <div className="exp-item__header">
                  <h3 className="exp-item__role">{exp.role}</h3>
                  <span className="exp-item__duration">
                    <Calendar size={12} /> {exp.duration}
                  </span>
                </div>

                {/* Company */}
                <div className="exp-item__company">
                  <Building2 size={14} />
                  {exp.company}
                  <span className="exp-item__type-badge">{exp.type}</span>
                </div>

                {/* Achievements */}
                <ul className="exp-item__achievements">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="exp-item__achievement">
                      <span className="exp-item__achievement-bullet" aria-hidden="true" />
                      {ach}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="exp-item__stack">
                  {exp.stack.map(tech => (
                    <span key={tech} className="exp-item__stack-tag">{tech}</span>
                  ))}
                </div>

              </article>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
