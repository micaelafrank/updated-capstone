import React from 'react';
import SpecialNavBar from '../SpecialNavBar'; 
import { Outlet } from 'react-router-dom';


export default ({ setUser, user, itemCount, darkMode, setDarkMode }) => {
    return (
        <>
            <SpecialNavBar user={user} setUser={setUser} itemCount={itemCount} darkMode={darkMode} setDarkMode={setDarkMode} />
            <Outlet />
        </>
    );
};