import React from 'react'
import {  HederWrapper, Image } from '.'
import ButtonR, { BtnRight } from '../Button/Button'

const Header = ({IsScroll}) => {
    return (
        <HederWrapper IsScroll={IsScroll} >
            <Image src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <BtnRight size="1rem" padding="7px 17px" bgColor="#e50914" >Sign In</BtnRight>
        </HederWrapper>
    )
}

export default Header
