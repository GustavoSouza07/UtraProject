import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna 1: Sobre */}
        <div className="footer-column about">
          <p>
            Uso de Telas e sua Repercussão na Aprendizagem. Promovendo o uso
            saudável de tecnologia para crianças e adolescentes.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="footer-column">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Calculadora</a></li>
            <li><a href="#">Diretrizes OMS</a></li>
            <li><a href="#">Pesquisas</a></li>
            <li><a href="#">Materiais Educativos</a></li>
          </ul>
        </div>

        {/* Coluna 3: Recursos */}
        <div className="footer-column">
          <h3>Recursos</h3>
          <ul>
            <li><a href="#">Área do Usuário</a></li>
            <li><a href="#">Área do Profissional</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Ajuda</a></li>
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div className="footer-column contact">
          <h3>Contato</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={18} color="#00a8ff" />
              <div>
                <span>Email</span>
                <p>contato@projetoutra.com</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={18} color="#00a8ff" />
              <div>
                <span>Telefone</span>
                <p>(11) 3333-4444</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2025 Projeto UTRA. Todos os direitos reservados.</p>
          <p className="made-with">Feito com ❤️ para famílias e profissionais de saúde</p>
          <div className="footer-legal">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}