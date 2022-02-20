import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Style Components
import styled from 'styled-components';
import '../index.css';

// Components
import HomeButton from '../subComponents/HomeButton';
import LogoComp from '../subComponents/LogoComp';
import SocialIcons from '../subComponents/SocialIcons';
import Intro from './Intro';

// Framer Motion
import { motion } from 'framer-motion';

const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    position: relative;

    h2,h3,h4,h5,h6 {
        font-family: 'Karla', sans-serif;
        font-size: 1.5rem;
        font-weight: 550;
    }
`

const Container = styled.div`
    padding: 2rem;
`

const Contact = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;

    @media screen and (max-width: 500px) {
        color: ${props => props.click ? props.theme.body : props.theme.text};
        font-size: 0.5rem;
        &>:last-child {
            font-size: 1rem;
        }
    }
`

const Comments = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    right: calc(0.25rem + 0vw);
    transform: rotate(90deg) translate(-50%,-50%);
    text-decoration: none;
    z-index: 1;

    @media screen and (max-width: 500px) {
        color: ${props => props.click ? props.theme.body : props.theme.text};
        right: -0.75rem;
        
        &>:last-child {
            text-shadow: ${props => props.click ? 'rgb(0 0 0) 0px 0px 4px;' : null};
            font-size: 1rem;
        }
    }
`

const Projects = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    position: absolute;
    top: 45%;
    left: 3rem;
    transform: translate(-50%,-45%) rotate(-90deg);
    text-decoration: none;
    z-index: 1;

    @media screen and (max-width: 500px) {
        text-shadow: ${props => props.click ? 'rgb(0 0 0) 0px 0px 4px;' : null};
        left: 2rem;
        &>:last-child {
            font-size: 1rem;
        }
    }
`

const BottomNav = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    width: 100%;

    display: flex;
    justify-content: space-evenly;
`

const About = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;

    @media screen and (max-width: 500px) {
        color: #000 !important;
        &>:last-child {
        padding-top: 0rem;
        font-size: 1rem;
        }
    }
`

const Skills = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;

    @media screen and (max-width: 500px) {
        &>:last-child {
        padding-top: 0rem;
        font-size: 1rem;
        }
    }
`

const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left: ${props => props.click ? '92%' : '50%'};
    transform: translate(-50%,-50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.75s ease;

    &>:last-child {
        display: ${props => props.click ? 'none' : 'inline-block'};
        padding-top: 1rem;
        font-size: 1.25rem;
        font-weight: 550;
        white-space: nowrap;
    }

    @media screen and (max-width: 500px) {
        top: ${props => props.click ? '87.5%' : '50%'};
        left: ${props => props.click ? '85%' : '50%'};
        /* width: 90px;
        height: 90px; */

        &>:last-child {
        padding-top: 0rem;
        font-size: 1rem;
        }
    }

`

const DarkDiv = styled.div`
    position: absolute;
    top: 0;
    background: #000;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;

    @media screen and (max-width: 500px) {
        right: 0%;
        width: ${props => props.click ? '100%' : '0%'};
        height: ${props => props.click ? '50%' : '0%'};
    }
`

const Main = () => {

    /* State Management */

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <DarkDiv click={click} />
            <Container>
                <HomeButton />
                <LogoComp theme={click ? 'dark' : 'light'} />
                <SocialIcons click={click} theme={click ? 'dark' : 'light'} />

                <Center click={click}>
                    <svg onClick={() => handleClick()} className="binocular" id="binocular" xmlns="http://www.w3.org/2000/svg" width={click ? 100 : 200} height={click ? 100 : 200} viewBox="0 0 24 24" fill="none">
                        <path d="M19.447 5.345A3.27 3.27 0 0 0 16.29 3a3.293 3.293 0 0 0-3.277 3h-2.025a3.297 3.297 0 0 0-3.284-3 3.268 3.268 0 0 0-3.151 2.345l-2.511 8.368A1.027 1.027 0 0 0 2 14v1a5.006 5.006 0 0 0 5.001 5 5.003 5.003 0 0 0 4.576-3h.846a5.003 5.003 0 0 0 4.576 3A5.006 5.006 0 0 0 22 14.999V14c0-.098-.015-.194-.042-.287l-2.511-8.368zM7.001 18A3.005 3.005 0 0 1 4 15c0-.076.017-.147.022-.222A2.995 2.995 0 0 1 7 12a3 3 0 0 1 3 3v.009A3.004 3.004 0 0 1 7.001 18zm9.998 0A3.004 3.004 0 0 1 14 15.009V15a3 3 0 0 1 6-.001A3.005 3.005 0 0 1 16.999 18z" stroke="black" stroke-width="1"></path>
                    </svg>
                    <span>Isaac Sarte</span>
                </Center>

                <Contact click={click} target="_blank" to={{ pathname: "mailto:sarteisaac09@gmail.com" }}>
                    <motion.h3
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Contact Me..
                    </motion.h3>
                </Contact>

                <Comments to='/comments' click={click}>
                    <motion.h3
                        className="comment-h3"
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        See Comments
                    </motion.h3>
                </Comments>

                <Projects to="/projects" click={click}>
                    <motion.h3
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        My Projects
                    </motion.h3>
                </Projects>

                <BottomNav>

                    <About to='/about' click={click}>
                        <motion.h3
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            About Me
                        </motion.h3>
                    </About>

                    <Skills to='/skills'>
                        <motion.h3
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            My Skills
                        </motion.h3>
                    </Skills>

                </BottomNav>

            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main