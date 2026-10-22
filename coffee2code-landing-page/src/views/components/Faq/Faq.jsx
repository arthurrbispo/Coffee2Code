import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import styles from './Faq.module.css';

export function Faq({
  faqs,
  allFaqsCount,
  openFaqIndex,
  toggleFaq,
  faqSearch,
  setFaqSearch,
  faqCategory,
  setFaqCategory,
}) {
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'software', label: 'Software' },
    { id: 'entrega', label: 'Entrega & Garantia' },
  ];

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>// PERGUNTAS FREQUENTES</span>
          <h2 className={styles.title}>Dúvidas? Nós respondemos em O(1)</h2>
          <p className={styles.subtitle}>
            Encontre respostas rápidas sobre a caneca Coffee2Code, compatibilidade e termos de garantia.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className={styles.filterControls}>
          <div className={styles.searchBox}>
            <Search size={18} color="#94A3B8" className={styles.searchIcon} />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Buscar por palavra-chave (ex: lava-louças, VS Code, garantia)..."
              className={styles.searchInput}
            />
            {faqSearch && (
              <button className={styles.clearSearch} onClick={() => setFaqSearch('')}>
                ✕
              </button>
            )}
          </div>

          <div className={styles.categoryPills}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.catPill} ${faqCategory === cat.id ? styles.catPillActive : ''}`}
                onClick={() => setFaqCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className={styles.faqList}>
          {faqs.length > 0 ? (
            faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.id || index} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.questionTextGroup}>
                      <span className={styles.faqCategoryBadge}>{faq.categoryLabel || 'Geral'}</span>
                      <span className={styles.questionTitle}>{faq.q}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={styles.chevronWrapper}
                    >
                      <ChevronDown size={20} color={isOpen ? '#FF5500' : '#94A3B8'} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={styles.faqAnswerWrapper}
                      >
                        <div className={styles.faqAnswer}>
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className={styles.emptyState}>
              <HelpCircle size={40} color="#94A3B8" />
              <h3>Nenhuma pergunta encontrada</h3>
              <p>Tente buscar por outro termo ou selecione a categoria "Todos".</p>
              <button
                className={styles.resetBtn}
                onClick={() => {
                  setFaqSearch('');
                  setFaqCategory('all');
                }}
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
