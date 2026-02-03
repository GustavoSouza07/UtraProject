import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Equilibre o Tempo de Tela</h1>
        <p>
          Uma plataforma completa para análise e monitoramento do uso de tecnologia 
          por crianças e adolescentes...
        </p>
        <div className="hero-actions">
          <button className="btn-yellow">Fazer Avaliação Gratuita →</button>
          <button className="btn-blue-light">Conhecer Diretrizes</button>
        </div>
      </div>

      <div className="hero-cards">
        <div className="info-card teal">
          <h3>Baseado nas diretrizes da OMS</h3>
          <p>Análise e equilíbrio do tempo de tela com base em evidências.</p>
        </div>
        <div className="info-card blue">
          <h3>Especialistas em Saúde Digital</h3>
          <p><strong>Equipe de Pesquisa UTRA</strong></p>
          <p>Orientações baseadas nas melhores evidências científicas.</p>
        </div>
      </div>
    </section>
  );
}