import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";

export const List = styled.ul`
    width: 100%;
    list-style: none;
    padding:0px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-auto-rows: minmax(40px, auto);
    align-items: center;
    border-bottom: 1px solid #dad5d5;
    padding: 10px 0px;
    visibility: visible;

    ${({ hidden }) => hidden && css`
        display: none;
    `};
`;

export const Content = styled.span`
    margin: 0px 10px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `};
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    color: white;
    cursor: pointer;
    border: none;

    ${({ toggleDone }) => toggleDone && css`
        background-color: hsl(120, 50%, 41%);

        &:hover{
            background-color: hsl(120, 36%, 47%);
        }
    `};

    ${({ remove }) => remove && css`
        background-color: rgb(199, 26, 26);

        &:hover{
            background-color: hsl(0, 49%, 50%);
        }
    `};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: gray;
`;