import React, { useState, useEffect } from "react";
import { Avatar, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import SavedContainer from "./SavedContainer";
import IconButton from '@mui/material/IconButton';
import ItemCard from "./ItemCard";
import SvgIcon from '@mui/material/SvgIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProfileItemCard from "./ProfileItemCard";
import SavedItemCard from "./SavedItemCard";
import { Link } from "react-router-dom";

function SavedItemsList({ change, handleUnlike, handleUndoHeart, handleFillHeart, user, handleOnlySaves, setUserLikes, userLikes, items, setItems }){
    // const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        fetch(`/api/user-likes-container/${user.id}`)
            .then((r) => r.json())
            .then(data => setUserLikes(data))
        // setItemCount(itemCount)})
    }, [change])
    console.log("my likesss: ", userLikes)


    function handleUnlike(myItem) {
        const newLikedList = userLikes.filter((item) => item.id !== myItem.id)
        setUserLikes(newLikedList)
    }

    // useEffect(() => {
    //     fetch(`/api/user-likes-container/${user.id}`)
    //         .then((r) => r.json())
    //         .then(data => setUserLikes(data))
    //     // setItemCount(itemCount)})
    // }, [])
    // console.log("my likesss: ", userLikes)
    
    // function handleMoreInfo() {
    //     setMoreInfo(true)
    // }

    // function handleCloseMoreInfo() {
    //     setMoreInfo(false);
    // }

    const myLikedItems = userLikes.map((item) => {
        return (
            <SavedItemCard
                key={item.item.id}
                // deleteCartIcon={deleteCartIcon}
                id={item.item.id}
                price={item.item.price}
                user_likes_container_id={user.user_likes_container.id}
                item_id={item.id}
                itemname={item.item.itemname}
                description={item.item.description}
                material={item.item.material}
                color={item.item.color}
                size={item.item.size}
                user={user}
                sold_by={item.item.sold_by}
                images_url={item.item.images_url}
                date={item.item.created_at}
                clickedHeart={item.item.clicked_heart}
                handleUndoHeart={handleUndoHeart}
                handleFillHeart={handleFillHeart}
                handleUnlike={handleUnlike}
                change={change}
                // handleMoreInfo={handleMoreInfo}
                // handleCloseMoreInfo={handleCloseMoreInfo}
            />
        )
    })

    return(
        <>
            <h2 style={{ fontSize: "25px", marginBottom:"4px", textAlign: "left", fontFamily: "monospace", marginLeft:"10px", marginTop:"10px", fontWeight:"normal" }}>YOUR SAVED GOODS</h2>
            <h5 style={{ marginLeft: "10px", fontSize: "16px", fontWeight: "normal", textAlign: "left", fontFamily: "monospace", marginLeft: "10px", letterSpacing: "1.1px", borderRadius: "none", margin: "0", padding: "0" }}><Button style={{ paddingBottom: "1px", paddingLeft:"12px", paddingRight:"12px", marginLeft:"10px", color:"black", backgroundColor:"none", borderBottom:"1px solid black", borderRadius: "0" }} to={handleOnlySaves}>view all</Button></h5>
            {/* item xs={12} sm={6} md={4} */}
            {userLikes.length <1 ? 
            <div style={{ marginLeft:"auto", textAlign:"center", marginRight:"auto", justifyContent: "center", alignItems: "center" }}>
                <p>No saved items yet!</p>
                <button>SHOW ME THE GOOD GOODS</button>
            </div>
            : 
            <Grid sx={{ m:2 }} container>
                <Grid className="profileGrid">
                    {myLikedItems}
                </Grid>
            </Grid>}
        </>
)
}
export default SavedItemsList;