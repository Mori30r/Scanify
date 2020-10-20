import React from 'react';
import {Generate, Section, SuccessQRText} from "../GeneratePage/GeneratePage.elements";
import { ReactComponent as GithubIcon  } from "../../../assets/icons/github.svg";
import { ReactComponent as TwitterIcon  } from "../../../assets/icons/twitter.svg";
import { ReactComponent as LinkedinIcon  } from "../../../assets/icons/linkedin.svg";
import {socialIconStyle} from "../../styles/GlobalStyles";
import {LegalText, SocialIcons} from "./InfoPage.elements";



export const InfoPage = () => {
    return (
        <Generate>
            <Section large>
                <SocialIcons>
                    <a href="https://www.github.com/mori30r"><GithubIcon style={socialIconStyle}/></a>
                    <a href="https://twitter.com/mori30r"><TwitterIcon style={socialIconStyle}/></a>
                    <a href="https://www.linkedin.com/in/morteza-sayar-a11112199/"><LinkedinIcon style={socialIconStyle}/></a>
                </SocialIcons>
                <LegalText>© 2020 Morteza Sayar All Rights Reserved</LegalText>
            </Section>
        </Generate>
    );
};
