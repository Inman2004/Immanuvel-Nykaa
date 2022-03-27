import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
export const Nav = styled.nav`
  backgroud:ghost white;
  display: flex;
  font-weight: 400;
  font-family:Century Gothic ;
height: 85px;
box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 15px;
height: 100%;
transition: transform .2s;
font-family:Century Gothic;
font-size:16.9px;
cursor: pointer;
&:hover {
	color:violet;
	transform: scale(1.1);
}
&.active {
	color: deeppink;
	font-weight: bold;
	transform: scale(1.1);
}
`
;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
font-size:30px;
border-radius:50%;
transition: transform .2s;
background: transparent;
padding: 10px 22px;
color: #000000;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	color:violet;
	font-weight: bold;
	transform: scale(1.1);
}
&.active
{
	color: deeppink;	
}
`;

