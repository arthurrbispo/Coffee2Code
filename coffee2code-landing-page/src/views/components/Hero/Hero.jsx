import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Flame, ArrowRight, CheckCircle, Terminal } from 'lucide-react';
import styles from './Hero.module.css';

export function Hero({ onCtaClick }) {
  const [activeTemp, setActiveTemp] = useState(65);
  const [ledStatus, setLedStatus] = useState('NOMINAL');

  const handleTempChange = (temp, status) => {
    setActiveTemp(temp);
    setLedStatus(status);
  };

  return (
    <section className={styles.heroSection}>
      {/* Background glow effects */}
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className={styles.container}>
        {/* Left Content Column */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className={styles.badgeGroup}>
            <span className={styles.statusPill}>
              <span className={styles.statusDot} />
              HARDWARE v2.4 ONLINE
            </span>
            <span className={styles.badge}>
              <Terminal size={14} /> // Dev-Proof Specs
            </span>
          </div>

          <h1 className={styles.title}>
            A caneca que converte <span className={styles.highlight}>café em código</span> sem bugs.
          </h1>

          <p className={styles.subtitle}>
            Diga adeus ao café frio e aos erros em tempo de execução. O hardware com aquecimento inteligente e telemetria feito sob medida para a sua rotina de programação.
          </p>

          <div className={styles.ctaGroup}>
            <button className={styles.ctaButton} onClick={onCtaClick}>
              <span>Garantir Lote Limitado</span>
              <ArrowRight size={18} />
            </button>
            <a href="#tecnologia" className={styles.secondaryButton}>
              Explorar Telemetria
            </a>
          </div>

          <div className={styles.featureHighlights}>
            <div className={styles.featureItem}>
              <CheckCircle size={16} color="#00FF66" />
              <span>Mantém em 65°C constantes</span>
            </div>
            <div className={styles.featureItem}>
              <CheckCircle size={16} color="#00FF66" />
              <span>Display OLED Integrado</span>
            </div>
            <div className={styles.featureItem}>
              <CheckCircle size={16} color="#00FF66" />
              <span>Conexão USB-C PD</span>
            </div>
          </div>

          <div className={styles.socialProof}>
            <div className={styles.avatarGroup}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                alt="Dev 1"
              />
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100"
                alt="Dev 2"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                alt="Dev 3"
              />
            </div>
            <div className={styles.proofText}>
              <div className={styles.stars}>★★★★★ <span>4.9/5</span></div>
              <p>Aprovado por mais de <strong>+1.200 desenvolvedores</strong></p>
            </div>
          </div>
        </motion.div>

        {/* Right Mug Column */}
        <motion.div
          className={styles.mockupContainer}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Steam Animation */}
          <div className={styles.steamContainer}>
            <span className={`${styles.steam} ${styles.steam1}`} />
            <span className={`${styles.steam} ${styles.steam2}`} />
            <span className={`${styles.steam} ${styles.steam3}`} />
          </div>

          <div className={styles.mugCard}>
            <div className={styles.mugHeader}>
              <span className={styles.mugBrand}>COFFEE2CODE</span>
              <span className={styles.tempBadge}>
                <Flame size={14} color="#FF5500" />
                {activeTemp}°C
              </span>
            </div>

            <div className={styles.mugVisualWrapper}>
              <motion.div
                className={styles.mugMockup}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className={styles.mugHandle} />
                <div className={styles.mugBody}>
                  <div className={styles.mugRim} />
                  <div className={styles.mugLogoBadge}>
                    <Coffee size={28} color="#FF5500" />
                  </div>
                  
                  {/* Digital OLED Display */}
                  <div className={styles.mugLed}>
                    <div className={styles.ledHeader}>
                      <span className={styles.ledDot} />
                      OLED TELEMETRY v2.4
                    </div>
                    <div className={styles.ledMainText}>
                      CAFE: 94% [{ledStatus}]
                    </div>
                    <div className={styles.ledSubText}>
                      TEMP: {activeTemp}°C | IDE: VS_CODE
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Interactive Mode Switches */}
            <div className={styles.tempControls}>
              <span className={styles.controlLabel}>Modos da Caneca:</span>
              <div className={styles.btnGroup}>
                <button
                  className={`${styles.modeBtn} ${activeTemp === 65 ? styles.activeMode : ''}`}
                  onClick={() => handleTempChange(65, 'NOMINAL')}
                >
                  65°C Dev Hot
                </button>
                <button
                  className={`${styles.modeBtn} ${activeTemp === 75 ? styles.activeMode : ''}`}
                  onClick={() => handleTempChange(75, 'BOOST')}
                >
                  75°C Turbo
                </button>
                <button
                  className={`${styles.modeBtn} ${activeTemp === 50 ? styles.activeMode : ''}`}
                  onClick={() => handleTempChange(50, 'ECO')}
                >
                  50°C Eco
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
