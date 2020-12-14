// ---------------------------
//  External Dependencies
// ---------------------------
import { Link } from "react-router-dom"
import { Nav,Navbar } from "react-bootstrap"

export const NavigBar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link className='nav-link' to='/'>Home</Link>
					<Link className='nav-link' to='/about'>About</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}