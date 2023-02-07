// import React, { useState, useEffect } from 'react'
// import FormControl from '@mui/material/FormControl'
// import InputLabel from '@mui/material/InputLabel'
// import Input from '@mui/material/Input'
// import FormHelperText from '@mui/material/FormHelperText'
// import { useNavigate } from 'react-router-dom'
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import { createTheme } from '@mui/material'
// import { brown } from '@mui/material/colors';


// function NewItemImages({ user, addNewItem, items, setItems }) {
//     const [images, setImages] = useState([]);
//     const [description, setDescription] = useState("")
//     const [page, setPage] = useState(2)

//     const veryDarkBrown = brown[500];

//     const navigate = useNavigate();

//     function handleSubmit(e) {
//         e.preventDefault();
//         const formData = new FormData();

//         const newItemId = document.getElementById("newItemId");
//         formData.append("[id]", newItemId);

//         let imagesLength = e.target.images.length;
//         let eachImage = e.target.images;

//         for (let i = 0; i < imagesLength; i++) {
//             formData.append("images[]", eachImage[i]);
//         }

//     // function handleSubmit(){
//         fetch("/api/add-images", {
//             method: "POST",
//             body: formData,
//         })
//         .then(navigate("/buy"))
//     }   

//     return(
//         <div className='field1' style={{ display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto" }}>
//             <h1 style={{ textAlign: "center", fontSize: "35px", paddingTop: "40px", fontFamily: "monospace", fontWeight: "bold", color: veryDarkBrown, marginBottom: "0" }}>SELL YOUR GOODS</h1>
//             <p style={{ textAlign: "center", fontSize: "22px", paddingBottom: "0", marginBottom: "7px", textShadow: "1px 1px #c98d6d", fontFamily: "monospace", color: "black" }}>great sellers make good goods</p>
//             <p style={{ textAlign: "center", fontSize: "17px", paddingBottom: "20px", paddingTop: "15px", color: "black" }}>IT'S ALL IN THE DETAILS</p>
//             <h5 style={{ marginLeft: "15px" }} className='form-box-h5'> Page {page} of 2</h5>

//             <div style={{ width: "100%", height: "120px" }}>
//                 <FormControl>
//                     <InputLabel
//                         style={{ position: "relative", fontFamily: "monospace" }}
//                         htmlFor='my-input' >
//                         Upload an image
//                     </InputLabel>
//                     <Input
//                         type="file"
//                         accept="image/*"
//                         multiple="multiple"
//                         name="images"
//                         id="images"
//                         // onChange={handleImages}
//                         style={{ alignItems: "left", marginTop: "2em", paddingLeft: "20px", paddingRight: "390px", }}
//                     />
//                     <FormHelperText id='my-helper-text' style={{ textAlign: "left", fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}>
//                         SHOW OFF YOUR ITEM
//                     </FormHelperText>
//                 </FormControl>
//                 <FormControl>
//                     <InputLabel
//                         style={{ position: "relative", fontFamily: "monospace" }}
//                         htmlFor='my-input' >
//                         Add another image (optional)
//                     </InputLabel>
//                     <Input
//                         type="file"
//                         name="file"
//                         id="file"
//                         multiple
//                         accept="image/*"
//                         style={{ alignItems: "left", marginTop: "2em", paddingLeft: "20px", paddingRight: "390px", }}
//                     />
//                     <FormHelperText id='my-helper-text' style={{ textAlign: "left", fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}>
//                         SHOW OFF YOUR ITEM
//                     </FormHelperText>
//                 </FormControl>
                {/* <FormControl>
                    <InputLabel
                        style={{ position: "relative", fontFamily: "monospace" }}
                        htmlFor='my-input' >
                        Add another image (optional)
                    </InputLabel>
                    <Input
                        type="file"
                        id="image3"
                        name="file"
                        accept="image/*"
                        onChange={handleImages}
                        style={{ alignItems: "left", marginTop: "2em", paddingLeft: "20px", paddingRight: "390px", }}
                    />
                    <FormHelperText id='my-helper-text' style={{ textAlign: "left", fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}>
                        SHOW OFF YOUR ITEM
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel
                        style={{ position: "relative", fontFamily: "monospace" }}
                        htmlFor='my-input' >
                        Add another image (optional)
                    </InputLabel>
                    <Input
                        type="file"
                        id="image4"
                        name="file"
                        accept="image/*"
                        style={{ alignItems: "left", marginTop: "2em", paddingLeft: "20px", paddingRight: "390px", }}
                    />
                    <FormHelperText id='my-helper-text' style={{ textAlign: "left", fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}>
                        SHOW OFF YOUR ITEM
                    </FormHelperText> */}
                {/* </FormControl>  */}
//             </div> 
//             <button
//                 style={{ cursor: "pointer", fontSize: "15px", marginTop: "15px", border: "1px solid black", borderRadius: "3px", letterSpacing: "1.2px", backgroundColor: veryDarkBrown, fontFamily: "monospace", marginRight: "30px", padding: "9px 20px", color: "white" }}
//                 className="nextBtn"
//                 type="submit"
//                 onClick={handleSubmit}
//             // onClick={() => setPage((page) => page + 1)}
//             >
//                 SUBMIT
//             </button>
//         </div>
//     )
// }

// export default NewItemImages;