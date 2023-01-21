import { Link } from 'react-router-dom';
function Header() {
	return (
		<header>
			<div className="brand">brand</div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/exercises">Exercises</Link>
					</li>
					<li>
						<Link to="/workouts">Workouts</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
