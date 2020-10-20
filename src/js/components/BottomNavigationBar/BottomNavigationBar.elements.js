import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const BottomNavigation = styled.nav`
background-color: white;
margin: 0 45rem;
border-radius: 3rem;
`;

export const BottomNavigationIcons = styled.div`
display: flex;
justify-content: space-around;
padding: .5rem 0;
`;

export const BottomNavigationIconsItem = styled.button`
border-radius: 10rem;
border: none;
background-color: transparent;
fill: ${ props => props.theme["secondaryColor"]};
& > .active{
display: flex;
background-color: ${ props => props.theme["secondaryColor"] };
fill: ${ props => props.theme["lightText"]};
border-radius: 50px;
box-shadow: 0 0 2rem rgba(255, 116, 241, .8);
outline: none;
}
`;

export const BottomNavigationIconsItemDiv = styled.div`
padding: 1rem;
`;

export const NavLinkStyled = styled(NavLink)`
transition: all .6s ease;
`;