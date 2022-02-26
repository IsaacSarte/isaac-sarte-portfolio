import React from 'react';

// Style Components
import styled from 'styled-components';

const LeftNav = styled.div`
    cursor: pointer;
    position: absolute;
    top: 40%;
    left: calc(1rem + 2vw);
    z-index: 1;

    text-decoration: none;

    @media screen and (max-width: 500px) {
        >svg {
            width: 50px;
            height: 50px;
        }
    }
`

const LeftArrow = () => {
    return (
        <LeftNav>
            <svg xmlns="http://www.w3.org/2000/svg" className="arrow" id="arrow" width={100} height={100} viewBox="0 0 24 24" fil="none">
                <path stroke-width="1" stroke="white" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm2.707 14.293-1.414 1.414L7.586 12l5.707-5.707 1.414 1.414L10.414 12l4.293 4.293z">
                </path>
            </svg>
        </LeftNav>
    )
}

export default LeftArrow