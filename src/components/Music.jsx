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

import Plane from '../subComponents/Plane';

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

  @media screen and (max-width: 500px) {
    canvas {
      overflow: hidden;
      margin-top: -15vh;
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
                        <Midi scale={0.75} />
                    </Canvas>

                    <Plane />

                </MainContainer>
            </ThemeProvider>
        </Suspense>
    )
}

export default Music