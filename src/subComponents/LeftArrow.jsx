import React from 'react';
import { NavLink } from "react-router-dom";

// Style Components
import styled from 'styled-components';

const LeftNav = styled.div`
    cursor: pointer;
    position: absolute;
    top: 40%;
    left: calc(1rem + 2vw);
    z-index: 1;

    text-decoration: none;
`

const LeftArrow = () => {
    return (
        <LeftNav>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="white">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm2.707 14.293-1.414 1.414L7.586 12l5.707-5.707 1.414 1.414L10.414 12l4.293 4.293z">
                </path>
            </svg>
        </LeftNav>
    )
}

export default LeftArrow