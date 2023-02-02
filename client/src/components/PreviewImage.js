
import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";

function PreviewImage({  }) {
    const theme = createTheme();

    let handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        // const dessertId2 = document.getElementById("dessertId2").value;
        // formData.append("[id]", dessertId2);

        let newItemPrevImg = e.target.preview_image.files[0];

        formData.append("[preview_image]", newItemPrevImg);

        previewSubmitToApi(formData);
        // e.target.reset();
    };

    let previewSubmitToApi = (data) => {
        fetch("/api/add-preview-image", {
            method: "POST",
            body: data,
        }).then(res => res.json())
        .then(data => console.log(data));
        // .then((resp) => resp.json())
        // .then((data) => console.log(data));
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    id="newItemId"
                >
                <form onSubmit={handleSubmit}>
                    <Divider title={"Submit the main photo for your listing"} />
                    <Grid item xs={12}>
                        <InputLabel>Upload:</InputLabel>
                        <input
                            type="file"
                            name="preview_image"
                            id="preview_image"
                            accept="image/*"
                        />
                    </Grid>
                    <div className="text-center mt-3">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </Box>
        </Container>
    </ThemeProvider>
    );
}

export default PreviewImage;