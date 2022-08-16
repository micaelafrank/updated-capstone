import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

export default ({ setUser, user, itemCount }) => {
    return (
        <>
            <NavBar user={user} setUser={setUser} itemCount={itemCount} />
            <Outlet />
        </>
    );
};