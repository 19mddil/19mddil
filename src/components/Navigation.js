import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
    }
    navToggler = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    }
    render() {
        return (
            <div style={{
                padding: '1%',
            }
            }>
                <Navbar dark expand="sm" style={{ borderRadius: '10px 0px 0px 10px' }}>
                    <NavbarToggler onClick={this.navToggler} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className='mr-auto' navbar vertical >
                            <NavItem>
                                <Link to='/' className='nav-link'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z" /></svg>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/favbooks' className='nav-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.25 16.25 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03ZM136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm10 47.38l-3.35-15.9l46.82-10.06l3.34 15.9Zm70 100.41l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85v.09ZM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM56 48h48v16H56Zm48 160H56v-16h48v16Z" /></svg>
                                    Fav Books
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/skills' className='nav-link '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28"><path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z" /></svg>My Skills</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/projects' className='nav-link '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28"><path fill="currentColor" d="m22.9 21.2l-4.1-4.1c.4-1 .2-2.3-.7-3.1c-.9-.9-2.2-1.1-3.3-.6l1.9 1.9l-1.4 1.4l-2-2c-.5 1.1-.3 2.4.6 3.4c.9.9 2.1 1.1 3.1.7l4.1 4.1c.2.2.5.2.6 0l1-1c.3-.3.3-.6.2-.7M10 12c2.2 0 4-1.8 4-4s-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3 14H2v-3c0-2.7 5.3-4 8-4c.5 0 1.2.1 1.9.2c-.4.5-.6 1.1-.8 1.8c-.4 0-.7-.1-1.1-.1c-3 0-6.1 1.5-6.1 2.1v1.1h7.6c.3.8.9 1.4 1.5 1.9Z" /></svg>My Projects</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/contact' className='nav-link '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28"><path fill="currentColor" d="M12 14q.825 0 1.413-.588T14 12q0-.825-.588-1.413T12 10q-.825 0-1.413.588T10 12q0 .825.588 1.413T12 14Zm-4 4h8v-.575q0-.6-.325-1.1t-.9-.75q-.65-.275-1.338-.425T12 15q-.75 0-1.438.15t-1.337.425q-.575.25-.9.75T8 17.425V18Zm10 4H6q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V20q0 .825-.588 1.413T18 22Z" /></svg>Contact</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar >
            </div >
        )
    }
}
export default Navigation;