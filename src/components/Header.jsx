import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const scrollToNossoEspaco = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const secao = document.getElementById('nosso-espaco-section');
      if (secao) {
        secao.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <header className="header">
      <div className="logo-area">
        <Logo size={48} />
        <span className="logo-text">BrabusFit American</span>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/grade-aulas">Grade de Aulas</Link>
        <Link to="/nutricao">Nutrição</Link>
        <Link to="/suplementos">Suplementos</Link>
        <Link to="/" onClick={scrollToNossoEspaco}>Nosso Espaço</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/planos"><button className="btn-agendar">Agendar Aula</button></Link>
      </nav>
    </header>
  );
}

export default Header; 