import React, { lazy, Suspense, useState } from "react";
import { NavLink } from "react-router-dom";

// Style Components
import styled from "styled-components";
import '../index.css';
import { motion } from "framer-motion";

//Components
import Intro from "./Intro.jsx";
import Loading from "../subComponents/Loading";

const HomeButton = lazy(() => import("../subComponents/HomeButton"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons.jsx"));

const LogoComp = lazy(() => import("../subComponents/LogoComp.jsx"));


const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h2,h3,h4,h5,h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 550;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;

  & > *:last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
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
            white-space: nowrap;
        }
    }
`;

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
`;

const Comments = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;

  text-decoration: none;

  @media screen and (max-width: 500px) {
        color: ${props => props.click ? props.theme.body : props.theme.text};
        right: -0.75rem;
        
        &>:last-child {
            text-shadow: ${props => props.click ? 'rgb(0 0 0) 0px 0px 4px;' : null};
            font-size: 1rem;
        }
    }
`;

const Projects = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;

  @media screen and (max-width: 500px) {
        text-shadow: ${props => props.click ? 'rgb(0 0 0) 0px 0px 4px;' : null};
        left: 2rem;
        &>:last-child {
            font-size: 1rem;
        }
    }
`;

const BottomNav = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;

  @media screen and (max-width: 500px) {
        color: #000 !important;
        &>:last-child {
        padding-top: 0rem;
        font-size: 1rem;
        }
    }
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;

  @media screen and (max-width: 500px) {
        &>:last-child {
        padding-top: 0rem;
        font-size: 1rem;
        }
    }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  background-color: #000000;
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  @media screen and (max-width: 500px) {
        right: 0%;
        width: ${props => props.click ? '100%' : '0%'};
        height: ${props => props.click ? '50%' : '0%'};
    }
`;

const Main = () => {

    /* State Management */

    const [click, setClick] = useState(false);
    const [path, setPath] = useState("");

    const handleClick = () => setClick(!click);

    const moveY = {
        y: "-100%",
    };

    const moveX = {
        x: `${path === "projects" ? "100%" : "-100%"}`,
    };


    return (
        <Suspense fallback={<Loading />}>
            <MainContainer
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={path === "about" || path === "skills" ? moveY : moveX}
                transition={{ duration: 0.5 }}
            >
                <DarkDiv click={click} />
                <Container>
                    <LogoComp theme={click ? "dark" : "light"} />
                    <HomeButton />
                    <SocialIcons click={click} theme={click ? 'dark' : 'light'} />

                    <Center click={click}>
                        <svg onClick={() => handleClick()} className="binocular" id="binocular" xmlns="http://www.w3.org/2000/svg" width={click ? 100 : 250} height={click ? 100 : 250} viewBox="0 0 24 24" fill="none">
                            <path d="M19.447 5.345A3.27 3.27 0 0 0 16.29 3a3.293 3.293 0 0 0-3.277 3h-2.025a3.297 3.297 0 0 0-3.284-3 3.268 3.268 0 0 0-3.151 2.345l-2.511 8.368A1.027 1.027 0 0 0 2 14v1a5.006 5.006 0 0 0 5.001 5 5.003 5.003 0 0 0 4.576-3h.846a5.003 5.003 0 0 0 4.576 3A5.006 5.006 0 0 0 22 14.999V14c0-.098-.015-.194-.042-.287l-2.511-8.368zM7.001 18A3.005 3.005 0 0 1 4 15c0-.076.017-.147.022-.222A2.995 2.995 0 0 1 7 12a3 3 0 0 1 3 3v.009A3.004 3.004 0 0 1 7.001 18zm9.998 0A3.004 3.004 0 0 1 14 15.009V15a3 3 0 0 1 6-.001A3.005 3.005 0 0 1 16.999 18z" stroke="black" stroke-width="1"></path>
                        </svg>
                        <h5>Isaac Dizon Sarte</h5>
                    </Center>

                    <Contact
                        click={+click}
                        target="_blank"
                        to={{ pathname: "mailto:sarteisaac09@gmail.com" }}>
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

                    <Comments
                        to='/comments'
                        click={click}
                        onClick={() => setPath("comments")}
                    >
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

                    <Projects to="/projects"
                        click={click}
                    >
                        <motion.h3
                            onClick={() => setPath("projects")}
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

                        <About
                            to='/about'
                            onClick={() => setClick(false)}
                            click={click}
                        >
                            <motion.h3
                                onClick={() => setPath("about")}
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
                                onClick={() => setPath("skills")}
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
        </Suspense>
    );
};

export default Main;
