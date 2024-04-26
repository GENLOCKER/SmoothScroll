import React from 'react'
import { Nav, NavLogo, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        dolla
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>
                                About
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
