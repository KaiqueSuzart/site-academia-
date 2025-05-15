import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GradeAulas from './pages/GradeAulas';
import Nutricao from './pages/Nutricao';
import Suplementos from './pages/Suplementos';
import NossoEspaco from './pages/NossoEspaco';
import Contato from './pages/Contato';
import Planos from './pages/Planos';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grade-aulas" element={<GradeAulas />} />
        <Route path="/nutricao" element={<Nutricao />} />
        <Route path="/suplementos" element={<Suplementos />} />
        <Route path="/nosso-espaco" element={<NossoEspaco />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/planos" element={<Planos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
