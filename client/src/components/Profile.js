import React, {useState, useEffect} from "react";
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

export default function Profile({ user, change, setChange, items, setItems, setUser }) {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [myItems, setMyItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [profilePic, setProfilePic] = useState("");
    const [newImage, setNewImage] = useState(false);
    const [show, setShow] = useState(false);


    useEffect(() => {
        fetch("/api/myitemsforsale")
            .then((r) => r.json())
            .then(data => { setMyItems(data) })
    }, [])
    console.log("my items: ", myItems);


    // function handleSubmit(e){
    //     e.preventDefault();
    //     fetch(`/api/users/${user.id}`, {
    //         method: "PATCH",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ profilepic: profilePic })
    //     })
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    //     setNewImage(newImage => !newImage);
    //     }

    // useEffect(() => {
    //     fetch(`/api/user-likes-container/${user.id}`)
    //         .then((r) => r.json())
    //         .then(data => { setFavorites(data) })
    // }, [])
    // console.log("my favorites: ", favorites);

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
            favorites={user.saved_items}
            user_id={item.user_id}
            condition={item.condition}
            isForSale={item.isForSale}
            images_url={item.images_url}
            change={change}
            setChange={setChange}
            items={items}
            />
    )})


    // const mySavedItems = favorites.map((item) => {
    //     return (
    //         <ItemCard
    //             key={item.id}
    //             id={item.id}
    //             item_id={item.id}
    //             itemname={item.itemname}
    //             price={item.price}
    //             description={item.description}
    //             material={item.material}
    //             color={item.color}
    //             size={item.size}
    //             sold_by={item.sold_by}
    //             item={item}
    //             date={item.created_at}
    //             user={user}
    //             favorites={user.saved_items}
    //             user_id={item.user_id}
    //             condition={item.condition}
    //             isForSale={item.isForSale}
    //             images_url={item.images_url}
    //             change={change}
    //             setChange={setChange}
    //             items={items}
    //         />
    //     )
    // })

    // const myItems = items.filter((item) => {
    //     if (item.user_id === user.id) return true;
    // })

    const id = user.id;

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch(`/profile/${id}`, {
    //         method: "PATCH",
    //         body: formData,
    //     })
    //     .then(r => r.json())
    //     .then(navigate("/profile"))
    // }
    // const firstname = user.firstname
    // const initial = firstname[0];

    return (
        <div style={{margin:"1em"}} className="profileContainer">
            <div className="heading-container">
                <Avatar
                sx={{ width: '100px', height: '100px' }} 
                />
                {/* <form onSubmit={handleSubmit} className="mb-2">
                    {show ? 
                    <>
                    <input
                    type="text"
                    placeholder="Enter image url..."
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    />
                    <Button type="submit">Looks Good</Button>
                    </>
                     : null} 
                    </form> */}
                <img
                    src={profilePic}
                    alt="profile-picture"
                    style={{ width: "175px", borderRadius: "50%" }}
                />
                <br />
                <br />
                
                <Button
                    variant="outlined"
                    onClick={() => setShow(show => !show)}
                    className="rounded"
                    size="sm"
                >
                    Upload Image
                </Button>
                {/* <Button variant="contained" 
                component="label"
                onClick={handleImageUpload}
                >
                    Upload image
                    <input hidden accept="image/*" type="file" />
                </Button> */}
                    {/* <Button type="submit">Use this image</Button> */}
                    {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button> */}
                <div>
                    <h2>Welcome, @{user.username}.</h2>
                    <p>Start buying and selling!</p>
                </div>
            </div>
            <h2>YOUR ITEMS FOR SALE</h2>
                <Grid sx={{ m: 3 }} container 
                // spacing={4}
                >
                    {/* {cards.map((card) => ( */}
                    <Grid className="profileGrid" >
                        {/* item xs={12} sm={6} md={4} */}
                        {myitemsforsale}
                    </Grid>
                    {/* ))} */}
                </Grid>
            <h2 style={{marginTop:"1em"}}>SAVED ITEMS</h2>
                <Grid sx={{ m: 3 }} container
                // spacing={4}
                >
                    {/* {cards.map((card) => ( */}
                    <Grid className="profileGrid" >
                        {/* item xs={12} sm={6} md={4} */}
                        {/* {mySavedItems} */}
                    </Grid>
                    {/* ))} */}
                </Grid>
            <h1>Previous Purchases:</h1>
            // ITEM CARDS
        </div>
)}