import React from 'react';
import styles from './Hero.module.css';

export function Hero({ onCtaClick }) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.badge}>// Hardware para Desenvolvedores</span>
        <h1 className={styles.title}>A caneca que converte café em código sem bugs</h1>
        <p className={styles.subtitle}>
          Diga adeus ao café frio e aos erros em tempo de execução. O hardware feito sob medida para a sua rotina de programação.
        </p>
        <button className={styles.ctaButton} onClick={onCtaClick}>
          Garantir Lote Limitado
        </button>
      </div>
      <div className={styles.mockupContainer}>
        <div className={styles.mugMockup}>
          <div className={styles.mugLed}>CAFÉ: 98% [NOMINAL]</div>
        </div>
      </div>
    </section>
  );
}
