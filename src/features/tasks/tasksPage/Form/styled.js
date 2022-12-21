import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-column-gap:20px;
    grid-template-columns: 1fr 20%;
    padding-top: 10px;

    @media (max-width: 767px) {    
        display: flex;
        flex-direction: column;
    }
`;

