import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import fire from '../../fire.js'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    JugIcon, 
    NavMenu,
    NavItemBtn,
    NavBtnLink,
} from "../../components/Navbar/Navbar.elements";

const LogOutBtn = () => {

    const [click, setClick] = useState(false);
    // eslint-disable-next-line
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#5c6' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <NavIcon />
                            VIBE
                        </NavLogo>
                        <JugIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </JugIcon>
                        <NavMenu onClick={ handleClick } click={click}>
                            <NavItemBtn>
                                <NavBtnLink to="/">
                                    <Button primary onClick={() => fire.auth().signOut()}>
                                        LOG OUT
                                    </Button>
                                </NavBtnLink>
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default LogOutBtn;