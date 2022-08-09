import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Navigation({ user, setUser, itemCount }) {
    // const [itemCount, setItemCount] = useState(0);
    const navigate = useNavigate();

    // function handleLogout() {
    //     fetch("/logout", {
    //         method: "DELETE",
    //     }).then((r) => {
    //         if (r.ok) {
    //             setUser({});
    //             navigate('/login')
    //         }
    //     })};

    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
                navigate('/login')
            }
        });
    }

    function openShoppingCart() {
        navigate("/mycart")
    }

    return (
        <header className="navbarContainer" >
            <div className="navbar-nav navbar-css">
                <a href="/"><img src="" width="100px" style={{ paddingLeft: "15px", paddingRight: "10px" }} /></a>
                {/* <Link className="nav-item" exact="true" to="/">Home</Link> */}
                {/* {user ? (
                <button onClick={handleLogout}>Logout</button>
                ) : (  */}
                <div className="centered">
                    {user.username ?
                        <>
                            <button className="nav-button" style={{ color: "black", border: "2px solid black" }}><Link to="/profile">Profile</Link></button>
                            <button className="nav-button" style={{ color: "black", border: "2px solid black" }}><Link to="/buy">Buy</Link></button>
                            <button className="nav-button" style={{ color: "black", border: "2px solid black" }}><Link to="/sell">Sell</Link></button>
                        </>
                        : null}
                    {user.username ? <button className="nav-button" style={{ color: "black", border: "2px solid black" }} onClick={handleLogout}>Logout</button> : <button className="nav-button" style={{ color: "black", border: "2px solid black" }} onClick={() => navigate('/login')}>Log In</button>}
                    {/* )} */}
                </div>
            </div>
            <div id="userNav" style={{ paddingRight: "20px" }}>
                <p style={{ paddingRight: "20px" }}>{user.username ? "Signed in as: " : "Log in"}<span style={{ fontWeight: "bold" }}>{user.username ? user.username : null}</span></p>
                <div style={{ display: "block", padding: 30 }}>
                    {user.username ? <div onClick={openShoppingCart}>
                        <p color="secondary" badgeContent={itemCount} alignItems="center">
                            View Cart
                        </p>
                    </div> : null}
                </div>
                {/* <span id="userNavCartContainer">
                    <ShoppingCartOutlinedIcon />
                </span> */}
            </div>
        </header>
    )
};

export default Navigation;