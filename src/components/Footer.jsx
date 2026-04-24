import { Link } from 'react-scroll';
import '../styles/footer.css';

const YEAR = new Date().getFullYear();

const FOOTER_LINKS = [
  { label: 'About', to: 'about' },
  { label: 'Education', to: 'education' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const SCROLL_OPTS = { smooth: true, duration: 600, offset: -68 };

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">

          {/* Logo
          <Link to="about" {...SCROLL_OPTS} className="footer__logo" aria-label="Back to top">
            <div className="footer__logo-icon"><img src="src/assets/myphoto.png" alt="Wahyu Rohman Dwiputra" /></div>
            <span>Wahyu Rohman <span>Dwiputra</span></span>
          </Link> */}

          {/* Copyright */}
          <p className="footer__copy">
            © {YEAR} <strong>Wahyu Rohman Dwiputra</strong>
          </p>

          {/* Nav links */}
          <nav className="footer__links" aria-label="Footer navigation">
            {FOOTER_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                {...SCROLL_OPTS}
                className="footer__link"
                id={`footer-link-${to}`}
              >
                {label}
              </Link>
            ))}
          </nav>

        </div>
      </div>
    </footer>
  );
}
