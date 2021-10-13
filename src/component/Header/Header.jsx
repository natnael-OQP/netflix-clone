import { Avatar } from '@mui/material'
import React from 'react'
import {  HederWrapper, Image } from '.'
import { useSelector } from 'react-redux';
import { AvatarRight } from '../Button/Button';
import { SelectUser } from '../../features/userSlice';
const Header = ({ IsScroll }) => {
    const user = useSelector(SelectUser);
    return (
        <HederWrapper IsScroll={IsScroll} >
            <Image src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <AvatarRight>
                <Avatar src={user.photo} alt={user.name} />
            </AvatarRight>
        </HederWrapper>
    )
}

export default Header
