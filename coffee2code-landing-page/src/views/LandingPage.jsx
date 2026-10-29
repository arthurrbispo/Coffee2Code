import React from 'react';
import { useProductViewModel } from '../viewmodels/useProductViewModel';
import { useCtaModalViewModel } from '../viewmodels/useCtaModalViewModel';

import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { InteractiveMug } from './components/InteractiveMug/InteractiveMug';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Faq } from './components/Faq/Faq';
import { CtaModal } from './components/CtaModal/CtaModal';
import { Footer } from './components/Footer/Footer';

export function LandingPage() {
  const productVm = useProductViewModel();
  const ctaVm = useCtaModalViewModel();

  return (
    <>
      <Navbar onCtaClick={ctaVm.openModal} />

      <main id="conteudo-principal" tabIndex={-1}>
        <Hero onCtaClick={ctaVm.openModal} />

        <Features benefits={productVm.benefits} />

        <InteractiveMug
          mugTemp={productVm.mugTemp}
          setMugTemp={productVm.setMugTemp}
          mugStatus={productVm.mugStatus}
          setMugStatus={productVm.setMugStatus}
          coffeeLevel={productVm.coffeeLevel}
          setCoffeeLevel={productVm.setCoffeeLevel}
        />

        <Testimonials testimonials={productVm.testimonials} />

        <Faq
          faqs={productVm.faqs}
          allFaqsCount={productVm.allFaqsCount}
          openFaqIndex={productVm.openFaqIndex}
          toggleFaq={productVm.toggleFaq}
          faqSearch={productVm.faqSearch}
          setFaqSearch={productVm.setFaqSearch}
          faqCategory={productVm.faqCategory}
          setFaqCategory={productVm.setFaqCategory}
        />
      </main>

      <Footer onCtaClick={ctaVm.openModal} />

      <CtaModal
        isOpen={ctaVm.isOpen}
        isSubmitted={ctaVm.submitted}
        formData={ctaVm.formData}
        errors={ctaVm.errors}
        reservationCode={ctaVm.reservationCode}
        copied={ctaVm.copied}
        onClose={ctaVm.closeModal}
        onChange={ctaVm.handleChange}
        onSubmit={ctaVm.handleSubmit}
        copyReservationCode={ctaVm.copyReservationCode}
      />
    </>
  );
}
