# 🏋️ BrabusFit American — Site Oficial

Site institucional moderno e responsivo da academia **BrabusFit American**, desenvolvido em **React.js** com design premium no estilo agência high ticket.

---

## 📌 Sobre o Projeto

O **BrabusFit American** é um centro de treinamento completo localizado ao lado da Av. Giovanni Gronchi, em São Paulo. Este site foi criado para apresentar a academia de forma profissional, atrair novos alunos e facilitar o contato e a matrícula online.

O projeto foi desenvolvido do zero com foco em:
- Design moderno, clean e impactante
- Experiência do usuário (UX) de alta qualidade
- Animações suaves e efeitos visuais premium
- Layout 100% responsivo para celular e desktop

---

## 🚀 Funcionalidades

- **Hero com imagem de fundo** e chamada emocional para conversão
- **Menu com glass effect** (blur) e mudança visual ao rolar a página
- **Carrossel de imagens** — "Nosso Espaço" com troca automática e setas sobrepostas
- **Seção Sobre** — texto + imagem lado a lado com overlay
- **Números animados** — contadores que sobem ao rolar (800+ alunos, 12+ anos, 15+ profissionais)
- **Depoimentos** — carrossel automático com avaliações dos alunos
- **Planos e Preços** — cards Bronze, Gold e Elite com destaque no plano principal
- **Download do App** — banner de download do aplicativo oficial
- **Localização** — mapa integrado com Google Maps
- **Footer premium** — contato, links rápidos, redes sociais e horários de funcionamento
- **Botão WhatsApp fixo** — flutuante para contato rápido
- **Micro animações** — fade-in e zoom ao rolar a página
- **Scroll suave** entre seções

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| [React.js](https://reactjs.org/) | Biblioteca principal de interface |
| [React Router DOM](https://reactrouter.com/) | Navegação entre páginas |
| [React Icons](https://react-icons.github.io/react-icons/) | Ícones modernos |
| CSS Variáveis | Paleta de cores centralizada e fácil de editar |
| IntersectionObserver API | Animações de scroll sem bibliotecas externas |

---

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Imagens da academia
├── components/
│   ├── Header.jsx    # Menu de navegação com glass effect
│   ├── HeroSection.jsx # Hero, carrossel, planos, depoimentos, impacto
│   ├── Location.jsx  # Seção de localização com mapa
│   ├── Footer.jsx    # Rodapé completo
│   └── Logo.jsx      # Componente de logo
├── pages/
│   ├── Home.jsx
│   ├── GradeAulas.jsx
│   ├── Nutricao.jsx
│   ├── Suplementos.jsx
│   ├── NossoEspaco.jsx
│   ├── Planos.jsx
│   └── Contato.jsx
├── App.js            # Rotas principais
├── App.css           # Estilos globais e variáveis CSS
└── index.js          # Ponto de entrada
```

---

## ▶️ Como Rodar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 16+)
- npm

### Passos

```bash
# Clone o repositório
git clone https://github.com/KaiqueSuzart/site-academia-.git

# Entre na pasta do projeto
cd site-academia-

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `/build`.

---

## 📞 Contato

**BrabusFit American**
- 📍 Ao lado da Av. Giovanni Gronchi — São Paulo/SP
- 📱 (11) 9999-9999
- 🌐 [App disponível na Play Store](https://play.google.com/store/apps/details?id=br.com.w12.brabusfit&hl=pt_BR)

---

> Desenvolvido com 💪 para a BrabusFit American
