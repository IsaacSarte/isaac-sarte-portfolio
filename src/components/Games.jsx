import React, { Suspense, useState } from 'react';
import { NavLink } from "react-router-dom";

// Style Components
import styled from 'styled-components';

// Framer Motion
import { motion } from 'framer-motion';

import RightArrow from '../subComponents/RightArrow';
import LeftArrow from '../subComponents/LeftArrow';

const MainContainer = styled(motion.div)`

`

const Games = () => {
    return (
        <MainContainer
            initial={{ opacity: 0 }
            }
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >

        </MainContainer>
    )
}

export default Games