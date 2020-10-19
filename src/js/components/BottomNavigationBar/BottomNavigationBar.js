import React from 'react';
import { BottomNavigation,
    BottomNavigationIcons,
    BottomNavigationIconsItem,
} from "./BottomNavigationBar.elements";
import { ReactComponent as InfoIcon  } from "../../../assets/icons/info.svg";
import { ReactComponent as QRIcon  } from "../../../assets/icons/qr.svg";
import { ReactComponent as ScanIcon  } from "../../../assets/icons/scan.svg";
import { NavLink } from "react-router-dom";

const iconStyle = {
    width: '2.5rem',
    height: '2.5rem'
}

export const BottomNavigationBar = () => {
console.log(InfoIcon.render())
    return (
        <BottomNavigation>
            <BottomNavigationIcons>
                <BottomNavigationIconsItem>
                    <NavLink to='id'>
                        <InfoIcon style={iconStyle}/>
                    </NavLink>
                </BottomNavigationIconsItem>
                <BottomNavigationIconsItem>
                    <QRIcon style={iconStyle}/>
                </BottomNavigationIconsItem>
                <BottomNavigationIconsItem>
                    <ScanIcon style={iconStyle}/>
                </BottomNavigationIconsItem>
            </BottomNavigationIcons>
        </BottomNavigation>
    );
};