import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function RecipeReviewCard() {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="seller-avatar">
                        {sold_by.avatar}
                    </Avatar>
                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={itemname}
                // subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={image_url}
                alt={title}
            />
            <CardContent>
                <Typography sx={{display:'flex'}} variant="body2" color="text.primary">
                    <SellIcon />
                    ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Size: {size}
                    Material: {material}
                </Typography>
                <Typography paragraph>
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                {user.id === item.user_id ?
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton> :
                <IconButton aria-label="add to cart">
                    <AddShoppingCartIcon />
                </IconButton>}
            </CardActions>
        </Card>
    );
}