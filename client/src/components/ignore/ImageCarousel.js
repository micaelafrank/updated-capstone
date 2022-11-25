import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

function ImageCarousel({submitToApi, addToCarousel}){
    
    function submitToApi(data){
        fetch("/add-images", {
            method: "POST",
            body: data,
        })
            .then(addToCarousel())
    };

    function addToCarousel(){
        
    }

    return(
    <Carousel>
        <div>
            <img />
            <p>Title for image 1</p>
        </div>
        <div>
            <img />
            <p>Title for image 2</p>
        </div>
        <div>
            <img />
            <p>Title for image 3</p>
        </div>
        <div>
            <img />
            <p>Title for image 4</p>
        </div>
        {/* <Paper>
            <Typography>First Item</Typography>
            <Button variant="outlined">Click me please!</Button>
        </Paper>
        <Paper>
            <Typography>Second Item</Typography>
            <Button variant="outlined">Click me please!</Button>
        </Paper>
        <Paper>
            <Typography>Third Item</Typography>
            <Button variant="outlined">Click me please!</Button>
        </Paper> */}
    </Carousel>
)};

export default ImageCarousel;