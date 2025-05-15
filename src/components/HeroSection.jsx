import React, { useState, useEffect } from 'react';
import bannerImg from '../assets/fotoprincipal.png';
import sobreImg from '../assets/segundaimagem.png';
import appImg from '../assets/app.png';
import espaco from '../assets/espaço.png';
import espaco1 from '../assets/espaço1.png';
import espaco2 from '../assets/espaço2.png';

import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const bannerStyle = {
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  height: '100vh',
  background: `url(${bannerImg}) center/cover no-repeat`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  overflowX: 'hidden',
  maxWidth: '100vw',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(20, 20, 25, 0.7)',
  zIndex: 1,
};

const contentStyle = {
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  color: '#fff',
  width: '100%',
  maxWidth: 900,
  margin: '0 auto',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
};

function NossoEspacoSection() {
  const imagens = [espaco, espaco1, espaco2];
  const [atual, setAtual] = useState(0);

  // Avança automaticamente a cada 4 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setAtual((prev) => (prev + 1) % imagens.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [atual, imagens.length]);

  const avancar = () => setAtual((prev) => (prev + 1) % imagens.length);
  const voltar = () => setAtual((prev) => (prev - 1 + imagens.length) % imagens.length);

  return (
    <section id="nosso-espaco-section" style={{
      width: '100%',
      background: '#000',
      padding: '48px 0 32px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h2 style={{ color: '#D32F2F', fontWeight: 900, fontSize: 44, marginBottom: 32, textTransform: 'uppercase', letterSpacing: 1, textAlign: 'center' }}>
        Nosso Espaço
      </h2>
      <div style={{ position: 'relative', width: '90vw', maxWidth: 1400, height: 520, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={voltar} style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(24,24,24,0.7)',
          border: 'none',
          color: '#fff',
          fontSize: 48,
          borderRadius: '50%',
          width: 64,
          height: 64,
          cursor: 'pointer',
          zIndex: 2,
        }}>&#8592;</button>
        <img
          src={imagens[atual]}
          alt={`Espaço academia ${atual + 1}`}
          style={{
            height: 500,
            width: '100%',
            maxWidth: 1300,
            objectFit: 'cover',
            borderRadius: 24,
            boxShadow: '0 4px 32px #000a',
            transition: 'all 0.5s',
          }}
        />
        <button onClick={avancar} style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(24,24,24,0.7)',
          border: 'none',
          color: '#fff',
          fontSize: 48,
          borderRadius: '50%',
          width: 64,
          height: 64,
          cursor: 'pointer',
          zIndex: 2,
        }}>&#8594;</button>
      </div>
    </section>
  );
}

function SobreSection() {
  return (
    <section style={{
      width: '100%',
      minHeight: '420px',
      background: '#000',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      marginTop: 0,
      marginBottom: 0,
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '48px 6vw',
        color: '#fff',
        zIndex: 2,
      }}>
        <h2 style={{ color: '#D32F2F', fontWeight: 900, fontSize: 36, marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1 }}>
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
        <img src={sobreImg} alt="Academia" style={{
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
    <section style={{
      width: '100%',
      minHeight: '420px',
      background: '#000',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 0',
    }}>
      <a href="https://play.google.com/store/apps/details?id=br.com.w12.brabusfit&hl=pt_BR" target="_blank" rel="noopener noreferrer" style={{display: 'block'}}>
        <img src={appImg} alt="Baixe nosso aplicativo Brabus Fit" style={{
          maxWidth: '1100px',
          width: '100%',
          borderRadius: 16,
          boxShadow: '0 4px 32px #0008',
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
    <section id="planos-section" style={{
      width: '100%',
      minHeight: '420px',
      background: '#000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 0',
    }}>
      <h2 style={{ color: '#D32F2F', fontWeight: 900, fontSize: 36, marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1, textAlign: 'center' }}>
        Planos e Preços
      </h2>
      <p style={{ color: '#fff', fontSize: 20, marginBottom: 32, lineHeight: 1.5, textAlign: 'center' }}>
        Escolha o plano ideal para você e venha treinar na melhor academia!
      </p>
      <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ background: '#23242a', borderRadius: 18, padding: '36px 32px', minWidth: 240, boxShadow: '0 2px 16px #1A237E22', border: '2px solid #D32F2F', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
          <h3 style={{ color: '#D32F2F', fontWeight: 800, fontSize: 26, marginBottom: 12 }}>Plano Mensal</h3>
          <p style={{ fontSize: 18, marginBottom: 18 }}>Acesso livre a toda a academia</p>
          <span style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 8 }}>R$ 99,90</span>
          <button style={{ background: '#D32F2F', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 38px', fontWeight: 700, fontSize: 18, cursor: 'pointer', marginTop: 12 }}>Assinar</button>
        </div>
        <div style={{ background: '#23242a', borderRadius: 18, padding: '36px 32px', minWidth: 240, boxShadow: '0 2px 16px #1A237E22', border: '2px solid #D32F2F', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
          <h3 style={{ color: '#D32F2F', fontWeight: 800, fontSize: 26, marginBottom: 12 }}>Plano Trimestral</h3>
          <p style={{ fontSize: 18, marginBottom: 18 }}>Economize mais treinando 3 meses</p>
          <span style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 8 }}>R$ 269,90</span>
          <button style={{ background: '#D32F2F', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 38px', fontWeight: 700, fontSize: 18, cursor: 'pointer', marginTop: 12 }}>Assinar</button>
        </div>
        <div style={{ background: '#23242a', borderRadius: 18, padding: '36px 32px', minWidth: 240, boxShadow: '0 2px 16px #1A237E22', border: '2px solid #D32F2F', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
          <h3 style={{ color: '#D32F2F', fontWeight: 800, fontSize: 26, marginBottom: 12 }}>Plano Anual</h3>
          <p style={{ fontSize: 18, marginBottom: 18 }}>Treine o ano todo com o melhor custo-benefício</p>
          <span style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 8 }}>R$ 899,90</span>
          <button style={{ background: '#D32F2F', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 38px', fontWeight: 700, fontSize: 18, cursor: 'pointer', marginTop: 12 }}>Assinar</button>
        </div>
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
      header.style.background = 'transparent';
      header.style.boxShadow = 'none';
      header.style.position = 'absolute';
      header.style.top = 0;
      header.style.left = 0;
      header.style.width = '100%';
      header.style.zIndex = 10;
      header.style.display = 'flex';
      header.style.justifyContent = 'center';
      header.style.alignItems = 'center';
    }
    return () => {
      if (header) {
        header.style.background = '';
        header.style.boxShadow = '';
        header.style.position = '';
        header.style.top = '';
        header.style.left = '';
        header.style.width = '';
        header.style.zIndex = '';
        header.style.display = '';
        header.style.justifyContent = '';
        header.style.alignItems = '';
      }
    };
  }, []);

  return (
    <>
      <section
        className="banner-section"
        style={{ background: "url('/fotoprincipal.png') center/cover no-repeat" }}
      >
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="hero-title">O MAIOR CENTRO DE TREINAMENTO DO PLANETA!</h1>
          <p className="hero-subtitle">Garanta já a sua matrícula</p>
          <button className="hero-btn" onClick={scrollToPlanos}>
            MATRICULE-SE <FaArrowRight style={{marginLeft: 8, fontSize: 18}} />
          </button>
        </div>
      </section>
      <WhatsAppButton />
      <NossoEspacoSection />
      <SobreSection />
      <PlanosSection />
      <AppDownloadSection />
    </>
  );
}

export default HeroSection; 