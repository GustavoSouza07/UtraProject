import './StatsCounter.css';

export function StatsCounter() {
  const stats = [
    { label: "das crianças excedem limite recomendado", value: "73%" },
    { label: "média diária de tempo de tela", value: "4.5h" },
    { label: "faixa etária coberta", value: "2-18" },
    { label: "baseado em evidências científicas", value: "100%" },
  ];

  return (
    <section className="stats-bar">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </section>
  );
}