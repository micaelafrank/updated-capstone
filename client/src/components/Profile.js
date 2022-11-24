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
    const { username, firstname, lastname, email, password, profilepic } = user;
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [myItems, setMyItems] = useState([]);
    const [show, setShow] = useState(false);
    const [avatars, setAvatars] = useState([]);
    // const [newProfPic, setNewProfPic] = useState("");

    console.log("user: ", user)

    // useEffect(() => {
    //     fetch("/api/myitemsforsale")
    //         .then((r) => r.json())
    //         .then(data => { setMyItems(data) })
    // }, [])
    // console.log("my items: ", myItems);


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

    function handleImageChange(e) {
        console.log(e.target.files[0]);
        setAvatars(e.target.files[0]);
        console.log("avatars: ", avatars);
    };

    function handleSubmit(e) {
        e.preventDefault();
        uploadPhoto();
    }

    const uploadPhoto = () => {
        const formData = new FormData();
        formData.append("avatars", avatars);

        // configure your fetch url appropriately
        fetch(`profile/${user.id}/add-image`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => setAvatars(data));
            navigate(`profile/${user.username}`);
    };

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
        <div style={{margin:"1em"}}>
            <div className="profileContainer">
                <div style={{fontFamily:"monospace", alignItems:"center", textAlign:"center"}}>
                    <h1 style={{ fontFamily: "monospace", alignItems: "center", textAlign: "center" }}>Welcome, @{user.username}.</h1>
                    <p style={{ fontFamily: "monospace", alignItems: "center", textAlign: "center" }}>Start buying and selling!</p>
                </div>
                <div className="heading-container">
                    {/* <img
                        src={profilepic}
                        alt="profile"
                        style={{ width: "175px", borderRadius: "50%" }}
    />*/}
                    <form 
                    onSubmit={handleSubmit}>
                    {/* className="mb-2"> */}
                        {/* {show ? 
                        <>
                        <input
                        type="text"
                        placeholder="Enter image url..."
                        value={profilepic}
                        onChange={(e) => setNewProfPic(e.target.value)}
                        />
                        <Button type="submit">Looks Good</Button>
                        </>
                        : null} 
                    </form> */}
                    {show ? 
                    <Avatar image={avatars[0]}/>
                    : null}
                    <input 
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*"
                    onChange={handleImageChange} 
                    />
                    </form>
                    {/* <Button
                        variant="outlined"
                        onClick={() => setShow(show => !show)}
                        className="rounded"
                        size="sm"
                        style={{ marginTop:"30px", marginBottom:"30px" }}
                    >
                        Upload Image
                    </Button> */}
                    {/* <img
                        src={profilepic}
                        alt="profile-picture"
                        style={{ width: "175px", margin:"0", borderRadius: "50%", alignItems:"center", justifyContent: "center" }}
                    /> */}
                    <br />
                    <h2>{user.firstname} {user.lastname} </h2>
                    {/* <Button variant="contained" 
                    component="label"
                    onClick={handleImageUpload}
                    >
                        Upload image
                        <input hidden accept="image/*" type="file" />
                    </Button> */}
                        <Button type="submit">Use this image</Button>
                        {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
                            Delete
                        </Button> */}
                </div>
            </div>
            <h2 style={{textAlign:"center", fontFamily:"monospace"}}>WHAT YOU'RE SELLING</h2>
                <Grid sx={{ m: 3 }} container 
                // spacing={4}
                >
                    {/* {cards.map((card) => ( */}
                    <Grid className="profileGrid" >
                        {/* item xs={12} sm={6} md={4} */}
                        {/* {myItems.length > 0 ? myitemsforsale : "You are not selling anything yet. Get started here!"} */}
                    </Grid>
                    {/* ))} */}
                </Grid>
            <h2 style={{ textAlign: "center", fontFamily: "monospace" }}>SAVED ITEMS</h2>
                <Grid sx={{ m: 3 }} container
                // spacing={4}
                >
                    {/* {cards.map((card) => ( */}
                    <Grid className="profileGrid" >
                        {/* item xs={12} sm={6} md={4} */}
                        {/* {mySavedItems} */}
                        // ITEM CARDS
                    </Grid>
                    {/* ))} */}
                </Grid>
            <h2 style={{ textAlign: "center", fontFamily: "monospace" }}>PREVIOUS PURCHASES</h2>
            // ITEM CARDS
        </div>
)}