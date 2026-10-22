import React from 'react';
import { useProductViewModel } from '../viewmodels/useProductViewModel';
import { useCtaModalViewModel } from '../viewmodels/useCtaModalViewModel';

import { Hero } from './components/Hero/Hero';
import { CtaModal } from './components/CtaModal/CtaModal';

export function LandingPage() {
  const productVm = useProductViewModel();
  const ctaVm = useCtaModalViewModel();

  return (
    <main>
      <Hero onCtaClick={ctaVm.openModal} />

      <CtaModal
        isOpen={ctaVm.isOpen}
        isSubmitted={ctaVm.submitted}
        formData={ctaVm.formData}
        onClose={ctaVm.closeModal}
        onChange={ctaVm.handleChange}
        onSubmit={ctaVm.handleSubmit}
      />
    </main>
  );
}
