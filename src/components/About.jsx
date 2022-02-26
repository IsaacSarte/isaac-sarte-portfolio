import React, { Suspense } from 'react';

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

import Mac from '../subComponents/Mac';
import Plane from '../subComponents/Plane';

const MainContainer = styled(motion.div)`
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  canvas {
      margin-top: 10vh;
      height: 300px;
  }
`

const About = () => {
    return (
        <Suspense fallback={null}>
            <ThemeProvider theme={darkTheme}>
                <MainContainer
                    key='skills'
                    initial={{ opacity: 0 }
                    }
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <LogoComp theme='dark' />
                    <HomeButton />
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