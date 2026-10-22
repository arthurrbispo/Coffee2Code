import React from 'react';
import styles from './CtaModal.module.css';

export function CtaModal({ isOpen, isSubmitted, formData, onClose, onChange, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        
        {!isSubmitted ? (
          <>
            <h2>Garantir Coffee2Code</h2>
            <p>Garanta sua caneca no Lote Early Access por <strong>R$ 179,00</strong>.</p>
            <form onSubmit={onSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={onChange}
                  placeholder="Dev Silva"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">E-mail corporativo ou pessoal</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={onChange}
                  placeholder="dev@empresa.com"
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Confirmar Reserva Fictícia
              </button>
            </form>
          </>
        ) : (
          <div className={styles.success}>
            <span className={styles.terminalBadge}>Status: 200 OK</span>
            <h2>Reserva Confirmada!</h2>
            <p>Parabéns, {formData.name}! Enviamos a confirmação simulada para <strong>{formData.email}</strong>.</p>
            <button className={styles.submitBtn} onClick={onClose}>Fechar</button>
          </div>
        )}
      </div>
    </div>
  );
}
