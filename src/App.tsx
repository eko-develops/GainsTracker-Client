import Footer from './components/Footer';
import Header from './components/Header';
import Exercises from './pages/Exercises';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="app-container">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/exercises" element={<Exercises />} />
					<Route path="/workouts" element={<Workouts />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
