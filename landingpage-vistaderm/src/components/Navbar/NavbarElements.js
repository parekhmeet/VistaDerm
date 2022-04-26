import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #1A237E ;
    height: 80px;
    /*margin-top: -80px;*/
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #CFD8DC;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width:768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem
        cursor: pointer;
        color: #CFD8DC;
    }
    
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width:768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
`
export const NavLinks = styled(LinkS)`
    color: #CFD8DC;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 4px solid #01bf71
    }
`
export const NavBtn = styled.nav`
   display: flex;
   align-items: center;

   @media screen and (max-width: 768px) {
       display: none;
   } 
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background-color: #01bf71;
    border: none;
    white-space: nowrap;
    padding: 10px 22px;
    margin-left: -10px;
    color : black;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition : all 0.2s ease-in-out;
    text-decoration: none;
    &:hover{
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transform: translate(-3px, -1px);
    }
    &:active{
        background-color: #01bf71;
        box-shadow: 0 5px black;
        transform: translate(4px, 1px);
    }
`
export const NavBtnLinkUp = styled(LinkR)`
    background : none;
    white-space: nowrap;
    padding: 10px 22px;
    color : #CFD8DC;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition : all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        border-radius: 50px;
        background-color: #01bf71;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        color: black;
        transform: translate(-3px, -1px);
    }
    &:active{
        background-color: #01bf71;
        box-shadow: 0 5px black;
        transform: translate(4px, 1px);
    }
`