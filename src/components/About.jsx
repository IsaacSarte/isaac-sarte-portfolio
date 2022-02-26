import React, { Suspense, useState } from 'react';
import { NavLink } from "react-router-dom";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

// Style Components
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import RightArrow from '../subComponents/RightArrow';

// Framer Motion
import { motion } from 'framer-motion';

// Components
import ParticlesComponent from '../subComponents/ParticlesComponent';
import LogoComp from '../subComponents/LogoComp';
import HomeButton from '../subComponents/HomeButton';

import Mac from '../subComponents/Mac';
import Plane from '../subComponents/Plane';

const MainContainer = styled(motion.div)`
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  canvas {
      margin-top: 5vh;
      height: 250px;
  }
`

const About = () => {

    /* State Management */

    const [click, setClick] = useState(false);
    const [path, setPath] = useState("");

    const handleClick = () => setClick(!click);

    const moveX = {
        x: `${path === "games" ? "-100%" : null}`,
    };


    return (
        <Suspense fallback={null}>
            <ThemeProvider theme={darkTheme}>
                <MainContainer
                    key='skills'
                    initial={{ opacity: 0 }
                    }
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    exit={path === 'games' ? moveX : null}
                    transition={{ duration: 0.5 }}
                >
                    <LogoComp theme='dark' />
                    <HomeButton />

                    <NavLink
                        to="/about-games"
                        click={click}
                        onClick={() => setPath("games")}
                    >
                        <RightArrow />
                    </NavLink>

                    <ParticlesComponent theme='dark' />

                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={2} />
                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                        <Mac />
                    </Canvas>

                    <Plane />

                </MainContainer>
            </ThemeProvider>
        </Suspense>
    )
}

export default About