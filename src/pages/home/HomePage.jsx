import React, { useEffect, useState } from 'react'
import { HomePageWrapper } from '.'
import Banner from '../../component/Banner/Banner'
import Header from '../../component/Header/Header'
import Row from '../../component/Row/Row'

const HomePage = () => {
    const [IsScroll, setScroll] = useState(false);
    const transitionNav = () => {
        if (window.scrollY > 60) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNav);
        return()=>window.removeEventListener('scroll', transitionNav);
    }, []);

    return (
        <HomePageWrapper >
            <Header IsScroll={IsScroll} />
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            <h1>header</h1>
            {
                // <Banner />
            }
            {
                // <Row/>
            }
            </HomePageWrapper>
    )
}

export default HomePage
