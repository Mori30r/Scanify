import styled from 'styled-components';

export const BottomNavigation = styled.nav`
background-color: white;
margin: 0 40rem;
border-radius: 3rem;
padding: .5rem 0;
`;

export const BottomNavigationIcons = styled.div`
display: flex;
justify-content: space-around;
`;

export const BottomNavigationIconsItem = styled.button`
padding: 1.2rem;
border-radius: 5rem;
border: none;
background-color: transparent;
fill: ${ props => props.theme["secondaryColor"]};
`;