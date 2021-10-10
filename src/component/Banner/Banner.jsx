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
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovie(
                
            )
        }
    },[])

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + '...':string;
    }
    return (
        <BannerContainer style={{
            backgroundPosition:"center center",
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
            backgroundPosition: "cover",
            borderImageRepeat: "no-repeat",
        }} >
            <BannerWrapper>
                <BannerTitle>Movies title</BannerTitle>
                <BannerDescription>
                    {
                        truncate(` The base Movies description about the title and i wana to be shown watch the base Movies description about the title and i wana to be shown watch the base Movies description about the title and i wana to be shown watch`,152)
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
