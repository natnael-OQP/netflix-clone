import { Avatar } from '@mui/material'
import React from 'react'
import {  HederWrapper, Image } from '.'
import ButtonR, { BtnRight } from '../Button/Button'


const Header = ({IsScroll}) => {
    return (
        <HederWrapper IsScroll={IsScroll} >
            <Image src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <Avatar/>
        </HederWrapper>
    )
}

export default Header
