import React, { useEffect, useState } from 'react'
import { HomePageWrapper } from '.'
import Banner from '../../component/Banner/Banner'
import Header from '../../component/Header/Header'
import Row from '../../component/Row/Row'
import requests from '../../fetchTMDB/Request'

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
            <Banner />
            <Row title="Trending Now "  fetchUrl={requests.fetchTrending} IsLargeRow />
            <Row title="Top Rated "  fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies "  fetchUrl={requests.fetchAction} />
            <Row title="Comedy Movies "  fetchUrl={requests.fetchComedy} />
            <Row title="Horror Movies "  fetchUrl={requests.fetchHorror} />
            <Row title="Romance Movies "  fetchUrl={requests.fetchRomance} />
            <Row title="Documentaries "  fetchUrl={requests.fetchDocumentaries} />
        </HomePageWrapper>
    )
}

export default HomePage
