import React, { useEffect, useState } from 'react'
import {BannerContainer, BannerTitle, BannerWrapper, ButtonContainer,BannerDescription,BannerFadeBottom} from '.'
import ButtonR, { BannerButton } from '../Button/Button';
// import AddIcon from '@mui/icons-material/Add';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import axios from '../../fetchTMDB/axios'
import requests from '../../fetchTMDB/Request'

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(requests.fetchAction);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1 )
                ]
            )
            return request;
        }
        fetchData();
    }, [])
    
    
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...':string;
    }
    return (
        <BannerContainer style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            
        }} >
            <BannerWrapper>
                <BannerTitle>{movie?.title ||movie?.name || movie?.original_name }</BannerTitle>
                <BannerDescription>
                    {
                        truncate(`${movie.overview}`,140)
                    }
                </BannerDescription>
                <ButtonContainer>
                    <BannerButton bgColor="#DC1623" size="1rem" color="#fff" padding=".6rem 1.2rem"> watch</BannerButton>
                    <BannerButton bgColor="#000000" size="1rem" color="#fff" padding=".6rem 1.2rem"> My List</BannerButton>
                </ButtonContainer>
            </BannerWrapper>
            <BannerFadeBottom></BannerFadeBottom>
        </BannerContainer>
    )
}

export default Banner
