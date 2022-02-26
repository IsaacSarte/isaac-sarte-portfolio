import React from 'react';

// Style Components
import styled from 'styled-components';
import '../index.css';

const RightNav = styled.div`
    cursor: pointer;
    position: absolute;
    top: 40%;
    right: calc(1rem + 2vw);
    z-index: 1;

    text-decoration: none;

    @media screen and (max-width: 500px) {
        >svg {
            width: 50px;
            height: 50px;
            margin-right: 1rem;
        }
    }
`

const RightArrow = () => {
    return (
        <RightNav>
            <svg xmlns="http://www.w3.org/2000/svg" className="arrow" id="arrow" width={100} height={100} viewBox="0 0 24 24" fil="none">
                <path stroke-width="1" stroke="white" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.293 15.707-1.414-1.414L13.586 12 9.293 7.707l1.414-1.414L16.414 12l-5.707 5.707z">
                </path>
            </svg>
        </RightNav>
    )
}

export default RightArrow