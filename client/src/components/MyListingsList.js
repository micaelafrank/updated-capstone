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


function MyListingsList({ myItems, setMyItems, change, setChange, user, items, setItems }) {
   
    useEffect(() => {
        fetch("/api/myitemsforsale")
            .then((r) => r.json())
            .then(data => { setMyItems(data) })
    }, [])
    console.log("my items: ", myItems);

    const myitemsforsale = myItems.map((item) => {
        return (
            <ProfileItemCard
                key={item.id}
                id={item.id}
                item_id={item.id}
                itemname={item.itemname}
                price={item.price}
                description={item.description}
                material={item.material}
                color={item.color}
                size={item.size}
                sold_by={item.sold_by}
                item={item}
                date={item.created_at}
                user={user}
                favorites={item.saved_items}
                user_id={item.user_id}
                condition={item.condition}
                isForSale={item.isForSale}
                images_url={item.images_url}
                change={change}
                setChange={setChange}
            />
        )
    })


    return (
        <>
            <h2 style={{ fontSize: "25px", textAlign: "center", fontFamily: "monospace" }}>YOUR GOODS FOR SALE</h2>
            {myItems.length < 1 ?
                <div style={{ marginLeft: "auto", textAlign: "center", marginRight: "auto", justifyContent: "center", alignItems: "center" }}>
                    <p>You're not selling any GOODS yet!</p>
                    <button>SELL MY GOODS</button>
                </div>
                :
                <Grid sx={{ m: 3 }} container>
                    <Grid className="profileGrid">
                        {myitemsforsale}
                    </Grid>
                </Grid>}
            </>
    )
}
export default MyListingsList;