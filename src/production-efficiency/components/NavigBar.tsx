// eslint-disable-next-line no-use-before-define
import React from 'react'

// ---------------------------
//  External Dependencies
// ---------------------------
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

export const NavigBar = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mx-auto'>
                    <Link className='nav-link' to='/'>
                        Home
                    </Link>
                    <Link className='nav-link' to='/about'>
                        About
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
