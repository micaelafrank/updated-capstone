import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function UserProfile({ user, setUser }) {
    const { id, username, email, firstname, lastname, profilepic } = user;
    const [newProfPic, setNewProfPic] = useState(profilepic);
    const [newUserEmail, setNewUserEmail] = useState(email);
    const [newUserPassword, setNewUserPassword] = useState("");
    const [show, setShow] = useState(false);
    const [showProfPic, setShowProfPic] = useState(false);
    const [showUserEmail, setShowUserEmail] = useState(false);
    const [showUserPassword, setShowUserPassword] = useState(false);
    const navigate = useNavigate();


    function handleProfPicChange() {
        fetch(`/api/users/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ profilepic: newProfPic })
        })
        .then(r => r.json())
        .then(data => {
            setUser(data)
            setShowProfPic(false)}
        )};


    function handleEmailChange() {
        fetch(`/api/users/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: newUserEmail })
        })
            .then(r => r.json())
            .then(data => {
                setUser(data);
                setShowUserEmail(false);
            });
    };

    function handlePasswordChange() {
        fetch(`/api/users/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password: newUserPassword }),
        })
            .then((r) => r.json())
            .then((update) => {
                setUser(update);
                setShowUserPassword(false);
            });
    };

    function handleDeleteUser() {
        fetch(`/api/users/${id}`, { method: "DELETE" })
        fetch("/api/logout", { method: "DELETE" })
            .then((r) => {
                if (r.ok) {
                    setUser({});
                    navigate("/signup");
                }
            });
    };


    return (
        <div className="align-self-center text-center">
            <div className="container mx-auto px-5">
                <div className="row">
                    <p className="fs-3">My Profile</p>
                </div>
                <div className="row align-items-center border border-2 border-dark bg-light rounded mx-auto pt-5 pb-5">
                    <div className="col">
                        <p className="fs-4">{firstname} {lastname}</p>
                        <p className="fs-4">{username}</p>
                        <img
                            src={profilepic}
                            alt="profile"
                            style={{ width: "175px", borderRadius: "50%" }}
                        />
                        <br />
                        <br />
                        <Button
                            variant="secondary"
                            onClick={() => setShowProfPic(true)}
                            className="rounded"
                            size="sm"
                        >
                            Edit Image
                        </Button>
                    </div>
                    <div className="col text-start">
                        <div className="row">
                            <div className="col">
                                Email: {email}
                                <Button
                                    variant="secondary"
                                    onClick={() => setShowUserEmail(true)}
                                    className="rounded-pill"
                                    size="sm"
                                >
                                    Change Email
                                </Button>
                                <br />
                                <br />
                                <Button
                                    variant="secondary"
                                    onClick={() => setShowUserPassword(true)}
                                    className="rounded-pill"
                                    size="sm"
                                >
                                    Change Password
                                </Button>
                                <br />
                                <br />
                                <Button
                                    variant="danger"
                                    onClick={() => setShow(true)}
                                    className="rounded-pill"
                                    size="sm"
                                >
                                    Delete Account
                                </Button>
                            </div>
                        </div>

                        <ProfileCard
                            profilepic={profilepic}
                            showProfPic={showProfPic}
                            setShowProfPic={setShowProfPic}
                            setNewProfPic={setNewProfPic}
                            show={show}
                            setShow={setShow}
                            handleProfPicChange={handleProfPicChange}
                            handleDeleteUser={handleDeleteUser}
                            showUserEmail={showUserEmail}
                            setShowUserEmail={setShowUserEmail}
                            email={email}
                            setNewUserEmail={setNewUserEmail}
                            handleEmailChange={handleEmailChange}
                            showUserPassword={showUserPassword}
                            setShowUserPassword={setShowUserPassword}
                            setNewUserPassword={setNewUserPassword}
                            handlePasswordChange={handlePasswordChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default UserProfile;