import React, { lazy, Suspense } from 'react';

// Style Components
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import { motion } from 'framer-motion';

// Components
import ParticlesComponent from '../subComponents/ParticlesComponent';
import Loading from "../subComponents/Loading";
const HomeButton = lazy(() => import("../subComponents/HomeButton"));
const LogoComp = lazy(() => import("../subComponents/LogoComp.jsx"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons.jsx"));

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
    z-index: 3;
`

const Flex = styled(motion.div)`
    display: flex;
    flex-direction: row;
    gap: 15rem;
    
    >div {
        background-color: #000;
        width: 35rem;
        height: 60vh;
        border-radius: 5px;
        text-align: center;
    }

    @media screen and (max-width: 1500px) {
        gap: 5rem;
        max-width: 1500px;

        >div {
            width: 25rem;
        }
    }

    @media screen and (max-width: 1000px) {
        gap: 5rem;
        max-width: 1000px;

        >div {
            width: 19rem;
        }
    }

    @media screen and (max-width: 850px) {
        gap: 5rem;
        max-width: 850px;

        >div {
            width: 17.5rem;
        }
    }

    @media screen and (max-width: 768px) {
        gap: 2rem;
        /* margin-top: -10rem; */
        max-width: 768px;

        >div {
            width: 17.5rem;
            height: 50vh;
            border-radius: 5px;
            text-align: center;
        }
    }

    @media screen and (max-width: 715px) {
        gap: 2rem;
        /* margin-top: -10rem; */
        max-width: 715px;

        >div {
            width: 15rem;
            height: 50vh;
            border-radius: 5px;
            text-align: center;
        }
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        max-width: 500px;
        gap: 1rem;
        padding-top: 2.5rem;

        >div {
            width: 15rem;
            height: 40vh;
        }
    }
`

const Title = styled(motion.h1)`
    padding-top: 2rem;
    color: #fff;
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    >svg {
        margin-top: -0.25rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.45rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.25rem;
    }
`

const Line = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 2px;
    background: linear-gradient(to right, violet, blue);
`

const Details = styled.div`
    color: #fff;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    text-align: left;
    margin-left: 1.5rem;
    letter-spacing: 2px;

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`

const SubDetails = styled.div`
    color: #fff;
    font-size: 1.35rem;
    margin-top: 1.5rem;
    text-align: left;
    margin-left: 1.5rem;
    letter-spacing: 2px;

    @media screen and (max-width: 500px) {
        margin-top: 0rem;
        font-size: 0.9rem;
    }
`

const Skills = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ThemeProvider theme={lightTheme}>
                <Box>
                    <LogoComp theme='light' />
                    <SocialIcons theme='light' />
                    <HomeButton />
                    <ParticlesComponent theme='light' />

                    <Main>
                        <Flex
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: 'spring', duration: 1, delay: 0.25 }}
                        >
                            <div>
                                <Title
                                    initial={{ opacity: 0, marginLeft: '-35px' }}
                                    animate={{ opacity: 1, marginLeft: '0px' }}
                                    transition={{ type: 'spring', duration: 1, delay: 1 }}
                                >
                                    <svg id="skill-icon" xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" viewBox="0 0 24 24">
                                        <path stroke="violet" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    Front End Skills
                                </Title>
                                <br />
                                <Line />
                                <Details>
                                    •HTML<br />
                                    •CSS<br />
                                    •JS<br /><br />
                                    •React JS<br />
                                </Details>
                                <br />
                                <SubDetails>
                                    I love to make<br />
                                    Responsive Web Design
                                </SubDetails>
                            </div>

                            <div>
                                <Title
                                    initial={{ opacity: 0, marginLeft: '35px' }}
                                    animate={{ opacity: 1, marginLeft: '0px' }}
                                    transition={{ type: 'spring', duration: 1, delay: 1 }}
                                >
                                    <svg id="skill-icon" xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" viewBox="0 0 24 24">
                                        <path stroke="violet" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    Back End Skills
                                </Title>
                                <br />
                                <Line />
                                <Details>
                                    •Ruby on Rails<br /><br />
                                    •SQL<br />
                                    •MySQL<br />
                                </Details>
                                <br />
                                <SubDetails>
                                    I love to handle datas<br />
                                    Make ERD, and Analyze ERDs<br />
                                    Making API for Front Ends
                                </SubDetails>
                            </div>
                        </Flex>
                    </Main>

                </Box>

            </ThemeProvider>
        </Suspense>
    )
}

export default Skills