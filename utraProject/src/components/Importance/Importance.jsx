import './Importance.css';
import { CheckCircle2, TrendingUp } from 'lucide-react';

export function Importance() {
  const points = [
    { title: "Desenvolvimento Saudável", desc: "Tempo excessivo de tela pode afetar o desenvolvimento cognitivo, linguístico e motor das crianças." },
    { title: "Melhor Qualidade de Sono", desc: "A luz azul das telas interfere na produção de melatonina, prejudicando o sono reparador." },
    { title: "Saúde Física", desc: "Reduz riscos de obesidade, problemas posturais e fadiga ocular associados ao sedentarismo." },
    { title: "Bem-Estar Emocional", desc: "Uso equilibrado promove melhores interações sociais e reduz ansiedade e problemas de atenção." },
  ];

  return (
    <section className="importance-section">
      <div className="importance-container">
        {/* Lado Esquerdo: Lista */}
        <div className="importance-text">
          <h2>Por que é Importante Equilibrar o Tempo de Tela?</h2>
          <div className="points-list">
            {points.map((point, i) => (
              <div key={i} className="point-item">
                <CheckCircle2 className="icon-check" size={24} />
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lado Direito: Card de Dados */}
        <div className="alarm-card">
          <TrendingUp size={40} className="icon-trend" />
          <h2>Dados Alarmantes</h2>
          
          <div className="alarm-stat">
            <span className="alarm-value">67%</span>
            <p>das crianças excedem o tempo de tela recomendado pela OMS</p>
          </div>
          
          <div className="alarm-stat">
            <span className="alarm-value">45%</span>
            <p>apresentam problemas de sono relacionados ao uso de telas</p>
          </div>
          
          <div className="alarm-stat">
            <span className="alarm-value">3x</span>
            <p>maior risco de obesidade em crianças com uso excessivo de telas</p>
          </div>
        </div>
      </div>

      {/* Footer Call to Action (azul degradê) */}
      <div className="cta-banner">
        <h2>Comece Hoje a Transformar a Relação da Sua Família com a Tecnologia</h2>
        <p>É grátis, rápido e baseado em ciência. Faça sua primeira avaliação agora!</p>
        <button className="btn-yellow">Iniciar Avaliação Gratuita →</button>
      </div>
    </section>
  );
}