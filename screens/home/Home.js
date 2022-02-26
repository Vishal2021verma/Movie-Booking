
import React from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData.js';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';


class Home extends React.Component {

    render() {
        return <div><Header /><span><h1>Upcoming Movies</h1></span>
            <div>
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
                                    loading='lazy'
                                />
                                <ImageListItemBar
                                    title={moviesData.title}
                                    subtitle={moviesData.release_date}
                                />

                            </ImageListItem>
                        ))}
                    </ImageList>

                </div>
                <div className='right' >
                    <Card sx={{ maxWidth: 345 }}>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="primary">
                                FIND MOVIES BY:
                            </Typography>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1 },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="component-simple">Movie Name</InputLabel>
                                    <Input id="component-simple" />
                                </FormControl>
                                <br />
                                <FormControl variant="standard">
                                    <InputLabel id="demo-simple-select-label">Genres</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value=""
                                        label="Age"
                                        onChange=""
                                    >
                                        {/* also implement checkbox  */}
                                        <MenuItem value="">Horror</MenuItem>
                                        <MenuItem value="">Romantic</MenuItem>
                                        <MenuItem value="">Thriller</MenuItem>
                                    </Select>

                                </FormControl>
                                <br />
                                <FormControl variant="standard">
                                    <InputLabel id="demo-simple-select-label">Artists</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value=""
                                        label="Age"
                                        onChange=""
                                    >
                                        {/* also implement checkbox  */}
                                        <MenuItem value="">Horror</MenuItem>
                                        <MenuItem value="">Romantic</MenuItem>
                                        <MenuItem value="">Thriller</MenuItem>
                                    </Select>

                                </FormControl>
                                <br />
                                <FormControl>
                                    <TextField
                                        variant="standard"
                                        helperText="Please enter your name"
                                        id="demo-helper-text-aligned"
                                        label="Release Date Start"
                                        shrink="true"
                                        type="date"
                                    />
                                </FormControl>
                                <br />
                                <FormControl>
                                    <TextField
                                        variant="standard"
                                        helperText="Please enter your name"
                                        id="demo-helper-text-aligned"
                                        label="Release Date End"
                                        shrink="true"
                                        type="date"
                                    />
                                </FormControl>
                                <br />
                                <FormControl>
                                <Button variant="contained">APPLY</Button>
                                </FormControl>
                            </Box>



                        </CardContent>

                    </Card>

                </div>

            </div>
        </div>;
    }
}

export default Home;
