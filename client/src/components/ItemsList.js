import React from 'react';
import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { brown, green, deepOrange, lightGreen } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SavedContainer from './SavedContainer';
// import Pagination from '@mui/material/Pagination';


function ItemsList({ handleUnlike, userLikes, setUserLikes, setCartValue, cartItems, setCartItems, addCartItem, addNewFavorite, setChange, deleteItemFromList, user, change, removeLike }) {
    const [favorites, setFavorites] = useState([]);
    const [cartIcons, setCartIcons] = useState([cartItems]);
    const [items, setItems] = useState([])

    

    useEffect(() => {
        fetch("/api/items")
            .then((r) => r.json())
            .then(data => { setItems(data) } )
    }, [change])
    console.log(items)

    useEffect(() => {
        fetch(`/api/user-likes-container/${user.id}`)
            .then((r) => r.json())
            .then(data => setUserLikes(data))
        // setItemCount(itemCount)})
    }, [])
    console.log("my likes: ", userLikes)

    // const array3 = userLikes.map(function (item) {
    //     if (items.includes(item.id)) {
    //         item.clickedHeart = true;
    //     }
    //     return item;
    // })
    // setItems(array3)


    function handleUnlike(myItem){
        const newLikedList = userLikes.filter((item) => item.id !== myItem.id)
        setUserLikes(newLikedList)
    }
    // console.log("my liked items filtered: ", myLikedItems)
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
    // const res = userLikes.filter(like => items.some(item => item.id === like.item_id));
    // const resIds = res.map((item) => item.id)
    // const isSaved = resIds.filter((item) => item.id ===)
    const listOfItems = items.map((item) => {
        return (
            <ItemCard
                category={item.category}
                key={item.id}
                clickedHeart={item.clickedHeart}
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

    const userLikesIds = userLikes.map((like) => like.item_id)
    const itemIdsList = items.map((item) => item.id)
    console.log("my likes item ids: ", userLikesIds)
    console.log("all item ids: ", itemIdsList)

    

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main style={{alignItems:"center", justifyContent:"center", marginLeft:"auto", marginRight:"auto"}}>
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
                            gutterBottom
                            sx={{ paddingTop: "0", textAlign: "center", fontFamily: "monospace", marginTop: "0", textShadow: "2px 2px #c98d6d", color: "black", marginBottom: "14px" }}
                        >
                            shop
                        </Typography>
                        <Typography component="h5" variant="h5" align="center" paragraph
                            sx={{
                            color: brown[700], fontSize:"17px", letterSpacing:"1.3", fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}
                        >
                            <p style={{ textAlign: "center", fontSize: "20px", paddingBottom: "0", marginBottom: "7px", textShadow: "1px 1px #c98d6d", fontFamily: "monospace", color: "black" }}>good goods need a great home</p>
                        </Typography>
                        <Typography component="h5" variant="h5" align="center" paragraph
                            sx={{fontSize:"17px",letterSpacing:".8px", fontFamily: "Roboto, Helvetica, sans serif", color: brown[700]}}>
                            <p style={{fontWeight:"bold"}}>EXPLORE ALL AVAILABLE BITS AND MASTERPIECES</p>
                        </Typography>
                    </Container>
                    <Stack
                        sx={{ pt: 5, mt:3, ml: 20, mr:18, mb:0, pb:0 }}
                        direction="row"
                        spacing={3}
                        justifyContent="space-between"
                    >
                        <Button sx={{ pt: 1, pb: 1, pl: 5, pr: 5, bgcolor: 'secondary.main', color: 'secondary.darkText', fontFamily:"monospace" }} variant="contained" 
                        // onClick={handleFilter}
                        >filter items</Button>
                        <div>
                            <Button sx={{ mr:5, pt: 1, pb: 1, pl: 5, pr: 5, bgcolor: 'secondary.main', color: 'secondary.darkText' }} variant="contained" href="/sell">sell</Button>
                            <Button sx={{ pt: 1, pb: 1, pl: 5, pr: 5, bgcolor: 'secondary.main', color: 'secondary.darkText' }} variant="contained" href="/mysaves">my liked items</Button>
                        {/* <Button sx={{ bgcolor: 'secondary.main', color: 'secondary.darker' }} variant="contained"> Remove all saved items</Button> */}
                        </div>
                    </Stack>
                </Box>
                <Container sx={{ py: 2, ml: "auto", mr:"auto", justifyContent:"center", alignItems:"center" }}>
                    {/* End hero unit */}
                    <Grid container spacing={4} sx={{ml: "auto", mr: "auto", justifyContent:"center", alignItems:"center"}}>
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