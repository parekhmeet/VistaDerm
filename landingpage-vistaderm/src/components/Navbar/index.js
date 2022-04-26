import React from 'react';
import {FaBars} from 'react-icons/fa';
import{Nav, NavbarContainer, NavLogo, MobileIcon, 
          NavMenu, NavItem, NavLinks, NavBtn, 
          NavBtnLinkUp,NavBtnLink} 
          from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            VistaDerm
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavItem>
            <NavLinks to="about">
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="search">
              Find Doctors
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="vcosult">
              Video Consult
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="medicines">
              Medicines
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="labtest">
              Lab Tests
            </NavLinks>
          </NavItem>
          <NavBtn>
            <NavBtnLinkUp to="/signup">
              Sign Up
            </NavBtnLinkUp>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/signin">
              Sign In
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;