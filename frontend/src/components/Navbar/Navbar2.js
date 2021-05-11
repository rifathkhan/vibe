import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    JugIcon, 
    NavMenu,
    NavItemBtn,
    NavBtnLink,
} from "./Navbar.elements";

const Navbar2 = () => {

    const [click, setClick] = useState(false);

    const [button, setButton] = useState(false);

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
                                {button ? (
                                    <NavBtnLink to="/auth">
                                        <Button primary>
                                            LOG OUT
                                        </Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/auth'>
                                        <Button fontBig primary>
                                            LOG OUT
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar2;