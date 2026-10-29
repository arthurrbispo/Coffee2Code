import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Terminal, Heart, ArrowUp, Globe, MessageCircle, Briefcase, Play } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer({ onCtaClick }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top CTA Banner */}
        <motion.div
          className={styles.ctaBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Pronto para nunca mais beber café frio?
            </h3>
            <p className={styles.ctaSubtitle}>
              Garanta sua unidade no Lote Early Access antes que o estoque zere.
            </p>
          </div>
          <button className={styles.ctaButton} onClick={onCtaClick}>
            Garantir Coffee2Code →
          </button>
        </motion.div>

        {/* Footer Grid */}
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <a href="#" className={styles.logo} aria-label="Coffee2Code — voltar ao topo">
              <div className={styles.logoIcon} aria-hidden="true">
                <Coffee size={18} color="#FF5500" />
              </div>
              <span className={styles.logoText}>
                &lt;Coffee2Code/&gt;
              </span>
            </a>
            <p className={styles.brandDesc}>
              Hardware sob medida para a rotina de quem transforma café em código. Feito por devs, para devs.
            </p>
            <div className={styles.systemStatus}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>Todos os sistemas operacionais</span>
            </div>
          </div>

          {/* Product Column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Produto</h4>
            <a href="#beneficios" className={styles.footerLink}>Benefícios</a>
            <a href="#tecnologia" className={styles.footerLink}>Tecnologia</a>
            <a href="#depoimentos" className={styles.footerLink}>Depoimentos</a>
            <a href="#faq" className={styles.footerLink}>FAQ</a>
          </div>

          {/* Company Column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Empresa</h4>
            <a href="#" className={styles.footerLink}>Sobre Nós</a>
            <a href="#" className={styles.footerLink}>Blog Técnico</a>
            <a href="#" className={styles.footerLink}>Carreiras</a>
            <a href="#" className={styles.footerLink}>Imprensa</a>
          </div>

          {/* Legal Column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Legal</h4>
            <a href="#" className={styles.footerLink}>Termos de Uso</a>
            <a href="#" className={styles.footerLink}>Política de Privacidade</a>
            <a href="#" className={styles.footerLink}>Política de Troca</a>
            <a href="#" className={styles.footerLink}>Garantia</a>
          </div>

          {/* Social Column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Comunidade</h4>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialLink} aria-label="GitHub">
                <Globe size={18} aria-hidden="true" />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter / X">
                <MessageCircle size={18} aria-hidden="true" />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Briefcase size={18} aria-hidden="true" />
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <Play size={18} aria-hidden="true" />
              </a>
            </div>
            <p className={styles.socialNote}>
              Nos siga para acompanhar os próximos lotes.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Coffee2Code Inc. — Projeto fictício educacional. Feito com{' '}
            <Heart size={13} color="#FF5500" fill="#FF5500" aria-hidden="true" /> para a comunidade dev.
          </p>
          <div className={styles.bottomRight}>
            <span className={styles.buildTag}>
              <Terminal size={12} aria-hidden="true" /> v2.4.0-build.2026
            </span>
            <button className={styles.backToTop} onClick={scrollToTop} aria-label="Voltar ao topo">
              <ArrowUp size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
