import { useState } from 'react';

export function useCtaModalViewModel() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const openModal = () => {
    setIsOpen(true);
    setSubmitted(false);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({ name: '', email: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return {
    isOpen,
    submitted,
    formData,
    openModal,
    closeModal,
    handleChange,
    handleSubmit,
  };
}
