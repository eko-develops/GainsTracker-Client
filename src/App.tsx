import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Workouts from './pages/Workouts';

import Header from './components/Header';

function App() {
	return (
		<>
			<Header />
			<main className="col-sm-6 col-md-6 m-auto">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/exercises" element={<Exercises />} />
					<Route path="/workouts" element={<Workouts />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
