import { useState, useMemo } from 'react';

export function useProductViewModel() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [faqSearch, setFaqSearch] = useState('');
  const [faqCategory, setFaqCategory] = useState('all');

  // Interactive mug simulator state
  const [mugTemp, setMugTemp] = useState(65);
  const [mugStatus, setMugStatus] = useState('NOMINAL');
  const [coffeeLevel, setCoffeeLevel] = useState(92);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const benefits = [
    {
      id: 'usbc',
      title: 'Aquecimento USB-C Integrado',
      tag: 'Hardware High-Tech',
      desc: 'Mantém seu café em exatos 65°C por horas durante longas sessões de debugging.',
      detail: 'Compatível com Power Delivery de 65W ou operação autônoma via bateria interna.',
    },
    {
      id: 'led',
      title: 'Display LED Telemétrico',
      tag: 'Interface OLED',
      desc: 'Exibe alertas em tempo real no display: "Café em 10% — Risco de NullPointerException".',
      detail: 'Notificações customizáveis via WebSockets e plugins para VS Code e JetBrains.',
    },
    {
      id: 'anti-bug',
      title: 'Estrutura Anti-Bug',
      tag: 'Build Premium',
      desc: 'Cerâmica de borossilicato reforçada com base antiderrapante em silicone para proteção da sua mesa.',
      detail: 'Isolamento térmico de parede dupla com revestimento fosco resistente a riscos.',
    },
    {
      id: 'bateria',
      title: 'Autonomia Wireless',
      tag: 'Bateria Integrada',
      desc: 'Até 3 horas de aquecimento inteligente sem nenhum cabo conectado.',
      detail: 'Carregamento rápido magnético: de 0% a 100% em apenas 20 minutos.',
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Lucas M.',
      role: 'Dev Full Stack',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
      comment: 'Minha taxa de commits aumentou 40% depois que parei de me levantar para esquentar café. A integração com VS Code é sensacional!',
      rating: 5,
      metric: '+40% produtividade'
    },
    {
      id: 2,
      name: 'Camila R.',
      role: 'Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
      comment: 'O alerta de café baixo me salvou antes das reuniões de alinhamento. Design incrível e acabamento impecável.',
      rating: 5,
      metric: 'Zero café frio'
    },
    {
      id: 3,
      name: 'Gabriel V.',
      role: 'Backend Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      comment: 'Configurei um Webhook no GitHub Actions para esquentar o café quando a pipeline de deploy dá sucesso. Genial!',
      rating: 5,
      metric: 'CI/CD Connected'
    }
  ];

  const rawFaqs = [
    {
      id: 1,
      category: 'hardware',
      categoryLabel: 'Hardware',
      q: 'É lavável na lava-louças?',
      a: 'Possui proteção IP67 na carcaça selada de alumínio e cerâmica. Recomendamos lavar manualmente a base mantendo o conector limpo.',
    },
    {
      id: 2,
      category: 'hardware',
      categoryLabel: 'Hardware',
      q: 'Funciona sem o cabo USB conectado?',
      a: 'Sim! A bateria interna mantém a temperatura regulada por até 3 horas contínuas fora do cabo USB-C.',
    },
    {
      id: 3,
      category: 'software',
      categoryLabel: 'Software',
      q: 'O texto do display é editável?',
      a: 'Sim, via aplicativo leve para desktop (Windows, macOS e Linux) conectado via USB ou Bluetooth Low Energy.',
    },
    {
      id: 4,
      category: 'software',
      categoryLabel: 'Software',
      q: 'Existe integração com IDEs como VS Code?',
      a: 'Sim! Lançamos uma extensão oficial no VS Code e JetBrains que envia alertas de build e café fraco direto na tela OLED.',
    },
    {
      id: 5,
      category: 'entrega',
      categoryLabel: 'Entrega & Garantia',
      q: 'Qual o prazo de entrega do lote Early Access?',
      a: 'Os pedidos confirmados no Lote Early Access possuem frete expresso com entrega estimada entre 3 a 5 dias úteis.',
    },
    {
      id: 6,
      category: 'entrega',
      categoryLabel: 'Entrega & Garantia',
      q: 'Qual a garantia da Coffee2Code?',
      a: 'Oferecemos 2 anos de garantia contra defeitos de fabricação e 30 dias de teste garantido com devolução simplificada.',
    }
  ];

  const faqs = useMemo(() => {
    return rawFaqs.filter((faq) => {
      const matchesSearch =
        faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
        faq.a.toLowerCase().includes(faqSearch.toLowerCase());
      const matchesCat = faqCategory === 'all' || faq.category === faqCategory;
      return matchesSearch && matchesCat;
    });
  }, [faqSearch, faqCategory]);

  return {
    benefits,
    testimonials,
    faqs,
    allFaqsCount: rawFaqs.length,
    openFaqIndex,
    toggleFaq,
    faqSearch,
    setFaqSearch,
    faqCategory,
    setFaqCategory,
    mugTemp,
    setMugTemp,
    mugStatus,
    setMugStatus,
    coffeeLevel,
    setCoffeeLevel
  };
}
