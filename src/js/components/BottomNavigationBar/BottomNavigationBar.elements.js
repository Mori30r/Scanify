import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {device} from "../../styles/responsive";

export const BottomNavigation = styled.nav`
background-color: white;
margin: 0 40rem;
border-radius: 3rem;
@media ${device.desktop}{
margin: 0 35rem;
}
@media ${device.mobileL}{
height: 100%;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;
}
`;

export const BottomNavigationIcons = styled.div`
display: flex;
justify-content: space-around;
padding: .5rem 0;
@media ${device.mobileL}{
flex-direction: column;
padding: 1rem;
}
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
@media ${device.mobileL}{
justify-content: center;
flex-direction: column;
}
}
`;

export const BottomNavigationIconsItemDiv = styled.div`
padding: 1rem;
`;

export const NavLinkStyled = styled(NavLink)`
transition: all .6s ease;
`;