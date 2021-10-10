import React from 'react'
import styled from 'styled-components';


const ButtonR = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({bgColor}) => bgColor ? bgColor : "#000"};
    padding: ${({padding})=> padding?padding : "3px 3px"};
    font-weight: 400;
    font-size: ${({size})=> size?size : "1rme"};
    color: ${({color})=> color?color : "white"};
    border-radius: .85vw;
    letter-spacing:.03rem;
`;
export const BtnRight = styled(ButtonR)`
    position: fixed;
    right:25px;
`;
export const BannerButton = styled(ButtonR)`
    width:130px;
    height:40px;
    border-radius: 20px;
`;


export default ButtonR;
