import styled, { css } from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.gray};
    font-size: 17px;
    margin-left: 20px;
    cursor: pointer;

    ${({ disabled }) => disabled && css`
        filter: brightness(130%);        
    `};

    &:hover{
        transition: color 1.5s;
        filter: brightness(130%);   
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;        
    };

`;