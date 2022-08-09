import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { getRandomColor } from './getRandomColor';


function Home({ user }) {
    const randomColor = getRandomColor();
    const [color, setColor] = useState(randomColor);

    function handleColorChange() {
        const newRandomColor = getRandomColor();
        setColor(newRandomColor);
    }

    function transformCube() {
        document.getElementById('img').className = 'login-image';
    }

    return (
        <section style={{ width: "100%", height: "700px", backgroundColor: color }} onClick={handleColorChange}>
            <div style={{ display: "flex", height: "500px", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "100%", fontFamily: "Rubik", color: "white", textAlign: "center", justifyContent: "center", paddingTop: "30px", margin: "auto" }}>
                    <h3>A marketplace for rare and collectible cubing items</h3>
                    <h4>Shop, sell, solve!</h4>
                    <div style={{ display: "flex", flexDirection: "column", width: "10em", alignItems: "center", justifyContent: "center", margin: "auto" }}>
                        <Link style={{ marginBottom: "20px", marginTop: "20px", borderRadius: "3px", border: "1px solid white", backgroundColor: "white", padding: "10px 20px", color: color, fontSize: "15px", fontFamily: "Rubik", justifyContent: "center", alignItems: "center" }} to="/login">Login</Link>
                        <Link style={{ borderRadius: "3px", border: "1px solid white", backgroundColor: "white", padding: "10px 20px", color: color, fontSize: "15px", fontFamily: "Rubik" }} to="/signup">Sign Up</Link>
                    </div>
                </div>
                <h1 style={{ display: "flex", flexDirection: "column", width: "80%" }}>
                    <img className="homepage-image-top" src="./logo-top.png" width="300px" />
                    <img className="homepage-image-middle" src="./logo-middle.png" width="300px" />
                    <img className="homepage-image-bottom" src="./logo-bottom.png" width="300px" />
                </h1>
            </div>
        </section>
    )
}

export default Home;