import styled from 'styled-components';

export const SingleRowContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const Image = styled.img`
    display: flex;
    object-fit: cover;
    width:207px;
    height:306px;
    margin-right: 10px;
    cursor: pointer;
    border-radius:5px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:200px;
    position: relative;
    /* height:60px; */
`;
export const InfoTitle = styled.h4`
    color:#fff;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    padding-top:8px;
    height:30px;
    overflow: hidden;
    overflow-wrap:break-word;

`;

export const Year = styled.h5`
    color:gray;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin: 10px 0;
`;

export const Flex = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    background-color: #fff;
`;

export const VoteContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 2px;
`;
