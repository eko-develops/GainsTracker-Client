import Footer from './components/Footer';
import Header from './components/Header';
import Exercises from './pages/Exercises';
import Home from './pages/Home';
import Workouts from './pages/Workouts';

function App() {
	return (
		<div className="app-container">
			<Header />
			<h1>Hello World</h1>
			<Home />
			<Exercises />
			<Workouts />
			<Footer />
		</div>
	);
}

export default App;
