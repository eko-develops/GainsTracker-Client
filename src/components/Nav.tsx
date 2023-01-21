import { Nav as NavBs } from 'react-bootstrap';
import Link from './Link';

function Nav() {
	return (
		<NavBs
			defaultActiveKey="/home"
			variant="pills"
			className="d-flex flex-column"
		>
			<Link name="Home" isHome={true} />
			<Link name="Exercises" />
			<Link name="Workouts" />
		</NavBs>
	);
}

export default Nav;
