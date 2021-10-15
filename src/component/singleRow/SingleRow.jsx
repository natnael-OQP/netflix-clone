import React, { useState } from 'react';
import {Image, InfoContainer, InfoTitle, SingleRowContainer, VoteContainer, Year } from '.';
import { Flex } from '../Row';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const SingleRow = ({ vote_average, release_date, backdrop_path, poster_path, title,name,original_name }) => {
    const base_url = 'https://image.tmdb.org/t/p/original/';
    const [trailer, setTrailer] = useState("");
    //------ react-you-tube
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
    };

    const handleClick = () => {
        
        if (trailer) {
            setTrailer("");
        } else {
            movieTrailer(name || title || original_name || "").then((url) => {
                const urlPath = new URLSearchParams(new URL(url).search);
                setTrailer(urlPath.get('v'));

            }).catch((error) => alert(error.message))
        }
        
        setTrailer("");
    }

    return (
        <>
            <SingleRowContainer   >
                <Image onClick={handleClick} src={`${base_url}${backdrop_path}`} alt={title} />
                <InfoContainer>
                    <InfoTitle>{title || name || original_name}</InfoTitle>
                    <Flex>
                        <Year>{release_date}</Year>
                        <VoteContainer>
                            <StarHalfIcon fontSize="small" />
                            <Year>{vote_average}</Year>
                        </VoteContainer>
                    </Flex>
                </InfoContainer>
            </SingleRowContainer>
            {trailer && <YouTube  videoId={trailer} opts={opts}  /> }
        </>
    )
}

export default SingleRow
