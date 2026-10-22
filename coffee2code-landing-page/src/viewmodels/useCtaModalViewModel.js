import { useState } from 'react';

export function useCtaModalViewModel() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Frontend Developer',
    quantity: 1,
  });
  const [errors, setErrors] = useState({});
  const [reservationCode, setReservationCode] = useState('');

  const openModal = () => {
    setIsOpen(true);
    setSubmitted(false);
    setCopied(false);
    setErrors({});
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({ name: '', email: '', role: 'Frontend Developer', quantity: 1 });
    setErrors({});
    setSubmitted(false);
    setCopied(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'O nome deve ter pelo menos 3 caracteres.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, informe seu e-mail.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Informe um e-mail válido (ex: dev@code.com).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const code = 'C2C-' + Math.floor(100000 + Math.random() * 900000);
      setReservationCode(code);
      setSubmitted(true);
    }
  };

  const copyReservationCode = () => {
    if (reservationCode) {
      navigator.clipboard.writeText(reservationCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return {
    isOpen,
    submitted,
    formData,
    errors,
    reservationCode,
    copied,
    openModal,
    closeModal,
    handleChange,
    handleSubmit,
    copyReservationCode,
  };
}
