import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Location from './components/Location';
import Footer from './components/Footer';
import SobreAcademia from './components/SobreAcademia';
import { FaWhatsapp } from 'react-icons/fa';
import './App.css';

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

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhatsAppButton />
      <SobreAcademia />
      <Location />
      <Footer />
    </div>
  );
}

export default App; 