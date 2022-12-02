import styled, { css } from "styled-components";

export const NewTaskForm = styled.form`
    display: flex;
    justify-content: space-between;
    padding: 20px;

    @media (max-width: 767px) {    
        display: flex;
        flex-direction: column;
    }
`;

export const InputText = styled.input`
    ${({ type }) => type === "text" && css`
        width: 80%;
        height: 40px;
        margin-right: 20px;
        border: 2px solid #dad5d5;
        padding-left: 10px;

        @media (max-width: 767px) {    
            width: 100%;
            margin-bottom: 10px;
        }
    `};

    ${({ type }) => type === "submit" && css`
        width: 20%;
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