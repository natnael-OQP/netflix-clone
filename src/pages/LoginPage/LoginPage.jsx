import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import React, { useState } from 'react'
import { Description, Input, LoginContainer, LoginInfo, LoginInputContainer, LoginScreenGradient, RegisterInfo, Title } from '.'
import ButtonR, { BtnRight } from '../../component/Button/Button'
import { HederWrapper, Image } from '../../component/Header'
import SignIn from '../../component/SignIn/SignIn'

const LoginPage = () => {
    const [signIn,setSignIn] = useState(false)
    return (
        <LoginContainer>
            <HederWrapper>
                <Image src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <BtnRight size="1rem" padding="7px 17px" bgColor="#e50914" onClick={()=>setSignIn(true)} >Sign In</BtnRight>
            </HederWrapper>
            {
                signIn ? (
                    <SignIn/>
                ): (
                    <LoginInfo>
                        <Title>Unlimited movies, TV shows, and more.</Title>
                        <Description>Watch anywhere. Cancel anytime.</Description>
                        <RegisterInfo>
                            Ready to watch? Enter your email to create or restart your membership.
                        </RegisterInfo>
                        <LoginInputContainer>
                            <Input type="email" placeholder="Email address" required />
                            <ButtonR
                                    type="submit"
                                    size="1.1rem"
                                    padding="7px 17px"
                                    bgColor="#e50914"
                                    width="250px"
                                    onClick={()=>setSignIn(true)}
                                >Get Started                         <ArrowForwardIos fontSize="medium" />
                            </ButtonR>
                        </LoginInputContainer>
                    </LoginInfo>
                )
            }
            
            <LoginScreenGradient/>
        </LoginContainer>
    )
}

export default LoginPage
