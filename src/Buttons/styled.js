import styled, { css } from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: gray;
    font-size: 17px;
    margin-left: 20px;
    cursor: pointer;

    ${({ disabled }) => disabled && css`
        color: #cecccc;        
    `};

    &:hover{
        transition: color 1.5s;
        color: #cecccc;
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;        
    };

`;