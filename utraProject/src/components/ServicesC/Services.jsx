import './Services.css';
import { Calculator, BookOpen, Activity } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, linkText, colorClass, iconColor }) => (
  <div className="service-card">
    <div className={`icon-box ${colorClass}`}><Icon color={iconColor} /></div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="#">{linkText} →</a>
  </div>
);

export function Services() {
  return (
    <section className="services">
      <h2>Como Podemos Ajudar</h2>
      <p className="services-subtitle">Ferramentas para promover o uso saudável de tecnologia</p>
      
      <div className="grid-services">
        <ServiceCard 
          icon={Calculator}
          title="Calculadora Inteligente"
          description="Avalie o tempo de tela atual e receba um relatório detalhado."
          linkText="Fazer avaliação"
          colorClass="light-blue"
          iconColor="#007bff"
        />
        <ServiceCard 
          icon={BookOpen}
          title="Materiais Educativos"
          description="Acesse guias práticos, artigos e vídeos educativos."
          linkText="Explorar materiais"
          colorClass="light-yellow"
          iconColor="#d4a017"
        />
        <ServiceCard 
          icon={Activity}
          title="Monitoramento Contínuo"
          description="Acompanhe a evolução e receba suporte de profissionais."
          linkText="Criar conta gratuita"
          colorClass="light-purple"
          iconColor="#a855f7"
        />
      </div>
    </section>
  );
}