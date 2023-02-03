import React from "react"
import { Avatar, Button } from '@mui/material';
import SellIcon from '@mui/icons-material/Sell';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

function ProfileBox({ isNormalLayout, isMyItemsLayout, isSavedItemsLayout, handleOnlyMyListings, user, handleOnlySaves, handleNormalLayout }){

return(
    <div className="profileBioBox">
        <Avatar
            className="avatarImg"
            sx={{ height: "220px", border: "5px solid #583d33", width: "220px", marginLeft: "auto", marginRight: "auto", alignItems: "center", justifyContent: "center" }}
            src={user.images_url}
        />
        <br />
        <div style={{marginLeft:"auto", alignItems:"center", textAlign:"center", marginRight:"auto"}}>
            {/* <h3 style={{ textAlign: "center", fontWeight:"normal", color: "white", letterSpacing:"1.2px", fontSize: "22px", marginTop:"8px", marginBottom:"10px", padding:"0", fontFamily: "monospace" }}>@{user.username} </h3> */}
            <h2 style={{ textAlign: "center", fontWeight: "normal", color: "black", fontSize: "24px", padding: "5px 0 10px 0", margin: "0", fontFamily: "monospace", height: "25px", textShadow:"1px 1px #583d33" }}>@{user.username} </h2>
            <h3 style={{ color: "#583d33", fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", margin: "0", padding: "10px 0", height:"25px", textTransform:"lowercase" }}>{user.firstname} {user.lastname} </h3>
            <h3 style={{ color: "#583d33", fontWeight: "bold", fontSize: "18px", fontFamily: "monospace", margin: "0", padding: "10px 0", height: "25px", textTransform: "lowercase" }}>{user.email}</h3>
        </div>
        <div style={{ justifyContent:"left", alignItems:"left", width:"100%", marginTop:"25px", marginBottom: "15px", display: "flex", flexDirection: "column" }}>
                {/* <IconButton aria-label="delete" style={{ alignItems: "center", paddingTop: "0", marginTop: "0", marginBottom: "0" }} onClick={handleOnlySaves}> */}
            <div style={{ display: "inline-flex", marginBottom:"10px", height:"55px", alignItems: "left", textAlign:"left", flexDirection: "row", justifyContent:"left"}}>
                <Button style={{ margin:"0", color: "none", backgroundColor: "none", borderBottom: "0", borderRadius: "0"}} onClick={handleOnlySaves}>
                    <FavoriteIcon className="icon-style" style={{ stroke: "#583d33", fontSize: "2em", cursor: "pointer", marginRight: "10px", alignItems: "center", paddingLeft: "0", marginLeft: "0", paddingTop: "0", marginTop: "0", marginBottom: "1", color:"#cfe0c3" }} onClick={handleOnlySaves} />
                    <span style={{ fontFamily: "monospace", margin: "0", cursor: "pointer", color: "#583d33", borderBottom: "2px solid #583d33", fontWeight: "bold", fontSize:"16px"}}>saved goods</span>
                </Button>
            </div>
            <div style={{ display: "inline-flex", marginBottom: "10px", height: "55px", marginBottom: "15px", alignItems: "left", flexDirection: "row", justifyContent: "left" }}>
                <Button style={{  margin:"0", color: "none", backgroundColor: "none", borderBottom: "0", borderRadius: "0" }} onClick={handleOnlyMyListings}>
                    <SellIcon className="icon-style" style={{ stroke: "#583d33", fontSize: "2em", cursor: "pointer", marginRight: "10px", alignItems: "center", paddingTop: "0", marginTop: "0", marginBottom: "1", color: "#cfe0c3" }} />
                    <span style={{ cursor: "pointer", margin: "0", fontFamily: "monospace", color: "#583d33", letterSpacing: "1px", fontSize: "16px", borderBottom: "2px solid #583d33", fontWeight: "bold", }}>my goods for sale</span>
                </Button>
            </div>
            <div style={{ display: "inline-flex", marginBottom: "10px", height: "55px", alignItems: "left", flexDirection: "row", justifyContent: "left" }}>
                <Button style={{ margin: "0", color: "none", backgroundColor: "none", borderBottom: "0", borderRadius: "0" }} onClick={handleNormalLayout}>
                    <AssignmentIndIcon className="icon-style" style={{ stroke: "#583d33", fontSize: "2em", cursor: "pointer", marginRight: "10px", alignItems: "center", paddingLeft: "0", marginLeft: "0", paddingTop: "0", marginTop: "0", marginBottom: "1", color: "#cfe0c3" }} onClick={handleOnlySaves} />
                    <span style={{ fontFamily: "monospace", margin: "0", cursor: "pointer", color: "#583d33", borderBottom: "2px solid #583d33", fontWeight:"bold", fontSize: "16px" }}>view all</span>
                </Button>
            </div>
                {/* <div style={{ display: "flex", alignItems:"center", flexDirection: "row" }}> */}
                {/* <button style={{ marginBottom:"15px", padding: "12px 18px", backgroundColor: "white", color: "chocolate brown" }} onClick={handleOnlySaves}>SAVED GOODS</button>
                <button style={{ padding: "12px 18px", backgroundColor: "white", color: "chocolate brown" }} onClick={handleOnlyMyListings}>MY GOODS FOR SALE</button> */}
        </div>
            {/* {isSavedItemsLayout ? 
            <div style={{ justifyContent: "flex-start", alignItems: "left", width: "100%", marginTop: "25px", marginBottom: "15px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "inline-flex", height: "55px", marginBottom: "5px", alignItems: "center", flexDirection: "row" }}>
                    <Button style={{ margin: "0", color: "none", backgroundColor: "none", borderBottom: "0", borderRadius: "0" }} onClick={handleOnlyMyListings}>
                        <SellIcon style={{ fontSize: "2em", cursor: "pointer", marginRight: "10px", alignItems: "center", paddingTop: "0", marginTop: "0", marginBottom: "1", color: "#cfe2f3" }} />
                        <span style={{ cursor: "pointer", margin: "0", fontFamily: "monospace", color: "black", letterSpacing: "1px", fontSize: "16px", borderBottom: "1px solid black" }}>my goods for sale</span>
                    </Button>
                </div>
                <div style={{ display: "inline-flex", height: "55px", alignItems: "center", textAlign: "left", flexDirection: "row" }}>
                    <Button style={{ margin: "0", color: "none", backgroundColor: "none", borderBottom: "0", borderRadius: "0" }} onClick={handleNormalLayout}>
                        <AssignmentIndIcon style={{ fontSize: "2em", cursor: "pointer", marginRight: "8px", alignItems: "center", paddingLeft: "0", marginLeft: "0", paddingTop: "0", marginTop: "0", marginBottom: "1", color: "#C57E8E" }} onClick={handleOnlySaves} />
                        <span style={{ fontFamily: "monospace", margin: "0", cursor: "pointer", color: "black", borderBottom: "1px solid black", fontSize: "16px" }}>view all</span>
                    </Button>
                </div>
            </div>
            : null} */}

            {/* <div style={{ justifyContent: "center", marginTop: "25px", marginBottom: "15px", display: "flex", flexDirection: "column" }}>
                <button style={{ marginBottom: "10px", padding: "15px 18px", backgroundColor: "white", color: "chocolate brown" }} onClick={handleOnlyMyListings}>MY GOODS FOR SALE</button>
                <button style={{ padding: "15px 18px", backgroundColor: "white", color: "chocolate brown" }} onClick={handleNormalLayout}>VIEW ALL</button>
            </div> */}
            {/* {isMyItemsLayout ?
            <div style={{ marginTop:"20px", marginBottom:"15px", display: "flex", flexDirection: "column" }}>
                <button style={{ marginBottom: "10px", padding: "15px 18px", backgroundColor: "white", color: "chocolate brown" }} onClick={handleOnlySaves}>SAVED GOODS</button>
                <button style={{ padding: "12px 18px", backgroundColor: "white", color: "chocolate brown" }} onClick={handleNormalLayout}>VIEW ALL</button>
            </div> : null} */}
        </div>
)}

export default ProfileBox;