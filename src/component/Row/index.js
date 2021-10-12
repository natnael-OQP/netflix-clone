import styled from 'styled-components';

export const RowContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding:20px 30px;
`;

export const Title = styled.h3`
    color:#fff;
    font-size: 1.3rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin: 10px 0;
`;
export const ComponentName = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:.5rem;
    .MuiSvgIcon-root{
        color: white !important;
        margin-left: .2rem;
        font-weight: bold !important;
    }
`;