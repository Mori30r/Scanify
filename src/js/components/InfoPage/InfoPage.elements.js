import styled from "styled-components";
import {device} from "../../styles/responsive";

export const SocialIcons = styled.div`
display: flex;
align-items: center;
width: 40vw;
flex-direction: row;
flex: 1;
justify-content: space-between;
@media ${device.tablet}{
flex-direction: column;
justify-content: center;
}
`;

export const LegalText = styled.p`
display: flex;
align-self: end;
font-size: 1.5rem;
padding: 2rem;
color: ${ props => props.theme["darkText"]};
@media ${device.tablet}{
font-size:1rem;
}
`;