// Home Button

import React from 'react';
import { NavLink } from 'react-router-dom';

// Style Components
import styled from 'styled-components';
import { HomeBtn } from '../components/Svgs';

const Home = styled.div`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);

    background-color: #FCF6F4;
    padding: 0.3rem;
    border-radius: 50%;
    border: 1px solid #000;
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    cursor: pointer;

    transition: 0.25s;

    &:hover {
        transition: 0.25s;
        color: #471b47;
        /* background-color: rgba(0,255,0,0.4); */
        /* box-shadow: 0 0 8px 6px rgba(0,255,0,0.2); */
    }

    &>*:first-child {
        color: inherit;
    }

    &>*:first-child:hover {
        transform: scale(1.25);
    }

    @media screen and (max-width: 500px) {
        width: 2rem;
        height: 2rem;
        >a>svg {
            width: 25px;
            height: 25px;
        }
    }
`

const HomeButton = () => {
    return (
        <Home>
            <NavLink to='/'>
                <HomeBtn width={30} height={30} fill='currentColor' />
            </NavLink>
        </Home>
    )
}

export default HomeButton;