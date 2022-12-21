import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: teal;
    text-align: center;
`;

export const Ul = styled.ul` 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
`;

export const Li = styled.li`
    margin: 0px 20px;
`;
const activeClassName = "activeLink";
export const StyledActiveLink = styled(NavLink).attrs(()=>({
    activeClassName,
}))`
    color: white;
    text-decoration: none;

    &${activeClassName}{
        font-weight: bold;
    };

    &:hover{
        font-weight: bold;
    };
`;

