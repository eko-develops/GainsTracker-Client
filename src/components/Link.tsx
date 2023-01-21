import { Nav } from 'react-bootstrap';
import { Link as LinkRR } from 'react-router-dom';

interface LinkProps {
	name: string;
	isHome?: boolean;
}

function Link({ name, isHome = false }: LinkProps) {
	const toValue = isHome ? '/' : `/${name}`;
	return (
		<Nav.Link as={LinkRR} to={toValue}>
			{name}
		</Nav.Link>
	);
}

export default Link;
