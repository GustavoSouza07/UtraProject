import { Laptop } from 'lucide-react';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <Laptop size={32} color="#007bff" />
        <div>
          <span className="logo-title">PROJETO UTRA</span>
          <p className="logo-subtitle">Uso de Telas e sua Repercussão na Aprendizagem</p>
        </div>
      </div>
      
      <nav className="nav-main">
        <a href="#" className="active">Início</a>
        <a href="#">Calculadora</a>
        <a href="#">Diretrizes OMS</a>
        <a href="#">Pesquisas</a>
        <a href="#">Materiais</a>
      </nav>

      <div className="auth-buttons">
        <button className="btn-outline">Área do Usuário</button>
        <button className="btn-outline">Área do Profissional</button>
        <button className="btn-yellow">Contato</button>
      </div>
    </header>
  );
}