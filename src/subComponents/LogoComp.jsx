import React from 'react';

// Style Components
import styled from 'styled-components';
import { darkTheme } from '../components/Themes.jsx';

const Logo = styled.h1`
    display: inline-block;
    color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
    font-family: 'Roboto', sans-serif;

    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 3;

    @media screen and (max-width: 500px) {
        font-size: 2rem;
    }
`

const LogoComp = (props) => {
    return (
        <Logo color={props.theme}>
            IDS
        </Logo>
    )
}

export default LogoComp