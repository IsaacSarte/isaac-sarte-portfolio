import React from 'react';

// Style Components
import styled from 'styled-components';

// Components
import HomeButton from '../subComponents/HomeButton';

const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    position: relative;

    h2,h3,h4,h5,h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }
`

const Container = styled.div`
    padding: 2rem;
`

const Main = () => {
    return (
        <MainContainer>
            <Container>
                <HomeButton />
            </Container>
        </MainContainer>
    )
}

export default Main