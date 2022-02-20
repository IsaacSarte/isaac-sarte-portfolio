import React from 'react';

// Style Components
import styled from 'styled-components';
import '../index.css';

// Images
import Me from '../assets/Images/profile-img.png';

// Framer Motion
import { motion } from 'framer-motion';

const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 65vw;
    height: 55vh;
    display: flex;

    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
            to right,
            ${props => props.theme.body} 50%,
            ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;

    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index: 1;
`

const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;

    .img {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,0%);
        width: 100%;
        height: auto;
    }
`

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    &>*:last-child {
        color: ${props => `rgba(${props => props.theme.bodyRgba},0.6)`}
        font-size: calc(0.5rem + 1.5vw);
        font-weight: 300;
    }
`

const Intro = () => {
    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I am Isaac Sarte.</h3>
                    <h6>An Aspiring Web Developer and loves Music from the Philippines.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className="img" src={Me} alt="bg" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro