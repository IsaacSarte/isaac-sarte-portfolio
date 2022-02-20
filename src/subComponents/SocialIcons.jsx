import React from 'react';
import { NavLink } from 'react-router-dom';

// Style Components
import styled from 'styled-components';
import { Github, Facebook, YouTube } from '../components/Svgs';
import { darkTheme } from '../components/Themes.jsx';

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    &>*:not(:last-child) {
        margin: 0.5rem 0;
    }

    >div>a>svg {
        fill: ${props => props.click ? darkTheme.text : darkTheme.body};
    }

    @media screen and (max-width: 500px) {
        left: 1.25rem;
        >div>a>svg {
            width: 20px;
            height: 20px;
            fill: ${props => props.click ? darkTheme.body : darkTheme.body};
        }
    }
`

const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};

    @media screen and (max-width: 500px) {
        background-color: ${props => props.click ? darkTheme.body : darkTheme.body};
        height: 5rem;
    }
`

const SocialIcons = (props) => {
    const { click } = props;
    return (
        <Icons click={click}>
            <div click={click}>
                <NavLink click={click} style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/IsaacSarte" }}>
                    <Github className="icon-1" width={25} height={25} click={click} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "" }}>
                    <Facebook width={25} height={25} click={click} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "" }}>
                    <YouTube width={25} height={25} click={click} />
                </NavLink>
            </div>

            <Line color={props.theme} click={click} />
        </Icons>
    )
}

export default SocialIcons