import { Container } from 'react-bootstrap';

interface PageLayoutProps {
	pageName: string;
	children: React.ReactNode;
}

function PageLayout({ pageName, children }: PageLayoutProps) {
	return (
		<Container>
			<h1 className="py-2 px-4 fw-bold">{pageName}</h1>
			<div className="content-wrapper p-4">{children}</div>
		</Container>
	);
}

export default PageLayout;
