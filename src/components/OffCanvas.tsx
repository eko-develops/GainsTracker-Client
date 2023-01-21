import { Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/Gi';

function OffCanvas() {
	const [isShowing, setIsShowing] = useState(false);

	const handleClose = () => setIsShowing(false);
	const handleShow = () => setIsShowing(true);

	return (
		<>
			<button className="floating-button shadow" onClick={handleShow}>
				<GiHamburgerMenu />
			</button>

			<Offcanvas placement="end" show={isShowing} onHide={handleClose}>
				<Offcanvas.Header className="bg-dark" closeVariant="white" closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body className="bg-dark">
					Some text as placeholder. In real life you can have the elements you
					have chosen. Like, text, images, lists, etc.
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default OffCanvas;
