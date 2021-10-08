import React from 'react'
import { Btn, HederWrapper, Image } from '.'
import Button from '../Button/Button'

const Header = ({IsScroll}) => {
    return (
        <HederWrapper IsScroll={IsScroll} >
            <Image src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <Button title="Sign In" />
        </HederWrapper>
    )
}

export default Header
