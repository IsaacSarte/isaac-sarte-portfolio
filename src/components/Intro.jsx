import React from 'react';

// Style Components
import styled from 'styled-components';
import '../index.css';

// Images
import Me from '../assets/Images/bg.png';

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
        #624bc9 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
            to right,
            #3460db 50%,
            ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;

    border-left: 2px solid #421ceb;
    border-right: 2px solid ${props => props.theme.text};
    z-index: 1;

    @media screen and (max-width: 500px) {
        width: 65vw;
        height: 60vh !important;
        background: none;
        border: none;
        border-top: 2px solid #421ceb;
        border-bottom: 2px solid ${(props) => props.theme.text};
        background-image: linear-gradient(
            #624bc9 50%,
            ${(props) => props.theme.text} 50%
        ),
        linear-gradient(
            #3460db 50%,
            ${(props) => props.theme.text} 50%
        );
        background-size: 2px 100%;
        background-position: 0 0, 100% 0;
        background-repeat: no-repeat;
    }
`

const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;

    .img {
        position: absolute;
        bottom: 7.5px;
        left: 50%;
        transform: translate(-50%,0%);
        width: 100%;
        height: 70vh;
        filter: drop-shadow(0px 10px 3px black); 
    }

    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        .img {
            filter: drop-shadow(0px 10px 3px black); 
            bottom: 7.5px;
            height: 30vh;
            padding-right: 1rem;
        }
    }
`

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h3 {
        font-size: 4rem;
    }

    &>*:last-child {
        color: #bdbdbd;
        font-size: calc(0.5rem + 1.5vw);
        font-weight: 300;
    }

    @media screen and (max-width: 500px) {
        padding: 1rem;
        gap: 1rem;
        margin-top: 1rem;
        h3 {
            font-size: 1.5rem;
            white-space: nowrap;
        }
        h6 {
            white-space: nowrap;
        }
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
                    <motion.h6
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        An Aspiring Web Developer and <br />loves Music from the Philippines.
                    </motion.h6>
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