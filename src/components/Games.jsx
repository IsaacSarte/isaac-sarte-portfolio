import React, { Suspense, useState } from 'react';
import { NavLink } from "react-router-dom";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

// Style Components
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';

// Framer Motion
import { motion } from 'framer-motion';

// Components
import ParticlesComponent from '../subComponents/ParticlesComponent';
import LogoComp from '../subComponents/LogoComp';
import HomeButton from '../subComponents/HomeButton';

import Pc from '../subComponents/Pc';
import Plane from '../subComponents/Plane';

import RightArrow from '../subComponents/RightArrow';
import LeftArrow from '../subComponents/LeftArrow';

const MainContainer = styled(motion.div)`
  background-color: #030303;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const Games = () => {

    /* State Management */

    const [click, setClick] = useState(false);
    const [path, setPath] = useState("");

    const handleClick = () => setClick(!click);

    console.log(handleClick);

    const moveX = {
        x: `${path === "music" ? "-100%" : null}`,
    };

    const moveNegX = {
        x: `${path === "about" ? "100%" : null}`,
    }

    return (
        <Suspense fallback={null}>
            <ThemeProvider theme={darkTheme}>
                <MainContainer
                    initial={{ opacity: 0 }
                    }
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    exit={path === 'music' ? moveX : moveNegX}
                    transition={{ duration: 0.5 }}
                >
                    <LogoComp theme='dark' />
                    <HomeButton />

                    <NavLink
                        to="/about-music"
                        click={click}
                        onClick={() => setPath("music")}
                    >
                        <RightArrow />
                    </NavLink>

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
                        <Pc className="pc" scale={0.30} />
                    </Canvas>

                    <Plane />

                </MainContainer>
            </ThemeProvider>
        </Suspense>
    )
}

export default Games