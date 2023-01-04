import styled, { css } from "styled-components";

export const Input = styled.input`
    height: 40px;
    ${({ type }) => type === "text" && css`   
        
        border: 2px solid ${({ theme }) => theme.color.lightGray};

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {    
            width: 100%;
            margin-bottom: 10px;
        }
    `};

    ${({ type }) => type === "submit" && css`
        
        height: 40px;
        background-color: ${({ theme }) => theme.color.teal};
        color: white;
        border: 2px solid ${({ theme }) => theme.color.teal};
        cursor: pointer;

        &:hover{
            transition: 1s;
            transform: scale(1.05);
            filter: brightness(150%);
        }

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {    
            width: 100%;
        }
    `};
`;
