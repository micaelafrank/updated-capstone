import React from 'react';

function ConfirmDelete({ item }){
return (
    <>
        <div className='modal-container'>
            <section className="modal">
                <Button variant="primary" onClick={handleShow}>Edit Voter Information</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header className="modal-header">
                        {/* closeButton> */}
                        <Form.Group className="XIconContainer" onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </Form.Group>
                        <Modal.Title>
                            ARE YOU SURE?
                        </Modal.Title>
                        <Modal.Title>
                            Delisting an item cannot be undone. {itemname} will no longer be visible to shoppers, and anyone with the item already in their carts will not be able to purchase it.  
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>  
                        <Button variant="secondary" className="modal-btn" id="modal1" onClick={handleClose}>
                            CANCEL
                        </Button>
                        <Button variant="secondary" className="modal-btn" id="modal1" onClick={handleClose}>
                            I'M SURE. DELETE MY LISTING.
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        </div>
    </>
);
}

export default ConfirmDelete;