import React, { useState, useEffect } from 'react';
import bannerImg from '../assets/fotoprincipal.png';
import sobreImg from '../assets/segundaimagem.png';
import appImg from '../assets/app.png';
import espaco from '../assets/espaço.png';
import espaco1 from '../assets/espaço1.png';
import espaco2 from '../assets/espaço2.png';

import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

function NossoEspacoSection() {
  const imagens = [
    { src: espaco, titulo: 'Área de Musculação', texto: 'Equipamentos de última geração.' },
    { src: espaco1, titulo: 'Espaço Funcional', texto: 'Treinos dinâmicos e intensos.' },
    { src: espaco2, titulo: 'Ambiente Premium', texto: 'Conforto, energia e foco total.' },
  ];
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAtual((prev) => (prev + 1) % imagens.length);
    }, 7000);
    return () => clearTimeout(timer);
  }, [atual, imagens.length]);

  const avancar = () => setAtual((prev) => (prev + 1) % imagens.length);
  const voltar = () => setAtual((prev) => (prev - 1 + imagens.length) % imagens.length);

  return (
    <section
      id="nosso-espaco-section"
      data-reveal="fade-up"
      style={{
        width: '100%',
        background: 'var(--bg)',
        padding: '72px 0 56px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2 style={{ color: 'var(--accent)', fontWeight: 900, fontSize: 44, marginBottom: 28, textTransform: 'uppercase', letterSpacing: 1, textAlign: 'center' }}>
        Nosso Espaço
      </h2>
      <div className="space-carousel-wrap" data-reveal="zoom-in">
        <img
          src={imagens[atual].src}
          alt={imagens[atual].titulo}
          className="space-carousel-img"
        />
        {/* overlay escuro suave na base */}
        <div className="space-carousel-overlay" />
        {/* setas sobrepostas */}
        <button className="space-carousel-btn space-carousel-btn--left" onClick={voltar} aria-label="Imagem anterior">
          &#8592;
        </button>
        <button className="space-carousel-btn space-carousel-btn--right" onClick={avancar} aria-label="Próxima imagem">
          &#8594;
        </button>
        {/* dots */}
        <div className="space-carousel-dots">
          {imagens.map((_, i) => (
            <button
              key={i}
              className={`space-carousel-dot${i === atual ? ' active' : ''}`}
              onClick={() => setAtual(i)}
              aria-label={`Ir para foto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SobreSection() {
  return (
    <section
      data-reveal="fade-up"
      style={{
        width: '100%',
        minHeight: '420px',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginTop: 0,
        marginBottom: 0,
      }}
    >
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '48px 6vw',
        color: 'var(--text)',
        zIndex: 2,
      }}>
        <h2 style={{ color: 'var(--accent)', fontWeight: 900, fontSize: 36, marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1 }}>
         Transforme seu potencial em resultados!
        </h2>
        <p style={{ fontSize: 20, marginBottom: 0, lineHeight: 1.5 }}>
          No Brabus Fit American, você encontra equipamentos<b>de última geração</b>, treinadores certificados e um ambiente motivador projetado para elevar sua performance.<br /><br />
          Seja você iniciante ou atleta experiente, aqui sua meta é nossa missão.<br /><br />
          <b>Aberta para todas as pessoas - Do iniciante ao avançado e do jovem a melhor idade.</b>
        </p>
      </div>
      <div style={{
        flex: 1.2,
        position: 'relative',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        minHeight: '420px',
      }}>
        <img src={sobreImg} alt="Academia" data-reveal="zoom-in" style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          filter: 'brightness(0.7)',
        }} />
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to left, #000 20%, rgba(0,0,0,0.1) 80%)',
          zIndex: 1,
        }}></div>
      </div>
    </section>
  );
}

function AppDownloadSection() {
  return (
    <section
      data-reveal="fade-up"
      style={{
        width: '100%',
        minHeight: '420px',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '64px 0',
      }}
    >
      <a href="https://play.google.com/store/apps/details?id=br.com.w12.brabusfit&hl=pt_BR" target="_blank" rel="noopener noreferrer" style={{display: 'block'}}>
        <img src={appImg} alt="Baixe nosso aplicativo Brabus Fit" data-reveal="zoom-in" style={{
          maxWidth: '1100px',
          width: '100%',
          borderRadius: 16,
          boxShadow: '0 12px 40px rgba(0,0,0,0.45)',
          margin: '0 auto',
          display: 'block',
          cursor: 'pointer',
        }} />
      </a>
    </section>
  );
}

function PlanosSection() {
  return (
    <section
      id="planos-section"
      data-reveal="fade-up"
      style={{
        width: '100%',
        minHeight: '420px',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '72px 0',
      }}
    >
      <h2 style={{ color: 'var(--accent)', fontWeight: 900, fontSize: 36, marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1, textAlign: 'center' }}>
        Planos e Preços
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: 20, marginBottom: 32, lineHeight: 1.5, textAlign: 'center' }}>
        Escolha o plano ideal para você e venha treinar na melhor academia!
      </p>
      <div className="plans-grid">
        <div data-reveal="fade-up" className="plan-card">
          <h3>Plano Bronze</h3>
          <p style={{ fontSize: 18, marginBottom: 18 }}>Acesso livre a toda a academia</p>
          <span style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 8 }}>R$ 99,90</span>
          <button className="plan-btn">Assinar</button>
        </div>
        <div data-reveal="fade-up" className="plan-card plan-card--featured">
          <div className="plan-badge">MAIS POPULAR</div>
          <h3>Plano Gold</h3>
          <p style={{ fontSize: 18, marginBottom: 18 }}>Economize mais treinando 3 meses</p>
          <span style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 8 }}>R$ 269,90</span>
          <button className="plan-btn plan-btn--featured">Assinar</button>
        </div>
        <div data-reveal="fade-up" className="plan-card">
          <h3>Plano Elite</h3>
          <p style={{ fontSize: 18, marginBottom: 18 }}>Treine o ano todo com o melhor custo-benefício</p>
          <span style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 8 }}>R$ 899,90</span>
          <button className="plan-btn">Assinar</button>
        </div>
      </div>
    </section>
  );
}

function ImpactoSection() {
  const stats = [
    { valor: 800, sufixo: '+', label: 'Alunos ativos' },
    { valor: 12, sufixo: '+', label: 'Anos de mercado' },
    { valor: 15, sufixo: '+', label: 'Profissionais certificados' },
  ];

  return (
    <section className="impact-section" data-reveal="fade-up">
      <h2>Resultados que provam</h2>
      <div className="impact-grid">
        {stats.map((item) => (
          <div className="impact-card" key={item.label}>
            <span className="impact-number" data-count={item.valor} data-suffix={item.sufixo}>0</span>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const depoimentos = [
    { nome: 'João Silva', texto: 'Melhor academia da cidade. Ambiente incrível!' },
    { nome: 'Mariana Costa', texto: 'Treinos intensos e resultados reais. Recomendo demais.' },
    { nome: 'Carlos Souza', texto: 'Estrutura premium e equipe extremamente atenciosa.' },
  ];
  const loop = [...depoimentos, ...depoimentos];

  return (
    <section className="testimonials-section" data-reveal="fade-up">
      <h2>O que nossos alunos dizem</h2>
      <div className="testimonials-track">
        {loop.map((item, index) => (
          <div className="testimonial-card" key={`${item.nome}-${index}`}>
            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <p>"{item.texto}"</p>
            <span>– {item.nome}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 32,
      right: 32,
      zIndex: 1000,
    }}>
      <button style={{
        background: '#25D366',
        border: 'none',
        borderRadius: '50%',
        width: 64,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px #0006',
        cursor: 'pointer',
      }}>
        <FaWhatsapp size={36} color="#fff" />
      </button>
    </div>
  );
}

function HeroSection() {
  const scrollToPlanos = () => {
    const planosSection = document.getElementById('planos-section');
    if (planosSection) {
      planosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.body.style.maxWidth = '100vw';
    return () => {
      document.body.style.overflowX = '';
      document.body.style.maxWidth = '';
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector('.header');
    if (header) {
      header.classList.add('header--overlay');
    }
    return () => {
      if (header) {
        header.classList.remove('header--overlay');
      }
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector('.header');
    if (!header) return undefined;
    const onScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!elements.length) return undefined;
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-parallax]'));
    if (!elements.length) return undefined;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const speed = Number(el.getAttribute('data-parallax')) || 0.15;
          const offset = (scrollY + rect.top) * speed;
          el.style.transform = `translateY(${offset * 0.03}px) scale(1.02)`;
        });
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const counters = Array.from(document.querySelectorAll('[data-count]'));
    if (!counters.length) return undefined;
    const animate = (el) => {
      const target = Number(el.getAttribute('data-count')) || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const start = 0;
      const duration = 1200;
      const startTime = performance.now();
      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(start + (target - start) * progress);
        el.textContent = `${value}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section
        className="banner-section"
        style={{ background: `url(${bannerImg}) center/cover no-repeat` }}
      >
        <div className="banner-overlay"></div>
        <div className="banner-content" data-reveal="fade-up">
          <h1 className="hero-title">TREINE COMO UM CAMPEÃO.</h1>
          <p className="hero-subtitle hero-subtitle--small">Alta performance. Estrutura premium. Resultados reais.</p>
          <button className="hero-btn" onClick={scrollToPlanos}>
            MATRICULE-SE AGORA
            <FaArrowRight style={{marginLeft: 10, fontSize: 18}} />
          </button>
        </div>
      </section>
      <WhatsAppButton />
      <NossoEspacoSection />
      <SobreSection />
      <ImpactoSection />
      <TestimonialsSection />
      <PlanosSection />
      <AppDownloadSection />
    </>
  );
}

export default HeroSection;
 
