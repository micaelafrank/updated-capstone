import React from 'react';
import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SavedContainer from './SavedContainer';
// import Pagination from '@mui/material/Pagination';


function ItemsList({ handleUnlike, itemCount, setItemCount, setCartValue, cartItems, setCartItems, addCartItem, addNewFavorite, setChange, deleteItemFromList, user, change, removeLike }) {
    const [favorites, setFavorites] = useState([]);
    const [cartIcons, setCartIcons] = useState([cartItems]);
    const [items, setItems] = useState([])

    
    useEffect(() => {
        fetch("/api/items")
            .then((r) => r.json())
            .then(data => { setItems(data) } )
    }, [change])
    console.log(items)


    // function deleteItemFromList(id) {
    //     const updatedItemsList = items.filter((item) => item.id !== id);
    //     setItems(updatedItemsList);
    // }
    // console.log("after delete: ", items)

    const theme = createTheme({
        palette: {
            primary: {
                // Purple and green play nicely together.
                main: '#efd6ed',
                darker: '#bca5bb',
            },
            secondary: {
                // This is green.A700 as hex.
                main: '#cfe0c3',
                darker: '#9eae93',
                darkText: '#3b4234;'
            },
        },
    });


    const listOfItems = items.map((item) => {
        return (
            <ItemCard
                key={item.id}
                // deleteCartIcon={deleteCartIcon}
                setCartValue={setCartValue}
                cartItems={cartItems}
                setCartItems={setCartItems}
                id={item.id}
                item_id={item.id}
                user_likes_container_id={user.user_likes_container}
                removeLike={removeLike}
                itemname={item.itemname}
                price={item.price}
                description={item.description}
                material={item.material}
                color={item.color}
                size={item.size}
                sold_by={item.sold_by}
                item={item}
                itemCount={itemCount} 
                setItemCount={setItemCount} 
                user={user}
                favorites={user.saved_items}
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
                cartIcons={cartIcons}
                deleteItemFromList={deleteItemFromList}
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
                            color="secondary.darker"
                            gutterBottom
                        >
                            SHOP
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Explore all available items. 
                        </Typography>
                        <Stack
                            sx={{ pt: 2 }}
                            direction="row"
                            spacing={3}
                            justifyContent="center"
                        >
                            <Button sx={{ pt: 1.5, pb: 1.5, pl: 5, pr: 5, bgcolor: 'secondary.main', color: 'secondary.darkText' }} variant="contained" href="/sell">SELL</Button>
                            <Button sx={{ pt: 1.5, pb: 1.5, pl: 5, pr: 5, bgcolor: 'secondary.main', color: 'secondary.darkText' }} variant="contained" href="/mysaves">SHOP SAVED ITEMS</Button>
                            {/* <Button sx={{ bgcolor: 'secondary.main', color: 'secondary.darker' }} variant="contained"> Remove all saved items</Button> */}
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 5 }}>
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