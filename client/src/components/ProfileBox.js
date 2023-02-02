import React from "react"
import { Avatar } from '@mui/material';
import SellIcon from '@mui/icons-material/Sell';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';


function ProfileBox({ isNormalLayout, isMyItemsLayout, isSavedItemsLayout, handleOnlyMyListings, user, handleOnlySaves, handleNormalLayout }){

return(
    <div className="profileBioBox">
        <Avatar
            className="avatarImg"
            sx={{ height: "220px", border: "1px solid white", width: "220px", marginLeft: "auto", marginRight: "auto", alignItems: "center", justifyContent: "center" }}
            src={user.images_url}
        />
        <br />
        <div style={{marginLeft:"auto", marginRight:"auto"}}>
            <h3 style={{ color: "white", letterSpacing:"1.2px", fontSize: "22px", marginTop:"8px", marginBottom:"10px", padding:"0", fontFamily: "monospace" }}>@{user.username} </h3>
            <h3 style={{ color: "white", fontWeight: "normal", fontSize: "16px", fontFamily: "monospace" }}>{user.firstname} {user.lastname} </h3>
            <h3 style={{ color: "white", fontWeight: "normal", fontSize: "15px", fontFamily: "monospace" }}>{user.email}</h3>
            {isNormalLayout ? 
            <div style={{ justifyContent:"flex-start", alignItems:"left", width:"90%", marginTop:"25px", marginBottom: "15px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "inline-flex", marginBottom:"5px", alignItems: "center", textAlign:"left", flexDirection: "row"}}>
                    {/* <IconButton aria-label="delete" style={{ alignItems: "center", paddingTop: "0", marginTop: "0", marginBottom: "0" }} onClick={handleOnlySaves}> */}
                        <FavoriteIcon style={{ marginRight: "8px", alignItems: "center", paddingTop: "0", marginTop: "0", marginBottom: "1", color:"#C57E8E" }} onClick={handleOnlySaves} />
                    {/* </IconButton> */}
                    <p style={{fontFamily:"monospace", letterSpacing:"1px", fontSize:"16px"}}>saved goods</p>
                </div>
                <div style={{ display: "flex", alignItems:"center", flexDirection: "row" }}>
                    <SellIcon style={{ marginRight: "10px", alignItems: "center", paddingTop: "0", marginTop: "0", marginBottom: "1", color:"#cfe2f3" }} onClick={handleOnlyMyListings} />
                    <p style={{ fontFamily: "monospace", letterSpacing: "1px", fontSize: "16px" }}>my goods for sale</p>
                </div>
                {/* <button style={{ marginBottom:"15px", padding: "12px 18px", backgroundColor: "white", color: "chocolate brown" }} onClick={handleOnlySaves}>SAVED GOODS</button>
                <button style={{ padding: "12px 18px", backgroundColor: "white", color: "chocolate brown" }} onClick={handleOnlyMyListings}>MY GOODS FOR SALE</button> */}
            </div>
            : null }
            {isSavedItemsLayout ? 
            <div style={{ justifyContent: "center", marginTop: "25px", marginBottom: "15px", display: "flex", flexDirection: "column" }}>
                <button style={{ marginBottom: "10px", padding: "15px 18px", backgroundColor: "white", color: "chocolate brown" }} onClick={handleOnlyMyListings}>MY GOODS FOR SALE</button>
                <button style={{ padding: "15px 18px", backgroundColor: "white", color: "chocolate brown" }} onClick={handleNormalLayout}>VIEW ALL</button>
            </div>
            : null}
            {isMyItemsLayout ?
            <div style={{ marginTop:"20px", marginBottom:"15px", display: "flex", flexDirection: "column" }}>
                <button style={{ marginBottom: "10px", padding: "15px 18px", backgroundColor: "white", color: "chocolate brown" }} onClick={handleOnlySaves}>SAVED GOODS</button>
                <button style={{ padding: "12px 18px", backgroundColor: "white", color: "chocolate brown" }} onClick={handleNormalLayout}>VIEW ALL</button>
            </div> : null}
        </div>
    </div>
)}

export default ProfileBox;