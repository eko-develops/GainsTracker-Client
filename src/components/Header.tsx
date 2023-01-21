import { Navbar, Container } from 'react-bootstrap';
import Nav from './Nav';

function Header() {
	return (
		<Navbar
			className="col-sm-4 col-md-2 col-lg-2"
			as="header"
			bg="dark"
			variant="dark"
		>
			<Container className="d-flex flex-column min-vh-100 justify-content-start">
				<Navbar.Brand>PPL</Navbar.Brand>
				<Nav />
			</Container>
		</Navbar>
	);
}

export default Header;
