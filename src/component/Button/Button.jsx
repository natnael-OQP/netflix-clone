import React from 'react'
import styled from 'styled-components';
const Btn = styled.button`
    position: fixed;
    right:25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e50914;
    padding: 7px 17px;
    font-weight: 400;
    font-size: 1rem;
    color: #fff;
    border-radius: 3px;
`;
const Button = ({title}) => {
    return (
        <Btn>
            {title}
        </Btn>
    )
}

export default Button;
