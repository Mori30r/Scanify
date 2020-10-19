import React from 'react';
import { BottomNavigation,
    BottomNavigationIcons,
    BottomNavigationIconsItem,
    BottomNavigationIconsItemDiv,
    NavLinkStyled,
} from "./BottomNavigationBar.elements";
import { ReactComponent as InfoIcon  } from "../../../assets/icons/info.svg";
import { ReactComponent as QRIcon  } from "../../../assets/icons/qr.svg";
import { ReactComponent as ScanIcon  } from "../../../assets/icons/scan.svg";

const iconStyle = {
    width: '2.5rem',
    height: '2.5rem',
}

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
                <BottomNavigationIconsItem>
                    <NavLinkStyled to='/scan' activeClassName='active' exact={true}>
                        <BottomNavigationIconsItemDiv>
                            <ScanIcon style={iconStyle}/>
                        </BottomNavigationIconsItemDiv>
                    </NavLinkStyled>
                </BottomNavigationIconsItem>
            </BottomNavigationIcons>
        </BottomNavigation>
    );
};