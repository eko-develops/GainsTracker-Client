import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Workouts from './pages/Workouts';

import Header from './components/Header';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<>
			<Header />
			<Container className="col-8 m-auto">
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/exercises" element={<Exercises />} />
						<Route path="/workouts" element={<Workouts />} />
					</Routes>
				</main>
			</Container>
		</>
	);
}

export default App;
