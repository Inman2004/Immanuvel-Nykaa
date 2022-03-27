import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faLock,} from "@fortawesome/free-solid-svg-icons";
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import logo from './nykaa.svg';

import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
  } from "./FooterStyles";
	

const Navbar = () => {
return (
	<>
	<Nav>
	
		<Bars />
		<NavMenu>
			 <img src={logo} classname="logo" alt="logo" height={30} width={120}></img>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/events' activeStyle>
			Events
		</NavLink>
		<NavLink to='/annual' activeStyle>
			Annual Report
		</NavLink>
		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
		<NavBtn>
		<NavBtnLink to='/login'><FontAwesomeIcon icon={faUser}/> - Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	<footer>
	<Box style={{ color: "black", 
                   textAlign: "center", 
                   marginTop: "-25px" }}>
       
        2022 Copy Rights @ CITS
      
      <Container>
        <Row>
         
        </Row>
      </Container>
    </Box>
	</footer>
	</>

);
};

export default Navbar;
