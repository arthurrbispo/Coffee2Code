import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, ShieldCheck, BatteryCharging } from 'lucide-react';
import styles from './Features.module.css';

export function Features({ benefits }) {
  const iconMap = {
    usbc: <Zap size={24} color="#FF5500" aria-hidden="true" />,
    led: <Cpu size={24} color="#00D2FF" aria-hidden="true" />,
    'anti-bug': <ShieldCheck size={24} color="#00FF66" aria-hidden="true" />,
    bateria: <BatteryCharging size={24} color="#FFB800" aria-hidden="true" />,
  };

  return (
    <section id="beneficios" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>// RECURSOS AVANÇADOS</span>
          <h2 className={styles.sectionTitle}>
            Projetada para suportar suas maratonas de código
          </h2>
          <p className={styles.sectionSubtitle}>
            Esqueça o café requentado no micro-ondas. Conheça as tecnologias embarcadas na Coffee2Code.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  {iconMap[benefit.id] || <Zap size={24} color="#FF5500" aria-hidden="true" />}
                </div>
                <span className={styles.tag}>{benefit.tag}</span>
              </div>

              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDesc}>{benefit.desc}</p>

              <div className={styles.cardDetail}>
                <span>{benefit.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
