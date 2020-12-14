import { Container, Row, Col, Button } from 'react-bootstrap'

export const Home = () => {
	return (
		<Container fluid>
			<Row>
				<Col md={12} className="text-center">
					<h2>
						emre
					</h2>
				</Col>

				<Col md={5} className="text-center">
					<Row>
						<Col md={6} className="text-center">
							label
						</Col>
						<Col md={6} className="text-center">
							form input
						</Col>
					</Row>
					<Row>
						<Col md={6} className="text-center">
							label
						</Col>
						<Col md={6} className="text-center">
							form input
						</Col>
					</Row>
					<Row>
						<Col md={6} className="text-center">
							label
						</Col>
						<Col md={6} className="text-center">
							form input
						</Col>
					</Row>
					<Row>
						<Col md={6} className="text-center">
							label
						</Col>
						<Col md={6} className="text-center">
							form input
						</Col>
					</Row>
				</Col>
				<Col md={2} className="text-center align-self-center">
					<Button>Click Me !!</Button>
				</Col>
				<Col md={5} className="text-center">
					sağ
				</Col>
			</Row>
		
		</Container>
	)
}