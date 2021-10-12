import styled from 'styled-components';

export const HederWrapper = styled.div`
    position: fixed;
    left:0;
    width:100%;
    display: flex;
    align-items: center;
    padding:30px;
    background-color:${({IsScroll}) => IsScroll ? '#000' : 'transparent'} ;
    transition: all .5s ease-in;
    z-index:99999;
`;

export const Image = styled.img`
    position: fixed;
    left:15px;
    object-fit: contain;
    width:100px;
    cursor: pointer;
`;

