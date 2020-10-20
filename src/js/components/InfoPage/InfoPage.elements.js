import styled from "styled-components";

export const SocialIcons = styled.div`
display: flex;
align-items: center;
width: 40vw;
flex-direction: row;
flex: 1;
justify-content: space-between;
`;

export const LegalText = styled.p`
display: flex;
align-self: end;
font-size: 1.5rem;
padding: 2rem;
color: ${ props => props.theme["darkText"]};
`;