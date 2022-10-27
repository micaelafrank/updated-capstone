import React from 'react';
import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SavedContainer from './SavedContainer';
import ShoppingCart from './ShoppingCart';
// import Pagination from '@mui/material/Pagination';


// function PaginationOutlined() {
//     <Stack spacing={2}>
//         <Pagination count={10} variant="outlined" color="primary" />
//     </Stack>
// }

function ItemsList({ handleUnlike, setCartValue, cartItems, setCartItems, addCartItem, items, setItems, addNewFavorite, setChange, user, change, removeLike }) {
    const [favorites, setFavorites] = useState([]);


    useEffect(() => {
        fetch("/api/items")
            .then((r) => r.json())
            .then(data => { setItems(data) } )
    }, [])
    console.log(items)


    const theme = createTheme();

    const listOfItems = items.map((item) => {
        return (
            <ItemCard
                key={item.id}
                // deleteCartIcon={deleteCartIcon}
                setCartValue={setCartValue}
                inCartIcon={item.inCartIcon}
                cartItems={cartItems}
                setCartItems={setCartItems}
                id={item.id}
                clickedHeart={item.clickedHeart}
                item_id={item.id}
                user_likes_container_id={user.user_likes_container}
                removeLike={removeLike}
                itemname={item.itemname}
                price={item.price}
                description={item.description}
                material={item.material}
                color={item.color}
                size={item.size}
                seller={item.sold_by}
                item={item}
                user={user}
                favorites={user.saved_items}
                sold_by={item.sold_by}
                user_id={item.user_id}
                condition={item.condition}
                isForSale={item.isForSale}
                images_url={item.images_url}
                change={change}
                setChange={setChange}
                addNewFavorite={addNewFavorite}
                setFavorites={setFavorites}
                items={items}
                addCartItem={addCartItem}
            />
        )
    })


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            SHOP
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Explore all available items. 
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained" href="/sell">Sell something</Button>
                            <Button variant="contained" href="/mysaves"> Shop saved items only</Button>
                            <Button variant="contained"> Remove all saved items</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {/* {cards.map((card) => ( */}
                        <Grid className="items-grid" >
                            {/* item xs={12} sm={6} md={4} */}
                            {listOfItems}
                        </Grid>
                        {/* ))} */}
                    </Grid>
                </Container>
                {/* <PaginationOutlined/> */}
                {/* <SavedContainer favorites={favorites} setFavorites={setFavorites} /> */}
            </main>
        </ThemeProvider>
    )
}

export default ItemsList;