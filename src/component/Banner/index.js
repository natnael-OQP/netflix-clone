import styled from 'styled-components';

export const BannerContainer = styled.div`
    object-fit: contain;
    height:620px;
    display: flex;
    align-items: center;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    
`;

export const BannerWrapper = styled.div`
    position: absolute;
    left: 100px;
    top:200px;
    color: #fff;
    margin-left: 100px;
    display:flex;
    flex-direction: column;
    max-width:35rem;
    /* opacity:1; */
    z-index: 99;
    @media(max-width:790px){
        left:10px;
        margin-left:0;
        top:200px;
        padding:10px
    }
`;

export const BannerTitle = styled.h1`
    font-size: 2.6rem;
    color:#fff;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    text-transform: capitalize;
    @media(max-width:790px){
        font-size: 2.2rem;
    }
`;

export const BannerDescription = styled.p`
    width:100%;
    padding: 1.5rem 0;
    line-height: 1.4;
    font-size:.9rem;
    letter-spacing: .03rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    @media(max-width:790px){
        font-size:.83rem;
    }
`;

export const ButtonContainer = styled.div`
    padding: 0 .5rem;
    width:60%;
    display: flex;
    justify-content:space-between;
    @media(max-width:600px){
        flex-direction: column;
        height:90px;
    }
`;

export const BannerFadeBottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height:100%;
    opacity:0.6;
    background-image: linear-gradient(to right top, #000000, #131114, #1a1d22, #1d292e, #233635);
`;
