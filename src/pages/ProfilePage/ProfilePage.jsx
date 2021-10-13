import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {css} from 'styled-components/macro';
import { Email, Plan, PlanName, PlanNameWrapper, PlanQuality, PlansTitle, ProfileBody, ProfileContainer, ProfileDetail, ProfileImage, ProfileInfo, ProfilePlans,Time,Title } from '.'
import ButtonR, { BtnRight } from '../../component/Button/Button'
import { HederWrapper, Image, } from '../../component/Header';
import { SelectUser } from '../../features/userSlice';
import {auth} from '../../database/firebase'

const ProfilePage = () => {
    const history = useHistory();
    const user = useSelector(SelectUser)
    return (
        <ProfileContainer>
            <HederWrapper css={` background-color: #111; `}>
                <Image onClick={()=>history.push("/")} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <BtnRight size="1rem" padding="7px 17px" bgColor="#e50914"  >Sign In</BtnRight>
            </HederWrapper>
            <ProfileBody>
                <Title css={' color:#fff; font-size: 3rem; '} >Edit Profile</Title>
                <ProfileInfo>
                    <ProfileImage src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' alt="profile" />
                    <ProfileDetail>
                        <Email>{user.email}</Email>
                        <ProfilePlans>
                            <PlansTitle>plans</PlansTitle>
                            <Time>Renewal Date:09/11/2020 </Time>
                            <Plan>
                                <PlanNameWrapper>
                                    <PlanName>Etflix Standard </PlanName>
                                    <PlanQuality>1080P</PlanQuality>
                                </PlanNameWrapper>
                                <ButtonR  size=".89rem" padding="7px 17px" bgColor="#e50914" css={` border-radius:3px; height:35px;`}>Subscribe</ButtonR>
                            </Plan>
                            <Plan>
                                <PlanNameWrapper>
                                    <PlanName>Etflix Basic </PlanName>
                                    <PlanQuality>480P</PlanQuality>
                                </PlanNameWrapper>
                                <ButtonR  size=".89rem" padding="7px 17px" bgColor="#e50914" css={` border-radius:3px; height:35px;`}>Subscribe</ButtonR>
                            </Plan>
                            <Plan>
                                <PlanNameWrapper>
                                    <PlanName>Etflix Standard </PlanName>
                                    <PlanQuality>4K+HDR</PlanQuality>
                                </PlanNameWrapper>
                                <ButtonR  size=".89rem" padding="7px 17px" bgColor="#e50914" css={` border-radius:3px; height:35px;`}>Subscribe</ButtonR>
                            </Plan>
                            
                            <ButtonR  size=".89rem" padding="7px 17px" bgColor="#e50914" width="100%"
                                css={` 
                                        margin-top:.5rem; 
                                        border-radius:5px;
                                        height:35px;`}
                                onClick={()=> auth.signOut()}
                                >Sign Out</ButtonR>
                        </ProfilePlans>
                    </ProfileDetail>
                </ProfileInfo>
            </ProfileBody>
        </ProfileContainer>
    )
}

export default ProfilePage
