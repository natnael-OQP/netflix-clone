import styled from 'styled-components';


export const SignInContainer = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%,-50%);
    z-index: 999;
    width:300px;
    height:350px;
    background-color: rgb(0,0,0,.9);
    padding:0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .MuiSvgIcon-root{
        color: white !important;
        margin-left: .5rem;
        font-weight: bold !important;
        font-size:1rem !important;
        font-weight: bold !important;
    }
`;

export const Title = styled.h2`
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    color:#fff;
`;

export const Input = styled.input`
    display: flex;
    width:100%;
    height: 40px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size:.9rem;
    padding: 0.3rem .5rem;
    margin:.6rem 0;
    border-radius:5px;
`;

export const SignUpContainer = styled.h4`
    margin-top:1rem;
    display:flex;
    align-items:center;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    color:gray;
    `;
export const SignUpNow = styled.span`
    display:flex;
    align-items:center;
    padding-left:.3rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    color:#fff;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;
