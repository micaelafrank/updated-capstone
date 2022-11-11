import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


function ProfileCard({ profilepic, show, setShow, showProfPic, setShowProfPic, setNewProfPic, handleProfPicChange, handleDeleteUser, showUserEmail, setShowUserEmail, email, setNewUserEmail, handleEmailChange, showUserPassword, setShowUserPassword, setNewUserPassword, handlePasswordChange }){
   
    const editPicModal = (
        <Modal show={showProfPic} onHide={() => setShowProfPic(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Profile Picture</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="text"
                    placeholder={profilepic}
                    onChange={(e) => setNewProfPic(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowProfPic(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleProfPicChange}>
                    Update Image
                </Button>
            </Modal.Footer>
        </Modal>
    );

    const editEmail = (
        <Modal show={showUserEmail} onHide={() => setShowUserEmail(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="email"
                    placeholder={email}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowUserEmail(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleEmailChange}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    );

    const editPW = (
        <Modal show={showUserPassword} onHide={() => setShowUserPassword(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="text"
                    placeholder="Enter new password..."
                    onChange={(e) => setNewUserPassword(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowUserPassword(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={handlePasswordChange}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    );

    const deleteAcctModal = (
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete your account?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleDeleteUser}>
                    Delete My Account
                </Button>
            </Modal.Footer>
        </Modal>
    );

    return (
        <>
            {editPicModal}
            {editEmail}
            {editPW}
            {deleteAcctModal}
        </>
    );
}

export default ProfileCard;