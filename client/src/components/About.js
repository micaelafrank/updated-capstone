import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { brown } from '@mui/material/colors';
import { Container } from '@mui/material';
import { Box } from '@mui/material';

function About(){
    const theme = createTheme({
        palette: {
            primary: {
                // Purple and green play nicely together.
                main: '#795548',
                lighter: brown.A100,
            },
            secondary: {
                // This is green.A700 as hex.
                main: '#bbe5ca',
            },
        },
    });

    return(
    <ThemeProvider theme={theme}>
        <Container component="main">
            <CssBaseline />
                <Box>
                    <Typography component="h2" variant="h2" 
                    sx={{paddingTop: '35px', textAlign:"center", color: "primary.main", fontFamily: 'monospace'}}>
                        GOOD GOODS
                    </Typography>
                    <Typography component="h1" variant="h5"
                     sx={{ ml: 3, mr: 3, mb:5, color: "primary", fontFamily: 'monospace', pt: 2, textAlign: "center", lineHeight: 1.6, fontSize: "24px" }}>
                        SUSTAINABLE SHOPPING YOU CAN FEEL <span style={{ color: "primary.main", fontWeight: 'bold' }}>GOOD</span> ABOUT 
                    </Typography>
                    <Typography component="h1" variant="h5"
                        sx={{ pb: 4, textAlign: "center", fontSize: "18px", color: "secondary.darker", letterSpacing: 1.2, lineHeight: 2 }}>
                        <span style={{ textWeight: "bold" }}>We're giving items and objects a second chance at life.</span><br></br>
                        GOOD GOODS is a communal marketplace of bits and masterpieces where you can buy, sell, and resell!<br></br>
                        Whether handmade, bought, used, or new, any item is fair game.
                    </Typography>
                    <Typography component="h1" variant="h3"
                        sx={{ pb: 1, textAlign:"center", fontSize: "22px", color: "primary.main", letterSpacing: 1, lineHeight: 2, marginLeft:"15%", marginRight:"15%", textAlign:"center", fontWeight:"bold"}}>HOW DOES IT WORK?
                    </Typography>
                    <Typography component="h1" variant="h5"
                        sx={{ pb: 2, textAlign: "left", fontSize: "18px", color: "secondary.darker", letterSpacing: 1, lineHeight: 1.5, marginLeft: "15%", marginRight: "15%" }}>
                        1. Sign up as a GOOD GOODS user<br></br>
                    </Typography>
                    <Typography component="h1" variant="h5"
                        sx={{ pb: 2, textAlign: "left", fontSize: "18px", color: "secondary.darker", letterSpacing: 1, lineHeight: 1.5, marginLeft: "15%", marginRight: "15%" }}>
                        2. To sell, list an item by completing the <b>SELL</b> form. If it gets sold, you'll get notified and you'll receive payment to your credit card via Stripe. You're in charge of shipping the item within 3-5 business days.
                    </Typography>
                    <Typography component="h1" variant="h5"
                        sx={{ pb: 2, textAlign: "left", fontSize: "18px", color: "secondary.darker", letterSpacing: 1, lineHeight: 1.5, marginLeft: "15%", marginRight: "15%" }}>
                        3. To buy, scroll the <b>BUY</b> page for a list of all available items for sale. Add to cart & checkout!<br></br>
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider >
    )
}

export default About;