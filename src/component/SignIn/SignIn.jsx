import React from 'react';
import styled,{css} from 'styled-components/macro';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import { Input, SignInContainer,SignUpContainer,SignUpNow } from '.'
import { Title } from '.'
import ButtonR from '../Button/Button'
const SignIn = () => {
    
    return (
        <SignInContainer>
            <Title>Sign In</Title>
            <Input type="text" placeholder="full name"  />
            <Input type="email" placeholder="Email address" required />
            <br/>
            <ButtonR
                type="submit"
                size=".89rem"
                padding="7px 17px"
                bgColor="#e50914"
                width="100%"
                css={`
                    border-radius:5px;
                    height:35px;
                    `}
            >Sign In  </ButtonR>
            <br/>
            
            <ButtonR
                type="submit"
                size=".89rem"
                padding="7px 17px"
                bgColor="#4285F4"
                width="100%"
                css={`
                        height:35px;
                        border-radius:5px;
                    :hover{
                        background-color:#4285F4 !important;
                    }
                `}
            >Sign In with Google </ButtonR>
            <SignUpContainer>New to Etflix? <SignUpNow> Sign Up Now <ArrowForwardIos fontSize="small" /></SignUpNow> </SignUpContainer>
        </SignInContainer>
    )
}

export default SignIn
