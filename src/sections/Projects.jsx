import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, Brain, BarChart2, MessageSquare, Database,
  Cpu, Globe, GitBranch, Search, Layers, Activity,
  PieChart, Eye, Bot, FileText, Zap, Code2, Network,
  TrendingUp, Shield, Sparkles,
  ShoppingBasket,
  Languages,
  ScatterChart
} from 'lucide-react';
import '../styles/projects.css';
import { img } from 'framer-motion/client';

/* ── 20 Project cards ── */
const PROJECTS = [
  {
    id: 'p1',
    title: 'Text Summarization of Netflix App Reviews Using the Bidirectional and Auto-Regressive Transformers (BART) and Text-to-Text Transfer Transformer (T5) Methods',
    desc: '•	Building a model to summarize Netflix app reviews on the Google Play Store using the BART and T5 transformer methods.',
    tags: ['BART', 'NLP', 'Python', 'T5'],
    icon: <Languages size={18} />,
    category: 'NLP',
    link: 'https://drive.google.com/drive/folders/1SWYgC-g8vroWiVtIO2rsVyUSRT_NWkaL?usp=sharing',
  },
  {
    id: 'p2',
    title: 'Market Basket Analysis Using The Apriori Algorithm',
    desc: 'Building a clustering model for market basket analysis using the Apriori algorithm. Market basket analysis plays a role in determining product layout, identifying product purchase patterns, and determining product bundles.',
    tags: ['Apriori Algorithm', 'Association Rule', 'Python'],
    icon: <Cpu size={18} />,
    category: 'ML',
    link: 'https://drive.google.com/drive/folders/1uf9h-mnTBS4Sz1NIvATEwPRBWYx2VHRJ?usp=sharing',
  },
  {
    id: 'p3',
    title: 'Multivariate Linear Regression Analysis of the Effect of the Human Development Index, the Open Unemployment Rate, and Economic Growth on the Number of People Living in Poverty in East Nusa Tenggara Province in 2022',
    desc: 'Analysing and processing data using multiple linear regression to determine the effect of the independent variables the Human Development Index, the open unemployment rate, and economic growth—on the dependent variable, the number of people living in poverty in East Nusa Tenggara Province in 2022.',
    tags: ['Multiple Linear Regression', 'R Programming Languange', 'Statistics'],
    icon: <ScatterChart size={18} />,
    category: 'Data Analytics',
    link: 'https://drive.google.com/drive/folders/1bMsZ62mLTMbh2UAxjMT24_rWJ1Nl1doF?usp=sharing',
  },
  {
    id: 'p4',
    title: 'Classification of Well Water Quality in DKI Jakarta Province Using Discriminant Analysis',
    desc: 'Developed a classification model to classify well water quality in DKI Jakarta Province into 4 categories: good, slightly contaminated, moderately contaminated, and heavily contaminated.    ',
    tags: ['Discriminant Analysis', 'Statistics'],
    icon: <ScatterChart size={18} />,
    category: 'Data Analytics',
    link: 'https://drive.google.com/drive/folders/1fRWfD0xdF4QltYmsAzVpSpxQSBOdhBG1?usp=sharing',
  },
  {
    id: 'p5',
    title: 'Heart Disease Prediction',
    desc: '•	Building a machine learning model to predict the likelihood of an individual being at risk for heart disease and applying hyperparameter tuning to find the optimal parameters and improve the accuracy of the machine learning model.    ',
    tags: ['Hyperparameter Tuning', 'ML', 'Prediction', 'Python'],
    icon: <Cpu size={18} />,
    category: 'ML',
    link: 'https://drive.google.com/drive/folders/1wNzNwwAqSjYKjPkLW4_c3vrOTxd55XTN?usp=sharing',
  },
  {
    id: 'p6',
    title: 'Analysis of Macroeconomic Factors Affecting High Levels of Foreign Direct Investment (FDI) in Indonesia Using Probit Regression',
    desc: 'Developed a probit regression model to determine the probability of high foreign direct investment in Indonesia based on economic factors such as exports of goods and services, GDP growth, inflation, the official exchange rate, interest rates, and remittances.',
    tags: ['Econometrcs', 'Macroeconomic', 'Probit Regression'],
    icon: <ScatterChart size={18} />,
    category: 'Data Analytics',
    link: 'https://drive.google.com/drive/folders/1iFVgyUb3vMqpbbdh3VuCp890iweQ5R7b?usp=sharing',
  },
  {
    id: 'p7',
    title: 'Implementation of YOLOv8 and YOLOv26 in Brain Tumor Detection',
    desc: 'Building deep learning models to detect brain tumors. The input data consists of brain MRI scans. The model was trained using two different methods YOLOv8n and YOLOv26m.',
    tags: ['Computer Vision', 'Deep Learning', 'Object Detection', 'YOLO'],
    icon: <Cpu size={18} />,
    category: 'DL',
    link: 'https://drive.google.com/drive/folders/1Ncs2Y_ekRXbfqpa6QtcXaEuhZRJxYaVb?usp=sharing',
  },
  {
    id: 'p8',
    title: 'Ecovista: Application of Principal COmponents Analysis using Alternating Least Square on Mixed Data Scale and Density Based Clustering for Economic Segmentation of Province in Indonesia',
    desc: 'Reducing the dimensionality of mixed-scale data in Indonesia’s economic data and performing economic segmentation of Indonesia’s provinces using a clustering method that is robust to outliers and visualizing the clustering results in a dashboard.',
    tags: ['DBSCAN', 'PRINCALS', 'Segmentation Analysis'],
    icon: <ScatterChart size={18} />,
    category: 'Data Analytics',
    link: 'https://drive.google.com/file/d/1qW3vVylM7RDDlgFvBkEZhvmb2vxQu-bK/view?usp=sharing',
  },
  {
    id: 'p9',
    title: 'Dashboard Covid 19',
    desc: <img src="/tableau-covid-19.png" alt="Dashboard Covid 19" className='project-card_image-preview' />,
    tags: ['Dashboard Analytics', 'Data Visualization', 'Tableau'],
    icon: <PieChart size={18} />,
    category: 'Data Visualizations',
    link: 'https://public.tableau.com/views/TugasDashboardCovid/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    id: 'p10',
    title: 'Dashboard PDRB',
    desc: <img src="/tableau-pdrb.png" alt="Dashboard PDRB" className='project-card_image-preview' />,
    tags: ['Dashboard Analytics', 'Data Visualization', 'Tableau'],
    icon: <PieChart size={18} />,
    category: 'Data Visualizations',
    link: 'https://public.tableau.com/views/DashboardPDRB_17282941983240/DashboardPDRB?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    id: 'p11',
    title: 'Dashboard Tokokita',
    desc: <img src="/looker-tokokita.png" alt="Dashboard Tokokita" className='project-card_image-preview' />,
    tags: ['Dashboard Analytics', 'Data Visualization', 'Google Looker Studio'],
    icon: <PieChart size={18} />,
    category: 'Data Visualizations',
    link: 'https://lookerstudio.google.com/reporting/2283310c-54fc-4a1e-aecf-8f62b3d9523b',
  },
  {
    id: 'p12',
    title: 'Superstore Dashboard',
    desc: <img src="/looker-superstore.png" alt="Dashboard Superstore" className='project-card_image-preview' />,
    tags: ['Dashboard Analytics', 'Data Visualization', 'Google Looker Studio'],
    icon: <PieChart size={18} />,
    category: 'Data Visualizations',
    link: 'https://lookerstudio.google.com/reporting/391ecef4-3059-463c-a734-8a665f855b37',
  },
  {
    id: 'p13',
    title: 'Website Perpustakaan',
    desc: 'This project is a simple library website created using HTML alone. Its main focus is on understanding the basic structure of a website, page navigation and information flow without the use of CSS or JavaScript. Although simple, the website already features several interconnected main pages that represent a library system in general.',
    tags: ['HTML', 'Web Development'],
    icon: <Code2 size={18} />,
    category: 'Web Development',
    link: 'https://github.com/wahyurohmann/Web-Perpustakaan-HTML-Only',
  },
  {
    id: 'p14',
    title: 'Dashboard PHI Mart',
    desc: <img src="/pbi-phi.png" alt="Dashboard PHI Mart" className='project-card_image-preview' />,
    tags: ['Dashboard Analytics', 'Data Visualization', 'Power BI'],
    icon: <PieChart size={18} />,
    category: 'Data Visualizations',
    link: 'https://drive.google.com/drive/folders/1dQOiIWvc71-_mwkxDxEeFTb5QwXNcVvR?usp=drive_link',
  },
  {
    id: 'p15',
    title: 'Dashboard PBI Superstore',
    desc: <img src="/pbi-superstore.png" alt="Dashboard PBI Superstore" className='project-card_image-preview' />,
    tags: ['Dashboard Analytics', 'Data Visualization', 'Power BI'],
    icon: <PieChart size={18} />,
    category: 'Data Visualizations',
    link: 'https://drive.google.com/drive/folders/1op08BWtBSVhGl25SCA6rYiCuX7WEQNjL?usp=sharing',
  },
  {
    id: 'p16',
    title: 'Grafana Covid Dashboard',
    desc: <img src="/grafana.png" alt="Grafana Covid Dashboard" className='project-card_image-preview' />,
    tags: ['Dashboard Analytics', 'Data Visualization', 'Grafana'],
    icon: <PieChart size={18} />,
    category: 'Data Visualizations',
    link: 'https://drive.google.com/drive/folders/1dQOiIWvc71-_mwkxDxEeFTb5QwXNcVvR?usp=drive_link',
  },
  // {
  //   id: 'p17',
  //   title: 'Social Media Trend Tracker',
  //   desc: 'Real-time Twitter/X trend analysis using streaming API + topic modeling with BERTopic.',
  //   tags: ['NLP', 'BERTopic', 'Streamlit'],
  //   icon: <Globe size={18} />,
  //   category: 'Data',
  //   link: '#',
  // },
  // {
  //   id: 'p18',
  //   title: 'A/B Test Analysis Framework',
  //   desc: 'Statistical A/B testing toolkit with power analysis, bootstrapping, and Bayesian inference.',
  //   tags: ['Stats', 'Python', 'SciPy'],
  //   icon: <GitBranch size={18} />,
  //   category: 'Data',
  //   link: '#',
  // },
  // {
  //   id: 'p19',
  //   title: 'AutoML Pipeline Builder',
  //   desc: 'No-code AutoML pipeline builder using TPOT + Optuna for hyperparameter optimization.',
  //   tags: ['AutoML', 'TPOT', 'Optuna'],
  //   icon: <Zap size={18} />,
  //   category: 'ML',
  //   link: '#',
  // },
  // {
  //   id: 'p20',
  //   title: 'API Gateway for ML Models',
  //   desc: 'FastAPI-based model serving gateway with auth, rate limiting, and request logging.',
  //   tags: ['MLOps', 'FastAPI', 'Docker'],
  //   icon: <Code2 size={18} />,
  //   category: 'MLOps',
  //   link: '#',
  // },
];

const CATEGORIES = ['All', 'Data Analytics', 'Data Visualizations', 'NLP', 'ML', 'DL', 'Web Development'];

/* ── Animation variants ── */
const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

const gridVariant = {
  show: { transition: { staggerChildren: 0.06 } },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section className="projects section" id="projects">
      {/* Decorative orbs */}
      <div className="orb orb-green  projects__orb-1" />
      <div className="orb orb-orange projects__orb-2" />

      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-heading__label">Portfolio</span>
          <h2 className="section-heading__title">
            <span>Projects</span>
          </h2>
          <div className="section-heading__line" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`projects__filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              id={`filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="projects__grid"
            variants={gridVariant}
            initial="hidden"
            animate="show"
          >
            {filtered.map((project, idx) => (
              <motion.article
                key={project.id}
                className="project-card"
                variants={cardVariant}
                layout
                id={`project-card-${project.id}`}
              >
                <span className="project-card__number">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="project-card__icon" aria-hidden="true">
                  {project.icon}
                </div>

                <h3 className="project-card__title">{project.title}</h3>

                <p className="project-card__desc">{project.desc}</p>

                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>

                <div className="project-card__footer">
                  <a
                    href={project.link}
                    className="project-card__view-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`view-${project.id}`}
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={12} /> View
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Count indicator */}
        <motion.p
          className="projects__show-more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '2rem' }}
        >
          Showing {filtered.length} of {PROJECTS.length} projects
        </motion.p>

      </div>
    </section>
  );
}
