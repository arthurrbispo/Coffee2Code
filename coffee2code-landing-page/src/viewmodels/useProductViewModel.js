import { useState } from 'react';

export function useProductViewModel() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const benefits = [
    {
      title: 'Aquecimento USB-C Integrado',
      desc: 'Mantém seu café em exatos 65°C por horas durante longas sessões de debugging.',
    },
    {
      title: 'Display LED Telemétrico',
      desc: 'Exibe alertas em tempo real no display: "Café em 10% — Risco de NullPointerException".',
    },
    {
      title: 'Estrutura Anti-Bug',
      desc: 'Cerâmica reforçada com base antiderrapante em silicone para proteção da sua mesa.',
    },
  ];

  const testimonials = [
    {
      name: 'Lucas M.',
      role: 'Dev Full Stack',
      comment: 'Minha taxa de commits aumentou 40% depois que parei de me levantar para esquentar café.',
    },
    {
      name: 'Camila R.',
      role: 'Tech Lead',
      comment: 'O alerta de café baixo me salvou antes das reuniões de alinhamento. Excelente!',
    },
  ];

  const faqs = [
    {
      q: 'É lavável na lava-louças?',
      a: 'Possui proteção IP67 na carcaça. Recomendamos lavar manualmente a base de energia.',
    },
    {
      q: 'Funciona sem o cabo USB conectado?',
      a: 'Sim, a bateria interna mantém a temperatura por até 2 horas fora do cabo.',
    },
    {
      q: 'O texto do display é editável?',
      a: 'Sim, via aplicativo leve para desktop conectado via USB.',
    },
  ];

  return {
    benefits,
    testimonials,
    faqs,
    openFaqIndex,
    toggleFaq,
  };
}
