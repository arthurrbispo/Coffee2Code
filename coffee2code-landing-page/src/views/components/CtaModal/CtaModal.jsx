import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Mail, User, Users, Package,
  CheckCircle, Copy, Terminal, Shield
} from 'lucide-react';
import styles from './CtaModal.module.css';

export function CtaModal({
  isOpen, isSubmitted, formData, errors, reservationCode, copied,
  onClose, onChange, onSubmit, copyReservationCode,
}) {
  const overlayRef = useRef(null);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className={styles.overlay}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Formulário de reserva Coffee2Code"
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar modal">
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <>
                <div className={styles.modalHeader}>
                  <div className={styles.modalIcon}>
                    <Package size={22} color="#FF5500" />
                  </div>
                  <h2 className={styles.modalTitle}>Garantir Coffee2Code</h2>
                  <p className={styles.modalSubtitle}>
                    Lote <span className={styles.highlight}>Early Access</span> por apenas{' '}
                    <strong className={styles.price}>R$ 179,00</strong>
                  </p>
                </div>

                <div className={styles.earlyAccessBanner}>
                  <Shield size={15} color="#00FF66" />
                  <span>Frete grátis + 30 dias de teste garantido</span>
                </div>

                <form onSubmit={onSubmit} className={styles.form} noValidate>
                  <div className={styles.field}>
                    <label htmlFor="name">
                      <User size={14} /> Nome completo
                    </label>
                    <input
                      ref={firstInputRef}
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={onChange}
                      placeholder="Dev Silva"
                      className={errors.name ? styles.inputError : ''}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <motion.span
                        id="name-error"
                        className={styles.errorMsg}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.name}
                      </motion.span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">
                      <Mail size={14} /> E-mail corporativo ou pessoal
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={onChange}
                      placeholder="dev@empresa.com"
                      className={errors.email ? styles.inputError : ''}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <motion.span
                        id="email-error"
                        className={styles.errorMsg}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.email}
                      </motion.span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="role">
                      <Users size={14} /> Principal stack de atuação
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={onChange}
                      className={styles.selectInput}
                    >
                      <option value="Frontend Developer">Frontend Developer</option>
                      <option value="Backend Developer">Backend Developer</option>
                      <option value="Full Stack Developer">Full Stack Developer</option>
                      <option value="DevOps / SRE">DevOps / SRE</option>
                      <option value="Data Engineer">Data Engineer</option>
                      <option value="Tech Lead">Tech Lead</option>
                      <option value="Estudante / Iniciante">Estudante / Iniciante</option>
                    </select>
                  </div>

                  <div className={styles.orderSummary}>
                    <div className={styles.summaryRow}>
                      <span>Lote Early Access (1x caneca)</span>
                      <span>R$ 179,00</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span>Frete expresso</span>
                      <span className={styles.freeShipping}>Grátis</span>
                    </div>
                    <div className={styles.summaryDivider} />
                    <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                      <span>Total estimado</span>
                      <span>R$ 179,00</span>
                    </div>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Confirmar Reserva Fictícia
                  </button>

                  <p className={styles.disclaimer}>
                    ⚠️ Este é um projeto fictício. Nenhuma cobrança ou dado real será processado.
                  </p>
                </form>
              </>
            ) : (
              <div className={styles.success}>
                <motion.div
                  className={styles.successIcon}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <CheckCircle size={48} color="#00FF66" />
                </motion.div>

                <span className={styles.terminalBadge}>
                  <Terminal size={13} /> Status: 200 OK
                </span>

                <h2 className={styles.successTitle}>Reserva Confirmada!</h2>
                <p className={styles.successDesc}>
                  Parabéns, <strong>{formData.name}</strong>! Enviamos a confirmação simulada para{' '}
                  <strong>{formData.email}</strong>.
                </p>

                <div className={styles.reservationBox}>
                  <span className={styles.reservationLabel}>Código da reserva</span>
                  <div className={styles.reservationCodeRow}>
                    <code className={styles.reservationCode}>{reservationCode}</code>
                    <button
                      className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
                      onClick={copyReservationCode}
                    >
                      <Copy size={14} />
                      {copied ? 'Copiado!' : 'Copiar'}
                    </button>
                  </div>
                </div>

                <div className={styles.successMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Stack selecionada</span>
                    <span className={styles.metaValue}>{formData.role}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Entrega estimada</span>
                    <span className={styles.metaValue}>3-5 dias úteis</span>
                  </div>
                </div>

                <button className={styles.submitBtn} onClick={onClose}>
                  Fechar
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
