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
import SavedItemCard from "./SavedItemCard";


function Profile({ userLikes, setUserLikes, user, change, setChange, items, setItems, setUser }) {
    const { username, firstname, lastname, email, password, images_url } = user;
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [myItems, setMyItems] = useState([]);
    const [show, setShow] = useState(false);
    

    useEffect(() => {
        fetch("/api/myitemsforsale")
            .then((r) => r.json())
            .then(data => { setMyItems(data) })
    }, [])
    console.log("my items: ", myItems);

    useEffect(() => {
        fetch(`/api/user-likes-container/${user.id}`)
            .then((r) => r.json())
            .then(data => setUserLikes(data))
        // setItemCount(itemCount)})
    }, [])
    console.log("my likesss: ", userLikes)

    const myLikedItems = userLikes.map((item) => {
        return(
            <SavedItemCard
                key={item.item.id}
                // deleteCartIcon={deleteCartIcon}
                id={item.item.id}
                // user_likes_container_id={user.user_likes_container}
                itemname={item.item.itemname}
                price={item.item.price}
                description={item.item.description}
                material={item.item.material}
                color={item.item.color}
                size={item.item.size}
                sold_by={item.item.sold_by}
                images_url={item.item.images_url}
                date={item.item.created_at}
            />
        )
    })

    const myitemsforsale = myItems.map((item) => {
            return(
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
            )
        })
    // const myItems = items.filter((item) => {
    //     if (item.user_id === user.id) return true;
    // })

    const id = user.id;
    console.log("my items: ", myItems);
    console.log("my items for sale: ", myitemsforsale)
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
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="profileBioBox">
                <Avatar
                    className="avatarImg"
                    sx={{height:"150px", border:"1px solid white", width:"150px", marginLeft:"auto", marginRight:"auto", alignItems:"center", justifyContent: "center"}}
                    src={user.images_url}
                />
                <br />
                <h3 style={{color:"white", fontSize:"20px", fontFamily: "monospace" }}>@{user.username} </h3>
                <h3 style={{ color: "white", fontWeight:"normal", fontSize:"16px", fontFamily:"monospace"}}>{user.firstname} {user.lastname} </h3>
                <h3 style={{ color: "white", fontWeight: "normal", fontSize: "15px", fontFamily: "monospace" }}>{user.email}</h3>
            </div>
            <div style={{margin:"1em", width:"auto"}}>
                <div className="profileContainer" style={{display:"flex", flexDirection:"row"}}>
                <div style={{flexDirection:"column"}}>
                <h2 style={{textAlign:"center", fontFamily:"monospace"}}>WHAT YOU'RE SELLING</h2>
                    <Grid sx={{ m: 3 }} container 
                    // spacing={4}
                    >
                        {/* {cards.map((card) => ( */}
                        <Grid className="profileGrid" >
                            {/* item xs={12} sm={6} md={4} */}
                            {myitemsforsale.length > 0 ? myitemsforsale : "You are not selling anything yet. Get started here!"}
                        </Grid>
                        {/* ))} */}
                    </Grid>
                <h2 style={{ textAlign:"center", fontFamily: "monospace" }}>SAVED ITEMS</h2>
                    <Grid sx={{ m: 3 }} container
                    // spacing={4}
                    >
                        {myLikedItems}
                        <Grid className="profileGrid" >
                            {/* item xs={12} sm={6} md={4} */}
                            {/* {mySavedItems} */}
                        </Grid>
                        {/* ))} */}
                    </Grid>
                <h2 style={{ textAlign:"center", fontFamily: "monospace" }}>PREVIOUS PURCHASES</h2>
                // ITEM CARDS
                </div>
                    </div>
                </div>
            </div>
    )}
export default Profile;