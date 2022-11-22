import React from 'react';
import { HeaderStyles } from './styled/HeaderStyles';
import { Container } from './styled/Container';
import { BsMoon, BsMoonFill } from 'react-icons/bs';
import { Button } from './styled/Button';
import { Link } from 'react-router-dom';

const Header = ({ theme, toggleTheme }) => {
    return (
        <HeaderStyles>
            <Container>
                <Link to='/'>
                    <h1>Where in the world?</h1>
                </Link>
                <Button
                    ghost
                    onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <>
                            <BsMoon />
                            Dark Mode
                        </>
                    ) : (
                        <>
                            <BsMoonFill />
                            Dark Mode
                        </>
                    )}
                </Button>
            </Container>
        </HeaderStyles>
    )
}

export default Header