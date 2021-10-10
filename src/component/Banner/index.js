import styled from 'styled-components';

export const BannerContainer = styled.div`
    object-fit: contain;
    height:620px;
    display: flex;
    align-items: center;
    position: relative;
`;

export const BannerWrapper = styled.div`
    color: #fff;
    margin-left: 100px;
    display:flex;
    flex-direction: column;
    width:35rem;
`;

export const BannerTitle = styled.h1`
    font-size: 3rem;
    color:red;
    font-weight: 600;
    font-family: 'Helvetica Neue';
    text-transform: capitalize;
    /* margin:1rem 0; */
`;

export const BannerDescription = styled.p`
    width:100%;
    padding: 3rem 0;
    line-height: 1.4;
    font-size:1rem;
    letter-spacing: .03rem;
    font-weight: 400;
`;

export const ButtonContainer = styled.div`
    padding: 0 .5rem;
    width:60%;
    display: flex;
    justify-content:space-between;
`;

export const BannerFadeBottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 6.3rem;
    background: linear-gradient(180deg,transparent,rgba(37,37,37,0.6),#111);
`;
