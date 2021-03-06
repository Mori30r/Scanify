import React from 'react';
import { BottomNavigation,
    BottomNavigationIcons,
    BottomNavigationIconsItem,
    BottomNavigationIconsItemDiv,
    NavLinkStyled,
} from "./BottomNavigationBar.elements";
import { ReactComponent as InfoIcon  } from "../../../assets/icons/info.svg";
import { ReactComponent as QRIcon  } from "../../../assets/icons/qr.svg";
import {iconStyle} from "../../styles/GlobalStyles";



export const BottomNavigationBar = () => {
    return (
        <BottomNavigation>
            <BottomNavigationIcons>
                <BottomNavigationIconsItem>
                    <NavLinkStyled to='/info' activeClassName='active' exact={true} >
                        <BottomNavigationIconsItemDiv>
                            <InfoIcon style={iconStyle}/>
                        </BottomNavigationIconsItemDiv>
                    </NavLinkStyled>
                </BottomNavigationIconsItem>
                <BottomNavigationIconsItem>
                    <NavLinkStyled to='/' activeClassName='active' exact={true} >
                        <BottomNavigationIconsItemDiv>
                            <QRIcon style={iconStyle}/>
                        </BottomNavigationIconsItemDiv>
                    </NavLinkStyled>
                </BottomNavigationIconsItem>
            </BottomNavigationIcons>
        </BottomNavigation>
    );
};