import styled from 'styled-components';

export const LoginContainer  = styled.div`
    position: relative;
    height: 100vh;
    width:100%;
    overflow: hidden;
    background: url("https://assets.nflxext.com/ffe/siteui/vlv3/9b3267c9-5086-4550-92f1-eddc22a1f78e/b9213140-c992-4152-83f6-43dcc50e9800/ET-en-20211004-popsignuptwoweeks-perspective_alpha_website_medium.jpg"),center ,  no-repeat;
    background-size: cover;
`;

export const LoginScreenGradient = styled.div`
    position: absolute;
    top:0;
    width: 100%;
    height:100vh;
    z-index: 1;
    background-color: rgba(0,0,0,0.6);
    background-image: linear-gradient(
        to top ,
        rgba(0,0,0,0) 100%,
        rgba(0,0,0,0.0) 0,
        rgba(0,0,0,0) 60%,
    );
`;

export const LoginInfo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%,-50%);
    z-index: 999;
    width:700px;
`;

export const Title = styled.h1`
    width:100%;
    margin: 0 auto;
    max-width: 600px;
    text-align: center;
    color:#fff;
    font-size: 3rem;
    line-height: 4rem;
    font-weight: bolder;
    font-family: 'Poppins', sans-serif;

`;

export const Description = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    text-align:center;
    margin: 1rem 0 ;
    color:#fff;
    `;

export const RegisterInfo = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    text-align:center;
    margin: 1rem 0 ;
    color:#fff;

`;

export const LoginInputContainer = styled.form`
    display: flex;
    width: 650px;
    height:55px
`;

export const Input = styled.input`
    display: flex;
    width:100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size:1rem;
    padding: 0.3rem .5rem;
`;

