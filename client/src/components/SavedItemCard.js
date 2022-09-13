import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function SavedItemCard({ item, savedCard, user, price, description, images_url, itemname, seller, }) {


    return (
            <Typography>
                    <div>
                        <span>{description}</span>
                    </div>
            </Typography>
    )
}

export default SavedItemCard; 
