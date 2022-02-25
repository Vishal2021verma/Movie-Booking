
import React from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData.js';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


class Home extends React.Component {

    render() {
        return <div><Header /><span><h1>Upcoming Movies</h1></span><div>
            <ImageList sx={{
                width: "100%", height: 420, gridAutoFlow: "column",
                gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr)) !important",
                gridAutoColumns: "minmax(250px, 1fr)"
            }} cols={5} rowHeight={400} >
                {moviesData.map((moviesData) => (
                    <ImageListItem key={moviesData.id} sx={{ width: 250 }}>
                        <img
                            src={moviesData.poster_url}
                            srcSet={moviesData.poster_url}
                            alt={moviesData.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={moviesData.title}

                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
            <div className='flex-container'>
                <div className='left'>
                    <ImageList sx={{ width: "100%" }} cols={4} >
                        {moviesData.map((moviesData) => (
                            <ImageListItem key={moviesData.id} sx={{ width: 250 }}>
                                <img
                                    src={moviesData.poster_url}
                                    srcSet={moviesData.poster_url}
                                    alt={moviesData.title}
                                    loading = 'lazy'
                                />
                                <ImageListItemBar
                                    title = {moviesData.title}
                                    subtitle={moviesData.release_date}
                                />

                            </ImageListItem>
                        ))}


                    </ImageList>
                </div>
                <div className='right' ></div>

            </div>
        </div>;
    }
}

export default Home;