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
                            {/* <NavItem>
                                <Link to='/certificates' className='nav-link '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m15 22l-.555.832A1 1 0 0 0 16 22h-1Zm-3-2l.555-.832a1 1 0 0 0-1.11 0L12 20Zm-3 2H8a1 1 0 0 0 1.555.832L9 22ZM8.75 3.537l-.08.997l.08-.997Zm1.685-.697l-.762-.648l.762.648ZM6.532 5.686l-.997.08l.997-.08Zm2.154-2.154l.08-.997l-.08.997ZM5.84 7.435l.648.761l-.648-.761Zm.697-1.684l.997-.08l-.997.08Zm-.747 4.772l-.648.762l.648-.762Zm0-3.046l-.648-.762l.648.762Zm.747 4.772l-.997-.08l.997.08Zm-.697-1.684l.648-.761l-.648.761Zm2.846 3.903l.08.997l-.08-.997Zm-2.154-2.154l.997.08l-.997-.08Zm3.903 2.846l.761-.648l-.761.648Zm-1.684-.697l-.08-.997l.08.997Zm4.772.747l.762.648l-.762-.648Zm-3.046 0l-.762.648l.762-.648Zm4.772-.747l.08-.997l-.08.997Zm-1.684.697l-.761-.648l.761.648Zm3.903-2.846l.997-.08l-.997.08Zm-2.154 2.154l-.08.997l.08-.997Zm2.846-3.903l.648.762l-.648-.762Zm-.697 1.684l-.997.08l.997-.08Zm.747-4.772l.648-.762l-.648.762Zm0 3.046l-.648-.761l.648.761Zm-.747-4.772l-.997-.08l.997.08Zm.697 1.684l-.648.761l.648-.761Zm-2.846-3.903l-.08-.997l.08.997Zm2.154 2.154l.997.08l-.997-.08ZM13.565 2.84l.762-.648l-.762.648Zm1.684.697l.08.997l-.08-.997Zm-1.726-.747l-.761.648l.761-.648Zm-3.046 0l.761.648l-.761-.648ZM9 14.458l.044-.999l-.044 1Zm6.555 6.71l-3-2l-1.11 1.664l3 2l1.11-1.664Zm-4.11-2l-3 2l1.11 1.664l3-2l-1.11-1.664Zm1.317-15.73l.042.05l1.523-1.296l-.042-.05l-1.523 1.296Zm2.567 1.096l.065-.005l-.16-1.994l-.065.005l.16 1.994Zm1.142 1.072l-.005.065l1.994.16l.005-.065l-1.994-.16Zm1.041 2.59l.05.042l1.296-1.523l-.05-.042l-1.296 1.523Zm.05 1.566l-.05.042l1.296 1.523l.05-.042l-1.296-1.523Zm-1.096 2.567l.005.065l1.994-.16l-.005-.065l-1.994.16Zm-1.072 1.142l-.065-.005l-.16 1.994l.065.005l.16-1.994Zm-2.59 1.041l-.042.05l1.523 1.296l.042-.05l-1.523-1.296Zm-1.566.05l-.042-.05l-1.523 1.296l.042.05l1.523-1.296Zm-2.567-1.096l-.065.005l.16 1.994l.065-.005l-.16-1.994Zm-1.142-1.072l.005-.065l-1.994-.16l-.005.065l1.994.16Zm-1.041-2.59l-.05-.042l-1.296 1.523l.05.042l1.296-1.523Zm-.05-1.566l.05-.042l-1.296-1.523l-.05.042l1.296 1.523Zm1.096-2.567l-.005-.065l-1.994.16l.005.065l1.994-.16Zm1.072-1.142l.065.005l.16-1.994l-.065-.005l-.16 1.994Zm2.59-1.041l.042-.05l-1.523-1.296l-.042.05l1.523 1.296ZM8.671 4.534a3 3 0 0 0 2.525-1.046L9.673 2.192a1 1 0 0 1-.842.348l-.16 1.994ZM7.529 5.606a1 1 0 0 1 1.077-1.077l.16-1.994a3 3 0 0 0-3.23 3.231l1.993-.16Zm-1.041 2.59a3 3 0 0 0 1.046-2.525l-1.994.16a1 1 0 0 1-.348.842l1.296 1.523Zm-.05 1.566a1 1 0 0 1 0-1.524L5.142 6.715a3 3 0 0 0 0 4.57l1.296-1.523Zm1.096 2.567a3 3 0 0 0-1.046-2.525l-1.296 1.523a1 1 0 0 1 .348.842l1.994.16Zm1.072 1.142a1 1 0 0 1-1.077-1.077l-1.994-.16a3 3 0 0 0 3.231 3.23l-.16-1.993Zm4.156 1.09a1 1 0 0 1-1.524 0l-1.523 1.297a3 3 0 0 0 4.57 0l-1.523-1.296Zm3.71-2.167a1 1 0 0 1-1.078 1.077l-.16 1.994a3 3 0 0 0 3.23-3.231l-1.993.16Zm1.04-2.59a3 3 0 0 0-1.046 2.525l1.994-.16a1 1 0 0 1 .348-.842l-1.296-1.523Zm.05-1.566a1 1 0 0 1 0 1.524l1.296 1.523a3 3 0 0 0 0-4.57l-1.296 1.523Zm-1.096-2.567a3 3 0 0 0 1.046 2.525l1.296-1.523a1 1 0 0 1-.348-.842l-1.994-.16Zm-1.072-1.142a1 1 0 0 1 1.077 1.077l1.994.16a3 3 0 0 0-3.231-3.23l.16 1.993Zm-2.59-1.041a3 3 0 0 0 2.525 1.046l-.16-1.994a1 1 0 0 1-.842-.348l-1.523 1.296Zm1.48-1.346a3 3 0 0 0-4.569 0l1.523 1.296a1 1 0 0 1 1.524 0l1.523-1.296Zm-3.088 12.37a3 3 0 0 0-2.152-1.053l-.088 1.998a1 1 0 0 1 .717.351l1.523-1.296ZM9.044 13.46a3.011 3.011 0 0 0-.373.007l.16 1.994a1 1 0 0 1 .125-.003l.088-1.998ZM10 22v-7.542H8V22h2Zm5.33-8.534a3.012 3.012 0 0 0-.374-.007l.088 1.998a1 1 0 0 1 .125.003l.16-1.994Zm-.374-.007a3 3 0 0 0-2.152 1.053l1.523 1.296a1 1 0 0 1 .717-.35l-.088-1.999Zm-.956 1V22h2v-7.542h-2Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8l-3 3l-1-1" /></g></svg>My Certifications</Link>
                            </NavItem> */}
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