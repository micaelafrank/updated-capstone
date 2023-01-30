import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';


export default ({ change, setChange, cartCount, setUser, user, itemCount, darkMode, setDarkMode }) => {
    return (
        <>
            <NavBar cartCount={cartCount} setChange={setChange} user={user} setUser={setUser} itemCount={itemCount} darkMode={darkMode} setDarkMode={setDarkMode} />
            <Outlet />
        </>
    );
};