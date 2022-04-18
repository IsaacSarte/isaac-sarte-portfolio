import React, { lazy, Suspense, useState } from 'react';
import { NavLink } from "react-router-dom";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

// Style Components
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';

// Framer Motion
import { motion } from 'framer-motion';

// Components
import Loading from "../subComponents/Loading";
import ParticlesComponent from '../subComponents/ParticlesComponent';
import LogoComp from '../subComponents/LogoComp';
import HomeButton from '../subComponents/HomeButton';

import LeftArrow from '../subComponents/LeftArrow';

const Midi = lazy(() => import('../subComponents/Midi'));

const MainContainer = styled(motion.div)`
  background-color: #030303;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

    canvas {
      overflow: hidden;
      margin-top: -5vh;
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
      margin-left: 1.5rem;
    }

    @media screen and (max-width: 768px) {
        top: 7.5rem;
        font-size: 4rem;
        opacity: 0.7;

        >span {
            font-size: 4rem;
        }
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

const Music = () => {

    /* State Management */

    const [click, setClick] = useState(false);
    const [path, setPath] = useState("");

    const handleClick = () => setClick(!click);

    console.log(handleClick);

    const moveNegX = {
        x: `${path === "about" ? "100%" : null}`,
    }

    return (
        <Suspense fallback={<Loading />}>
            <ThemeProvider theme={darkTheme}>
                <MainContainer
                    initial={{ opacity: 0 }
                    }
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    exit={path === 'about' ? moveNegX : null}
                    transition={{ duration: 0.5 }}
                >
                    <LogoComp theme='dark' />
                    <HomeButton />

                    <CommentTitle>
                        <span>A</span>bout Me
                        <p>hold midi keyboard to rotate</p>
                    </CommentTitle>

                    <NavLink
                        to="/about"
                        click={click}
                        onClick={() => setPath("about")}
                    >
                        <LeftArrow />
                    </NavLink>

                    <ParticlesComponent theme='dark' />

                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={2} />
                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                        <Midi scale={0.5} />
                    </Canvas>

                    <motion.span
                        initial={{ opacity: 0, bottom: '15vh' }}
                        animate={{ opacity: 1, bottom: '20vh' }}
                        transition={{ type: 'spring', duration: 1.25, delay: 1 }}
                    >
                        "I like creating music as well, <br />
                        I enjoy playing piano, guitar, especially in <br />
                        making chill beats or lo-fi."
                    </motion.span>

                </MainContainer>
            </ThemeProvider>
        </Suspense>
    )
}

export default Music
