# Coffee2Code — A Caneca Dev-Proof

## Integrante
- **Arthur Bispo dos Santos**

---

## Sobre o produto

O **Coffee2Code** é um produto fictício pensado sob medida para profissionais de tecnologia e estudantes de programação. Trata-se de uma caneca inteligente equipada com sistema de aquecimento continuo via USB-C, base revestida e um display LED telemétrico integrado que traduz o nível e a temperatura do café em mensagens e alertas do ecossistema dev (como *"Café em 10% — Risco iminente de NullPointerException"*).

**Público-alvo:** Desenvolvedores de software, engenheiros de dados, estudantes de TI e entusiastas do universo da tecnologia.  
**Proposta de valor:** Prevenir interrupções no raciocínio lógico causadas por café frio e divertir a rotina de código com avisos personalizados.

---

## Jornada de construção

### Ideia inicial
A ideia surgiu a partir de uma dor universal vivenciada por quem escreve código: esquecer a xícara de café ao lado do teclado durante sessões intensas de *debugging* ou reuniões de alinhamento e encontrá-la fria minutos depois. 

Durante o *brainstorming*, consideramos outras ideias:
1. **PulseSync:** Um relógio/pulseira focado em monitorar estresse de devs durante a digitação.
2. **DevChef:** Um assistente inteligente de marmitas para quem trabalha remoto.

Optamos pelo **Coffee2Code** por permitir um tom leve, satírico e altamente identificável para a comunidade de tecnologia, facilidade na construção da identidade visual e excelentes oportunidades de microinterações na *landing page*.

---

### Pesquisa e referências
Para desenhar a experiência da *landing page*, pesquisamos referências visuais em plataformas e landing pages de produtos físicos de tecnologia (*early access/kickstarter*):
- **Estilo Visual & Cores:** Inspirado em *dark mode* de IDEs de programação (como VS Code e GitHub), com contraste marcante utilizando o Azul Noturno (`#0B1E3F`) de fundo, o Laranja Vibrante (`#FF5500`) nos botões de ação (CTAs) e o Verde Terminal (`#00FF66`) nos detalhes.
- **Tipografia:** Uso de fontes *Sans-serif* para leitura fluida dos textos e fontes *Monospace* (*Fira Code*) para os componentes de simulação de terminal e indicadores.

---

### Ferramentas utilizadas
- **React:** Biblioteca principal para criação da interface baseada em componentes.
- **Vite:** *Bundler* e ambiente de desenvolvimento rápido client-side.
- **CSS Modules:** Modularização de estilos por componente, garantindo isolamento sem vazamento de regras CSS.
- **VS Code / OpenCode:** Ambiente de desenvolvimento para codificação e estruturação dos arquivos.
- **Git & GitHub:** Controle de versão e hospedagem do repositório público do projeto.

---

### Uso de IA

#### Modelos utilizados:
- **GPT-5.4**

#### Como a IA auxiliou na construção:
1. **Definição da Ideia e Copywriting:** A IA auxiliou a transformar o conceito inicial em uma proposta de produto coesa, refinando as chamadas de texto, diferenciais técnicos mockados e depoimentos.
2. **Estrutura Arquitetural (MVVM):** A IA ajudou a separar a camada de visualização (Views) da camada de dados e estados (*ViewModels* com *Custom Hooks* do React), garantindo a fidelidade às boas práticas exigidas.
3. **Criação do Modal de CTA:** A IA gerou a lógica do estado de abertura, formulário e tela de confirmação simulada (*Status: 200 OK*) para a Call to Action da oferta.

#### Ajustes e Decisões:
- **Mantido:** A paleta de cores escura com contraste em laranja e os nomes cômicos das mensagens de erro do display LED.
- **Alterado/Refinado:** A organização dos arquivos e componentes foi reestruturada para garantir que os estilos CSS fossem 100% isolados via CSS Modules (`.module.css`).
- **Descartado:** Sugestões de uso de bibliotecas de componentes externas (Tailwind, Bootstrap, MUI) para manter o projeto alinhado aos pré-requisitos de CSS puro e modularizado apresentados em aula.

---

### Evolução da solução

- **Versão Inicial** Uma página simples apresentando apenas fotos conceituais de uma caneca com uma lista estática de benefícios.
- **Evolução Arquitetural:** Transição para o padrão **MVVM**, isolando a lógica do formulário do CTA em um hook separado (`useCtaModalViewModel`) e a lógica de negócios/mocks em (`useProductViewModel`).
- **Refinamento de Interatividade:** Adição do modal interativo ao clicar em "Garantir Lote Limitado", simulando o preenchimento de dados de reserva fictícia e retornando um *feedback* visual simulando uma requisição HTTP bem-sucedida.

---

### Resultado final

Avaliamos o resultado final como extremamente positivo. A *landing page* atingiu 100% dos requisitos solicitados (Hero section, diferenciais, simulação visual, depoimentos, oferta, FAQ e CTA interativo), mantendo o código limpo, escalável e bem organizado arquiteturalmente com MVVM e CSS Modules.

**O que faríamos diferente com mais tempo:**
- Adicionar animações CSS/Framermotion no *mockup* da caneca para alterar o nível de café e o texto do LED em tempo real à medida que o usuário rola a página.
- Adicionar seletores de temas de cor do LED no próprio card de oferta.
