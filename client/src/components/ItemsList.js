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
// import Pagination from '@mui/material/Pagination';


// function PaginationOutlined() {
//     <Stack spacing={2}>
//         <Pagination count={10} variant="outlined" color="primary" />
//     </Stack>
// }

function ItemsList({ user, change, addNewSave, inCart, setInCart, setWasClicked, wasClicked, deleteFavorite, removeLike, addFavorite, items, setItems, handleUndoHeart, handleFavoriteClick, setChange,toggleFavorite, item, id, uniqueLikes, editHeartState, setEditHeartState }) {
    const theme = createTheme();

    useEffect(() => {
        fetch("/items")
            .then((r) => r.json())
            .then(data => { setItems(data) })
    }, [])
    console.log(items)


    const listOfItems = items.map((item) => {
        return(
            <ItemCard
            key={item.id}
            inCartIcon={item.inCartIcon}
            id={item.id}
            clickedHeart={item.clickedHeart}
            item_id={item.id}
            setInCart={setInCart}
            removeLike={removeLike}
            itemname={item.itemname}
            price={item.price}
            description={item.description}
            material={item.material}
            color={item.color}
            size={item.size}
            seller={item.sold_by}
            item={item}
            handleUndoHeart={handleUndoHeart}
            user={user}
            sold_by={item.sold_by}
            user_id={item.user_id}
            condition={item.condition}
            isForSale={item.isForSale}
            images_url={item.images_url}
            change={change}
            setChange={setChange}
            items={items}
            addNewSave={addNewSave}
            />
        )
    })
    return(
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
                            Album layout
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Something short and leading about the collection below—its contents,
                            the creator, etc. Make it short and sweet, but not too short so folks
                            don&apos;t simply skip over it entirely.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained" href="/sell">Sell something</Button>
                            <Button variant="contained" href="/mylikes"> Shop saved items only</Button>
                            {/* <Button variant="outlined">Secondary action</Button> */}
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
        </main>
    </ThemeProvider>
)}

export default ItemsList;