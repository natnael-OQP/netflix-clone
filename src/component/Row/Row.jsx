import React, { useEffect, useState } from 'react'
import {  ComponentName, Flex, RowContainer,  Title } from '.'
import axios from '../../fetchTMDB/axios';
import SingleRow from '../singleRow/SingleRow';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Row = ({ title, fetchUrl }) => {
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(
                request.data.results
            )
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    return (
        <RowContainer>
            <Flex>
                <Title>{title}</Title>
                <ArrowForwardIosIcon fontSize="medium" />
            </Flex>
            <ComponentName>
            {   
                movies.map((movie) => (
                    <SingleRow
                        key={movie.id}
                        vote_average={movie.vote_average}
                        release_date={movie.release_date}
                        backdrop_path={movie.backdrop_path}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        name={movie.name}
                        original_name={movie.original_name}
                    />
                ))   
                
            }
            </ComponentName>
        </RowContainer>
    )
}

export default Row
