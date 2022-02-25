import React from 'react';

// Style Components
import styled from 'styled-components';

// Framer Motion
import { motion } from 'framer-motion'
import SocialIcons from '../subComponents/SocialIcons';

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const About = () => {
    return (
        <Box
            key='skills'
            initial={{ opacity: 0 }
            }
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <SocialIcons theme='dark' />
        </Box >
    )
}

export default About