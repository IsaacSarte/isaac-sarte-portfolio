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
      position: absolute;
      margin: 0 auto;
      text-align: center;
      left: 50%;
      transform: translate(-50%, 0);
      font-size: 2rem;
      font-style: italic;
    }

  @media screen and (max-width: 768px) {
    canvas {
        overflow: hidden;
        margin-top: 5vh;
    }

    >span {
        margin-top: 5rem;
        font-size: 1.15rem;
        bottom: 0vh;
    }
  }

  @media screen and (max-width: 639px) {
    canvas {
        overflow: hidden;
        margin-top: 0vh;
    }

    >span {
        margin-top: 5rem;
        font-size: 1.10rem;
        bottom: 0vh;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    >span {
        font-size: 1.5rem;
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

    >p {
      color: #fff;
      font-size: 1rem;
    }

    @media screen and (max-width: 639px) {
        top: 5.5rem;
        left: 4rem;
        font-size: 2rem;
        opacity: 0.7;

        >span {
            font-size: 4rem;
        }
    }

    @media screen and (min-width: 1024px) and (max-width: 1440px) {
        top: 5.5rem;
        left: 7rem;
        font-size: 5rem;
        opacity: 0.7;

        >span {
            font-size: 7.5rem;
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
                        <span>A</span>bout Me <br />
                        <p>hold macbook to rotate</p>
                    </CommentTitle>

                    <NavLink
                        to="/about-music"
                        click={click}
                        onClick={() => setPath("about-music")}
                    >
                        <RightArrow />
                    </NavLink>

                    <ParticlesComponent theme='dark' />

                    <Canvas className="mt-4 mb-4">
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={5} />
                        <directionalLight position={[-5, 15, 5, 5, -5]} intensity={1} />
                        <Macbook className="macbook" scale={6} />
                    </Canvas>

                    <motion.span
                        className="sm:text-sm md:text-sm"
                        initial={{ opacity: 0, bottom: '15vh' }}
                        animate={{ opacity: 1, bottom: '20vh' }}
                        transition={{ type: 'spring', duration: 1.25, delay: 1 }}
                    >
                        "I like to create well defined solutions <br />
                        for every well defined specific problems using my knowledge in the <br />
                        Web Development Industry."
                    </motion.span>

                </MainContainer>
            </ThemeProvider>
        </Suspense>
    )
}

export default About
