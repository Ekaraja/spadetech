import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

import Home from './pages/Home';
import Security from './pages/services/Security'
import Consultancy from './pages/services/Consultancy'
import Development from './pages/services/Development'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './pages/about/About';

function App() {
	return (
		<>
			<Navbar />
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services/security-audit" element={<Security />} />
					<Route path="/services/consultancy" element={<Consultancy />} />
					<Route path="/services/development" element={<Development />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</ScrollToTop>
			<Footer />
		</>
	);
}

export default App;
