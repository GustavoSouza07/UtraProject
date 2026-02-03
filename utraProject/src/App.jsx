import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { StatsCounter } from './components/StatsCounter/StatsCounter';
import { Services } from './components/ServicesC/Services';
import { Importance } from './components/Importance/Importance';
import { Footer } from './components/Footer/Footer'; // Importe o Footer

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <StatsCounter />
        <Services />
        <Importance />
      </main>
      <Footer />
    </div>
  );
}

export default App;