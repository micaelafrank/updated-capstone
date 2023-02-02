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
import SavedItemsList from "./SavedItemsList";
import MyListingsList from "./MyListingsList";
import ProfileBox from "./ProfileBox";

function Profile({ profile, setProfile, userLikes, setUserLikes, user, change, setChange, items, setItems, setUser }) {
    const { username, firstname, lastname, email, password, images_url } = user;
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    // const [myItems, setMyItems] = useState([]);
    const [show, setShow] = useState(false);
    const [isNormalLayout, setIsNormalLayout] = useState(true);
    const [isSavedItemsLayout, setIsSavedItemsLayout] = useState(false);
    const [isMyItemsLayout, setIsMyItemsLayout] = useState(false);
    const [myItems, setMyItems] = useState([]);

    // useEffect(() => {
    //     fetch("/api/me").then((r) => {
    //         if (r.ok) {
    //             r.json().then((user) => setUser(user));
    //         }
    //     })
    // }, [])
    // console.log(user);


    useEffect(() => {
        fetch(`/api/profile/${user.id}`)
            .then((r) => r.json())
            .then(profile => setProfile(profile))
    }, [])
    console.log(profile)

    useEffect(() => {
        fetch(`/api/user-likes-container/${user.id}`)
            .then((r) => r.json())
            .then(data => setUserLikes(data))
        // setItemCount(itemCount)})
    }, [])
    console.log("my likesss: ", userLikes)

    useEffect(() => {
        fetch("/api/myitemsforsale")
            .then((r) => r.json())
            .then(data => { setMyItems(data) })
    }, [])
    console.log("my items: ", myItems);



    function handleOnlySaves(){
        setIsNormalLayout(false);
        setIsSavedItemsLayout(true);
        setIsMyItemsLayout(false);
    }

    function handleNormalLayout(){
        setIsNormalLayout(true);
        setIsSavedItemsLayout(false);
        setIsMyItemsLayout(false);
    }

    function handleOnlyMyListings(){
        setIsNormalLayout(false);
        setIsSavedItemsLayout(false);
        setIsMyItemsLayout(true);
    }

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <ProfileBox isNormalLayout={isNormalLayout} isMyItemsLayout={isMyItemsLayout} handleOnlyMyListings={handleOnlyMyListings} isSavedItemsLayout={isSavedItemsLayout} handleOnlySaves={handleOnlySaves} handleNormalLayout={handleNormalLayout} user={user} />
            {isNormalLayout ? 
            <div style={{margin:"1em", marginLeft:"auto", marginRight:"auto", width:"auto"}}>
                <div className="profileContainer" style={{display:"flex", flexDirection:"row"}}>
                <div style={{flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                {userLikes.length < 1 ? null : 
                    <SavedItemsList handleOnlySaves={handleOnlySaves} items={items} setItems={setItems} userLikes={userLikes} setUserLikes={setUserLikes} user={user} />}
                {userLikes.length < 1 ? null : 
                    <MyListingsList myItems={myItems} setMyItems={setMyItems} change={change} setChange={setChange} items={items} setItems={setItems} user={user} />}
                </div>
                </div>
            </div>
            : null }
            <div style={{ margin: "1em", marginLeft: "auto", marginRight: "auto", width: "auto" }}>
                {isSavedItemsLayout ?
                    <SavedItemsList handleOnlySaves={handleOnlySaves} items={items} setItems={setItems} userLikes={userLikes} setUserLikes={setUserLikes} user={user} />
                : null}
                {isMyItemsLayout ?
                    <MyListingsList myItems={myItems} setMyItems={setMyItems} change={change} setChange={setChange} items={items} setItems={setItems} user={user} />
                : null}
            </div>
        </div>
    )}
export default Profile;