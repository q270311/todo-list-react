import styled from "styled-components";

export const Segment = styled.section`
    background-color: white;
`;

export const Title = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    font-size: 20px;
    font-weight: 700;
    border-bottom: 1px solid rgb(218, 213, 213);

    @media (max-width: 767px) {    
        display: grid;
        grid-template-columns: 1fr;           
    }
`;