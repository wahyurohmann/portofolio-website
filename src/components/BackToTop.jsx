import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import '../styles/footer.css';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="back-to-top"
          onClick={scrollTop}
          aria-label="Back to top"
          id="back-to-top-btn"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1,   y: 0  }}
          exit={{   opacity: 0, scale: 0.7, y: 20  }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          whileHover={{ scale: 1.12 }}
          whileTap={{  scale: 0.92 }}
        >
          <div className="back-to-top__ring" aria-hidden="true" />
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
