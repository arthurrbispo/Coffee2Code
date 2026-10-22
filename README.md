# ☕ Coffee2Code — A Caneca Dev-Proof

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-EE4C2C?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![CSS Modules](https://img.shields.io/badge/CSS_Modules-Isolamento_total-CC00FF?style=flat-square)](https://cssmodules.org/)
[![License](https://img.shields.io/badge/Licença-MIT-green?style=flat-square)](#-licença)

> Landing page interativa de um **produto fictício** de hardware para devs: uma caneca inteligente com aquecimento USB-C, display OLED telemétrico e alertas em tempo real do ecossistema de programação.

**Integrante:** **Arthur Bispo dos Santos**

---

## 📑 Sumário

- [Sobre o produto](#-sobre-o-produto)
- [Capturas de tela](#-capturas-de-tela)
- [Como executar](#-como-executar)
- [Arquitetura & Estrutura de Pastas](#-arquitetura--estrutura-de-pastas)
- [Stack Tecnológica](#-stack-tecnológica)
- [Funcionalidades](#-funcionalidades)
- [Identidade Visual & Design Tokens](#-identidade-visual--design-tokens)
- [Jornada de Construção](#-jornada-de-construção)
  - [Ideia inicial](#-ideia-inicial)
  - [Pesquisa e referências](#-pesquisa-e-referências)
  - [Ferramentas utilizadas](#-ferramentas-utilizadas)
  - [Uso de IA](#-uso-de-ia)
  - [Evolução da solução](#-evolução-da-solução)
  - [Resultado final](#-resultado-final)
- [Melhorias futuras](#-melhorias-futuras)
- [Licença](#-licença)

---

## ☕ Sobre o produto

O **Coffee2Code** é um produto fictício pensado sob medida para profissionais de tecnologia e estudantes de programação. Trata-se de uma caneca inteligente equipada com sistema de aquecimento contínuo via USB-C, base revestida e um display LED telemétrico integrado que traduz o nível e a temperatura do café em mensagens e alertas do ecossistema dev (como _"Café em 10% — Risco iminente de NullPointerException"_).

| | |
|---|---|
| **Público-alvo** | Desenvolvedores de software, engenheiros de dados, estudantes de TI e entusiastas do universo da tecnologia. |
| **Proposta de valor** | Prevenir interrupções no raciocínio lógico causadas por café frio e divertir a rotina de código com avisos personalizados. |
| **Natureza** | Projeto fictício e acadêmico — nenhum pagamento ou dado real é processado. |

---

## 📸 Capturas de tela

> _Em breve — adicione prints da landing page na pasta `/docs` ou `/public` e referencie-os aqui._

---

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) **18+**
- [npm](https://www.npmjs.com/) (ou yarn/pnpm)
- [Git](https://git-scm.com/)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/arthurrbispo/Coffee2Code.git
cd Coffee2Code/coffee2code-landing-page

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em **http://localhost:5173**.

### Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Sobe o servidor de desenvolvimento com HMR (_Hot Module Replacement_). |
| `npm run build` | Gera o build de produção otimizado na pasta `dist/`. |
| `npm run preview` | Inicia um servidor local para visualizar o build de produção. |

---

## 🗂️ Arquitetura & Estrutura de Pastas

O projeto segue o padrão **MVVM (Model–View–ViewModel)**, separando a camada de apresentação (Views) da camada de estado e regras de negócio (ViewModels implementados como **Custom Hooks** do React). Isso mantém os componentes leves, focados em UI e fáceis de testar/isolar.

```
coffee2code-landing-page/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                        # Entry point da aplicação
    ├── App.jsx                         # Raiz — renderiza a LandingPage
    ├── index.css                       # Reset global + design tokens (CSS Variables)
    │
    ├── viewmodels/                     # 🧠 Camada ViewModel (estado + lógica)
    │   ├── useProductViewModel.js      # Dados do produto, FAQ, simulador da caneca
    │   └── useCtaModalViewModel.js     # Estado, validação e fluxo do modal de CTA
    │
    └── views/                          # 👁️ Camada View (apresentação)
        ├── LandingPage.jsx             # Composição das seções + wiring dos ViewModels
        └── components/
            ├── Navbar/                 # Barra de navegação fixa
            ├── Hero/                   # Hero section com mockup interativo da caneca
            ├── Features/               # Diferenciais do produto
            ├── InteractiveMug/         # Playground de telemetria (simulador)
            ├── Testimonials/           # Depoimentos de devs
            ├── Faq/                    # FAQ com busca e categorias
            ├── CtaModal/               # Modal de reserva fictícia
            └── Footer/                 # Rodapé
```

Cada componente possui seu próprio arquivo `NomeComponente.module.css`, garantindo **isolamento total das regras CSS** (sem vazamento de estilos entre componentes).

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Uso no projeto |
|---|---|---|
| [React](https://react.dev/) | ^18.3 | Biblioteca UI, componentes funcionais e Hooks. |
| [Vite](https://vitejs.dev/) | ^5.4 | Bundler e dev server ultrarrápido (ESM nativo). |
| [Framer Motion](https://www.framer.com/motion/) | ^14.6 | Animações declarativas (entrada de seções, modal, flutuação da caneca, vapor). |
| [Lucide React](https://lucide.dev/) | ^1.61 | Ícones SVG leves e consistentes. |
| **CSS Modules** | — | Estilos encapsulados por componente (`*.module.css`). |
| [Google Fonts](https://fonts.google.com/) | — | Tipografia: **Inter** (texto) e **Fira Code** (mono/terminal). |

---

## ✨ Funcionalidades

- **Hero Section interativa** — mockup animado da caneca com vapor em CSS e seletor de modos de temperatura (`Dev Hot`, `Turbo`, `Eco`) que atualiza o display OLED em tempo real.
- **Playground de Telemetria** — simulador completo onde o usuário pode:
  - regular a temperatura (40 °C a 85 °C) e o nível fictício de café;
  - alternar o status do sistema (`NOMINAL`, `BOOST`, `ECO`, `OFF`);
  - aplicar presets de mensagem no display OLED (`DEBUG_MODE`, `SPRINT_REVIEW`, `NIGHT_SHIFT`, `LOW_COFFEE`) ou digitar mensagens customizadas;
  - acompanhar o "webhook" JSON emitido pelo dispositivo em tempo real.
- **FAQ dinâmico** — busca por texto livre e filtro por categoria (`Hardware`, `Software`, `Entrega & Garantia`), com acordeão animado.
- **Modal de CTA (Call to Action)** — formulário de reserva fictícia com validação em tempo real (nome e e-mail), resumo do pedido, geração de código de reserva aleatório (`C2C-XXXXXX`) e botão de copiar para a área de transferência. Acessível por `Esc`, clique no overlay e com bloqueio de scroll do body enquanto aberto.
- **Depoimentos** — cards com avatares, notas e métricas cômicas de produtividade.
- **Responsividade** — layout adaptado a mobile, tablet e desktop.
- **Acessibilidade** — atributos `aria-*` no modal (`role="dialog"`, `aria-modal`), foco automático no primeiro input e feedback de erros associado aos campos.

---

## 🎨 Identidade Visual & Design Tokens

A estética foi inspirada no **dark mode** de IDEs e ferramentas de desenvolvimento (VS Code, GitHub, terminais), reforçando a conexão direta com o público-alvo dev.

| Token | Cor | Uso |
|---|---|---|
| `--color-bg` | `#090D16` | Fundo principal (Azul Noturno profundo). |
| `--color-primary` | `#FF5500` | CTAs, destaques e brilhos (Laranja Vibrante). |
| `--color-terminal` | `#00FF66` | Textos de terminal, status e confirmações (Verde Terminal). |
| `--color-secondary` | `#00D2FF` | Acentos e detalhes secundários (Ciano). |
| `--color-text` | `#F0F4F8` | Texto principal. |
| `--color-text-muted` | `#94A3B8` | Texto secundário / descrições. |

**Tipografia:**
- **Inter** — títulos e corpo de texto, garantindo leitura fluida em dark mode.
- **Fira Code** — usada em badges, displays OLED, blocos de terminal e indicadores, evocando o ambiente de programação.

---

## 🧭 Jornada de Construção

### 💡 Ideia inicial

A ideia surgiu a partir de uma dor universal vivenciada por quem escreve código: esquecer a xícara de café ao lado do teclado durante sessões intensas de _debugging_ ou reuniões de alinhamento e encontrá-la fria minutos depois.

Durante o _brainstorming_, consideramos outras ideias:

1. **PulseSync:** um relógio/pulseira focado em monitorar estresse de devs durante a digitação.
2. **DevChef:** um assistente inteligente de marmitas para quem trabalha remoto.

Optamos pelo **Coffee2Code** por permitir um tom leve, satírico e altamente identificável para a comunidade de tecnologia, facilidade na construção da identidade visual e excelentes oportunidades de microinterações na _landing page_.

### 🔍 Pesquisa e referências

Para desenhar a experiência da _landing page_, pesquisamos referências visuais em plataformas e landing pages de produtos físicos de tecnologia (_early access/kickstarter_):

- **Estilo visual & cores:** inspirado no _dark mode_ de IDEs de programação (VS Code e GitHub), com contraste marcante utilizando o Azul Noturno de fundo, o Laranja Vibrante (`#FF5500`) nos botões de ação (CTAs) e o Verde Terminal (`#00FF66`) nos detalhes.
- **Tipografia:** uso de fontes _sans-serif_ para leitura fluida dos textos e fontes _monospace_ (**Fira Code**) para os componentes de simulação de terminal e indicadores.

### 🧰 Ferramentas utilizadas

- **React** — biblioteca principal para criação da interface baseada em componentes.
- **Vite** — bundler e ambiente de desenvolvimento rápido client-side.
- **CSS Modules** — modularização de estilos por componente, garantindo isolamento sem vazamento de regras CSS.
- **Framer Motion** — animações de entrada, transições de modal e loops suaves.
- **Lucide React** — biblioteca de ícones usada em toda a interface.
- **VS Code / OpenCode** — ambiente de desenvolvimento para codificação e estruturação dos arquivos.
- **Git & GitHub** — controle de versão e hospedagem do repositório público do projeto.

### 🤖 Uso de IA

#### Modelos utilizados:

- **GPT-5.4**

#### Como a IA auxiliou na construção:

1. **Definição da Ideia e Copywriting:** a IA auxiliou a transformar o conceito inicial em uma proposta de produto coesa, refinando as chamadas de texto, diferenciais técnicos mockados e depoimentos.
2. **Estrutura Arquitetural (MVVM):** a IA ajudou a separar a camada de visualização (_Views_) da camada de dados e estados (_ViewModels_ com _Custom Hooks_ do React), garantindo a fidelidade às boas práticas exigidas.
3. **Criação do Modal de CTA:** a IA gerou a lógica do estado de abertura, formulário e tela de confirmação simulada (_Status: 200 OK_) para a _Call to Action_ da oferta.

#### Ajustes e Decisões:

- **Mantido:** a paleta de cores escura com contraste em laranja e os nomes cômicos das mensagens de erro do display LED.
- **Alterado/Refinado:** a organização dos arquivos e componentes foi reestruturada para garantir que os estilos CSS fossem 100% isolados via CSS Modules (`.module.css`).
- **Descartado:** sugestões de uso de bibliotecas de componentes externas (Tailwind, Bootstrap, MUI) para manter o projeto alinhado aos pré-requisitos de CSS puro e modularizado apresentados em aula.

### 📈 Evolução da solução

- **Versão Inicial:** uma página simples apresentando apenas fotos conceituais de uma caneca com uma lista estática de benefícios.
- **Evolução Arquitetural:** transição para o padrão **MVVM**, isolando a lógica do formulário do CTA em um hook separado (`useCtaModalViewModel`) e a lógica de negócios/mocks em (`useProductViewModel`).
- **Refinamento de Interatividade:** adição do modal interativo ao clicar em "Garantir Lote Limitado", simulando o preenchimento de dados de reserva fictícia e retornando um _feedback_ visual simulando uma requisição HTTP bem-sucedida. Inclusão do simulador de telemetria interativo e FAQ com busca/categorias.

### 🏆 Resultado final

Avaliamos o resultado final como extremamente positivo. A _landing page_ atingiu 100% dos requisitos solicitados (Hero section, diferenciais, simulação visual, depoimentos, oferta, FAQ e CTA interativo), mantendo o código limpo, escalável e bem organizado arquiteturalmente com MVVM e CSS Modules.

---

## 🔮 Melhorias futuras

Com mais tempo, gostaríamos de implementar:

- Animações com **Framer Motion** no _mockup_ da caneca para alterar o nível de café e o texto do LED em tempo real à medida que o usuário rola a página (_scroll-linked animation_).
- Seletores de temas de cor do LED no próprio card de oferta.
- Persistência da reserva fictícia via `localStorage`.
- Testes unitários dos _ViewModels_ com Vitest e testes de componente com React Testing Library.
- Integração com um backend real (ou serverless) para captura de _leads_ do Early Access.

---

## 📄 Licença

Este projeto é de natureza **fictícia e acadêmica**, desenvolvido para estudo de Front-end moderno (React + Vite + MVVM + CSS Modules). Não representa um produto comercial real.

Desenvolvido com ☕ por **Arthur Bispo dos Santos**.
