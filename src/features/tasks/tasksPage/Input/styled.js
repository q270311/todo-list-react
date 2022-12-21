import styled, { css } from "styled-components";

export const Input = styled.input`
    height: 40px;
    ${({ type }) => type === "text" && css`   
        
        //margin-right: 20px;
        border: 2px solid #dad5d5;

        @media (max-width: 767px) {    
            width: 100%;
            margin-bottom: 10px;
        }
    `};

    ${({ type }) => type === "submit" && css`
        
        height: 40px;
        background-color: teal;
        color: white;
        border: 2px solid teal;
        cursor: pointer;

        &:hover{
            transition: 1s;
            transform: scale(1.05);
            background-color: rgb(41, 141, 141);
        }

        @media (max-width: 767px) {    
            width: 100%;
        }
    `};
`;
