import React from 'react';
import { useHistory } from 'react-router';
import {css} from 'styled-components/macro';
import { Email, ProfileBody, ProfileContainer, ProfileDetail, ProfileImage, ProfilePlans } from '.'
import { BtnRight } from '../../component/Button/Button'
import { HederWrapper, Image, } from '../../component/Header';
import { Title } from '../../component/SignIn';

const ProfilePage = () => {
    const history = useHistory()
    return (
        <ProfileContainer>
            <HederWrapper css={` background-color: #111; `}>
                <Image onClick={()=>history.push("/")} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <BtnRight size="1rem" padding="7px 17px" bgColor="#e50914"  >Sign In</BtnRight>
            </HederWrapper>
            <ProfileBody>
                <Title css={' color:#000; font-size: 3rem; '} >Edit Me</Title>
                <profileInfo>
                    <ProfileImage src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' alt="profile" />
                    <ProfileDetail>
                        <Email></Email>
                        <ProfilePlans>
                        </ProfilePlans>
                    </ProfileDetail>
                </profileInfo>
            </ProfileBody>
        </ProfileContainer>
    )
}

export default ProfilePage
