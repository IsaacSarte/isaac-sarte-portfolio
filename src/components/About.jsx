import React, { lazy, Suspense, useState } from 'react';
import { NavLink } from "react-router-dom";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

// Style Components
import '../index.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';

// Framer Motion
import { motion } from 'framer-motion';

// Components
import Loading from "../subComponents/Loading";
import ParticlesComponent from '../subComponents/ParticlesComponent';
import LogoComp from '../subComponents/LogoComp';
import HomeButton from '../subComponents/HomeButton';

import RightArrow from '../subComponents/RightArrow';

import Plane from '../subComponents/Plane';

const Macbook = lazy(() => import('../subComponents/Macbook'));

const MainContainer = styled(motion.div)`
  background-color: #030303;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-x: hidden;

  canvas {
      overflow: hidden;
      margin-top: 0vh;
      height: 250px;
  }

  >span {
      color: #fff;
      position: fixed;
      bottom: 25vh;
      margin-bottom: auto;
      text-align: center;
      left: 50%;
      transform: translate(-50%, 0);
      font-size: 2rem;
      font-style: italic;
  }

  @media screen and (max-width: 500px) {
    canvas {
        overflow: hidden;
        margin-top: -5vh;
    }

    >span {
        font-size: 1.15rem;
        bottom: 30vh;
    }
  }
`

const CommentTitle = styled.h1`
    position: fixed;
    top: 5rem;
    left: 7rem;
    font-size: 6rem;
    opacity: 0.7;
    color: #fff;

    >span {
        font-size: 12.5rem;
    }

    @media screen and (max-width: 500px) {
        top: 5.5rem;
        left: 4rem;
        font-size: 2rem;
        opacity: 0.7;

        >span {
            font-size: 4rem;
        }
    }
`

const About = () => {

    /* State Management */

    const [click, setClick] = useState(false);
    const [path, setPath] = useState("");

    const handleClick = () => setClick(!click);

    console.log(handleClick);

    const moveX = {
        x: `${path === "about-music" ? "-100%" : null}`,
    };

    return (
        <Suspense fallback={<Loading />}>
            <ThemeProvider theme={darkTheme}>
                <MainContainer
                    key='skills'
                    initial={{ opacity: 0 }
                    }
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    exit={path === 'about-music' ? moveX : null}
                    transition={{ duration: 0.5 }}
                >
                    <LogoComp theme='dark' />
                    <HomeButton />

                    <CommentTitle>
                        <span>A</span>bout Me
                    </CommentTitle>

                    <NavLink
                        to="/about-music"
                        click={click}
                        onClick={() => setPath("about-music")}
                    >
                        <RightArrow />
                    </NavLink>

                    <ParticlesComponent theme='dark' />

                    <motion.span
                        initial={{ opacity: 0, bottom: '15vh' }}
                        animate={{ opacity: 1, bottom: '20vh' }}
                        transition={{ type: 'spring', duration: 1.25, delay: 1 }}
                    >
                        "I like to create well defined solutions <br />
                        for every well defined specific problems using my knowledge in the <br />
                        Web Development Industry."
                    </motion.span>

                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={5} />
                        <directionalLight position={[-5, 15, 5, 5, -5]} intensity={1} />
                        <Macbook className="macbook" scale={6} />
                    </Canvas>

                    <Plane />

                </MainContainer>
            </ThemeProvider>
        </Suspense>
    )
}

export default About