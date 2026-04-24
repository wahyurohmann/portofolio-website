import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2 } from 'lucide-react';
import '../styles/navbar.css';

const NAV_LINKS = [
  { label: 'About', to: 'about' },
  { label: 'Education', to: 'education' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
];

const SCROLL_OPTIONS = {
  smooth: true,
  duration: 600,
  offset: -68,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  /* ── Scroll listener ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="navbar__inner">

            {/* Logo */}
            <Link
              to="about"
              {...SCROLL_OPTIONS}
              className="navbar__logo"
              aria-label="Go to top"
            >
              {/* <div className="navbar__logo-icon">WD</div>
              <div className="navbar__logo-text">
                <span>Wahyu</span> Dwiputra
              </div> */}
            </Link>

            {/* Desktop links */}
            <ul className="navbar__links" role="list">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    {...SCROLL_OPTIONS}
                    className={`navbar__link ${activeLink === to ? 'active' : ''}`}
                    onSetActive={() => setActiveLink(to)}
                    spy
                    id={`nav-link-${to}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="contact"
                  {...SCROLL_OPTIONS}
                  className="navbar__link navbar__cta"
                  spy
                  onSetActive={() => setActiveLink('contact')}
                  id="nav-link-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              id="hamburger-btn"
            >
              <span className="navbar__hamburger-bar" />
              <span className="navbar__hamburger-bar" />
              <span className="navbar__hamburger-bar" />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu" role="dialog" aria-label="Mobile navigation menu">
          {[...NAV_LINKS, { label: 'Contact', to: 'contact' }].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              {...SCROLL_OPTIONS}
              className={`navbar__mobile-link ${activeLink === to ? 'active' : ''}`}
              onClick={closeMenu}
              id={`mobile-link-${to}`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
