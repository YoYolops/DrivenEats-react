import './App.css';

import Header from './components/Header';
import DishSection from './components/DishSection';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header title="DrivenEats" subtitle="Sua comida em 6 minutos" />
      <div className="app-content-container">
        <DishSection title="Primeiro, seu prato"></DishSection>
        <DishSection title="Agora, sua bebida"></DishSection>
        <DishSection title="Por fim, sua sobremesa"></DishSection>
      </div>
      <Footer />
    </div>
  );
}

export default App;
