import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Slider from './components/Slider';
import Solutions from './components/Solutions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Solutions />
      <Services />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
