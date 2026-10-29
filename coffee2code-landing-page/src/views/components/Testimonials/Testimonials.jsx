import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

export function Testimonials({ testimonials }) {
  return (
    <section id="depoimentos" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>// COMUNIDADE DEV</span>
          <h2 className={styles.title}>Quem usa, não troca mais</h2>
          <p className={styles.subtitle}>
            Veja o depoimento de engenheiros e líderes técnicos que já utilizam a Coffee2Code no dia a dia.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardTop}>
                <div className={styles.stars} role="img" aria-label={`${item.rating} de 5 estrelas`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFB800" color="#FFB800" aria-hidden="true" />
                  ))}
                </div>
                <span className={styles.highlightBadge}>{item.metric}</span>
              </div>

              <p className={styles.comment}>"{item.comment}"</p>

              <div className={styles.authorRow}>
                <img src={item.avatar} alt="" className={styles.avatar} />
                <div className={styles.authorInfo}>
                  <h3 className={styles.name}>{item.name}</h3>
                  <span className={styles.role}>{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
