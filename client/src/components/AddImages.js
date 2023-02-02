// import React, {useEffect, useState} from "react";
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import InputLabel from '@mui/material/InputLabel';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import { useNavigate } from "react-router-dom";

// function AddImages({ items, setItems }){
//     const theme = createTheme();
//     const navigate = useNavigate();

//     let handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData();

//         let imagesLength = e.target.images.files.length;
//         let eachImage = e.target.images.files;

//         for (var x = 0; x < imagesLength; x++) {
//             formData.append("images[]", eachImage[x]);
//         }
//         fetch("/api/add-images", {
//             method: "POST",
//             body: data,
//         })
//             .then(res => res.json())
//             .then(data => console.log("image added data: ", data))

//         // e.target.reset();
//     };

//     function handlePreviewImage(e){
//         e.preventDefault();
//         const formData = new FormData();
//         let newItemPrevImg = e.target.preview_image.files[0];

//         formData.append("[preview_image]", newItemPrevImg);

//         previewSubmitToApi(formData);
//     };

//     let previewSubmitToApi = (data) => {
//         fetch("/api/add-preview-image", {
//             method: "POST",
//             body: data,
//         }).then(res => res.json())
//             .then(data => console.log(data));
//         // .then((resp) => resp.json())
//         // .then((data) => console.log(data));
//     };

//     useEffect(() => {
//         fetch("/api/items")
//             .then((r) => r.json())
//             .then(data => setItems(data))
//     }, [])
//     console.log(items.length)
//     let itemCount = items.length;
//     console.log(itemCount)

//     let submitToApi = (data) => {
//         fetch("/api/add-images", {
//             method: "POST",
//             body: data,
//         })
//         .then(res => res.json())
//         .then(data => console.log("image added data: ", data))
//         navigate(`/buy`)
//     };


//     return(
//         <ThemeProvider theme={theme}>
//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <Box
//                     sx={{
//                         marginTop: 4,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                     id="newItemId"
//                 >
//                 <form onSubmit={handleSubmit}>
//                     <Divider title={"Show off your item!"} />
//                     <Grid item xs={12}>
//                         <InputLabel>Upload main photo</InputLabel>
//                         <input
//                             type="file"
//                             name="preview_image"
//                             id="preview_image"
//                             onChange={handlePreviewImage}
//                             accept="image/*"
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <InputLabel>Upload additional images:</InputLabel>
//                         <input
//                             type="file"
//                             id="images"
//                             name="file"
//                             multiple="multiple"
//                             accept="image/*"
//                         />
//                     </Grid>
//                     <div className="text-center mt-3">
//                         <Button variant="primary" type="submit">
//                             Submit
//                         </Button>
//                     </div>
//                 </form>
//             </Box>
//         </Container>
//     </ThemeProvider>
//     )
// }

// export default AddImages;