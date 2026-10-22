import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X, Sparkles } from 'lucide-react';
import styles from './Navbar.module.css';

export function Navbar({ onCtaClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Coffee size={20} color="#FF5500" />
          </div>
          <span className={styles.logoText}>
            <span className={styles.bracket}>&lt;</span>
            Coffee2Code
            <span className={styles.slash}>/&gt;</span>
          </span>
        </a>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <a href="#beneficios" onClick={closeMobileMenu} className={styles.navLink}>
            Benefícios
          </a>
          <a href="#tecnologia" onClick={closeMobileMenu} className={styles.navLink}>
            Tecnologia
          </a>
          <a href="#depoimentos" onClick={closeMobileMenu} className={styles.navLink}>
            Depoimentos
          </a>
          <a href="#faq" onClick={closeMobileMenu} className={styles.navLink}>
            FAQ
          </a>

          <div className={styles.mobileOnlyBtn}>
            <button
              className={styles.ctaBtn}
              onClick={() => {
                closeMobileMenu();
                onCtaClick();
              }}
            >
              <Sparkles size={16} />
              Garantir Lote
            </button>
          </div>
        </nav>

        <div className={styles.actions}>
          <button className={styles.ctaBtn} onClick={onCtaClick}>
            <Sparkles size={16} />
            Garantir Lote
          </button>

          <button
            className={styles.menuToggle}
            onClick={toggleMobileMenu}
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
