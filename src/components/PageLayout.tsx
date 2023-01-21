import { Container } from 'react-bootstrap';

interface PageLayoutProps {
	pageName: string;
	children: React.ReactNode;
}

function PageLayout({ pageName, children }: PageLayoutProps) {
	return (
		<Container className="col-12 ">
			<h1 className="p-4 fw-bold">{pageName}</h1>
			<div className="content-wrapper p-4 rounded-3 shadow">{children}</div>
		</Container>
	);
}

export default PageLayout;
