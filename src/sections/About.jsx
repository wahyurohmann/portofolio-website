import { motion } from 'framer-motion';
import { Brain, Cpu, Network, Download, ArrowRight } from 'lucide-react';
import '../styles/about.css';

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const chipVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

/* ── Data ── */
const SKILLS = [
  'Python', 'Machine Learning', 'Deep Learning', 'SQL DML Query',
  'Data Analytics', 'Data Visualizations', 'Data Annotation',
  'UI/UX Design', 'Git', 'NLP', 'HTML', 'CSS',
];

const STATS = [
  { icon: <Brain size={16} />, value: '3.69', label: 'GPA / 4.00', mod: 'green' },
  { icon: <Cpu size={16} />, value: '20+', label: 'Projects', mod: 'orange' },
  // { icon: <Network size={16} />, value: 'D4', label: 'Degree', mod: 'yellow' },
];

export default function About() {
  return (
    <section className="about section bg-grid" id="about">
      {/* Decorative orbs */}
      <div className="orb orb-green about__orb-1" />
      <div className="orb orb-orange about__orb-2" />
      <div className="orb orb-yellow about__orb-3" />
      <div className="about__grid" />
      <div className="about__vignette" />

      <div className="container">
        <div className="about__content">

          {/* ── Left: Text ── */}
          <motion.div
            className="about__text"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Available badge */}
            <motion.div className="about__badge" variants={fadeUp}>
              <span className="about__badge-dot" />
              Available for Opportunities
            </motion.div>

            {/* Name */}
            <motion.h1 className="about__name" variants={fadeUp}>
              Hi, I&apos;m{' '}
              <span className="gradient-text">Wahyu Rohman Dwiputra</span>
            </motion.h1>

            {/* Role */}
            <motion.p className="about__role" variants={fadeUp}>
              <span className="about__role-tag">Applied Data Science Student</span>
            </motion.p>

            {/* Bio */}
            <motion.p className="about__bio" variants={fadeUp}>
              A sixth-semester student in the D4 Applied Data Science Study Program at the Electronic Engineering Polytechnic Institute of Surabaya.
              {/* AI Engineer specializing in <strong style={{ color: 'var(--clr-light-green)' }}>NLP</strong>,{' '}
              <strong style={{ color: 'var(--clr-orange)' }}>recommendation systems</strong>, and{' '}
              <strong style={{ color: 'var(--clr-yellow)' }}>deep learning</strong>. Currently pursuing a D4 in
              Applied Data Science at Politeknik, building intelligent systems that solve
              real-world problems through data-driven approaches. */}
            </motion.p>

            {/* Skill chips */}
            <motion.div className="about__skills" variants={stagger}>
              {SKILLS.map(skill => (
                <motion.span key={skill} className="about__skill-chip" variants={chipVariant}>
                  <span className="about__skill-chip-dot" />
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="about__cta" variants={fadeUp}>
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                id="about-view-projects-btn"
              >
                My Projects <ArrowRight size={15} />
              </a>
              <a
                href="/CV_Wahyu Rohman Dwiputra.pdf"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                id="CV_Wahyu Rohman Dwiputra.pdf"
              >
                <Download size={15} /> Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Avatar visual ── */}
          <motion.div
            className="about__visual"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="about__avatar-wrapper">
              {/* Rotating rings */}
              <div className="about__avatar-ring">
                <div className="about__ring-node" />
              </div>
              <div className="about__avatar-ring-2">
                <div className="about__ring-node-2" />
              </div>

              {/* Avatar */}
              <div className="about__avatar">
                <div className="about__avatar">
                  <img src="/src/assets/myphoto.png" alt="Wahyu" className="about__avatar-img" />
                </div>
                {/* <div className="about__avatar-initials">WD</div>
                <div className="about__avatar-label">AI Engineer</div> */}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
