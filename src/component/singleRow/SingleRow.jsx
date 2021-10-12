import React from 'react';
import {Image, InfoContainer, InfoTitle, SingleRowContainer, VoteContainer, Year } from '.';
import { Flex } from '../Row';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const SingleRow = ({ vote_average, release_date, backdrop_path, poster_path, title,name,original_name }) => {
    const base_url = 'https://image.tmdb.org/t/p/original/';
    return (
        <SingleRowContainer>
            <Image src={`${base_url}${backdrop_path}`} alt={title} />
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
    )
}

export default SingleRow
