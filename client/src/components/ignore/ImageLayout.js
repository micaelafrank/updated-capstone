import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';


function ImageLayout(){
    const [imageNum, setImageNum] = useState(0);

    const loginImgs = [
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/2130/005/500/2130005500_2_7_2.jpg?t=1665749355836&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/8306/008/715/8306008715_2_7_2.jpg?t=1667549977231&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/9118/004/400/9118004400_7_1_2.jpg?t=1668172045449&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/8357/004/114/8357004114_2_7_2.jpg?t=1667549987191&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/3256/022/052/3256022052_2_7_2.jpg?t=1667568785579&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2228/000/800/BH/BU/2228000800_7_1_2.jpg?t=1667484886860&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2460/000/528/BH/BU/2460000528_7_1_2.jpg?t=1667484892118&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2289/000/712/ZH/XX/2289000712_7_1_2.jpg?t=1667484894192&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2023/V/4/1/b/2226/000/914/ZH/XX/2226000914_7_1_2.jpg?t=1668520687688&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2460/000/800/ZH/XX/2460000800_7_1_2.jpg?t=1667569693167&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/2215/409/500/2215409500_2_7_5.jpg?t=1656000246221&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2460/000/800/ZH/XX/2460000800_2_1_2.jpg?t=1667569693167&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2221/000/112/ZH/DV/2221000112_1_1_2.jpg?t=1660913895719&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2289/000/712/ZH/XX/2289000712_2_1_2.jpg?t=1667484894192&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2273/000/251/ZH/VV/2273000251_2_1_2.jpg?t=1667484893644&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2228/000/800/BH/BU/2228000800_2_1_2.jpg?t=1667484886860&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/5270/000/982/BH/BU/5270000982_2_1_2.jpg?t=1667490039379&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/2231/022/120/2231022120_7_1_2.jpg?t=1667551576936&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/7222/022/802/7222022802_7_1_2.jpg?t=1667551393025&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/3223/550/120/3223550120_2_7_2.jpg?t=1658216255403&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/3249/022/120/3249022120_2_7_2.jpg?t=1666263788336&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/6204/022/712/6204022712_2_7_2.jpg?t=1667551189152&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2231/000/120/BH/NI/2231000120_1_1_2.jpg?t=1664527045706&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/1221/022/115/1221022115_2_7_2.jpg?t=1667551522985&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/7298/401/826/7298401826_2_7_2.jpg?t=1662108367272&imwidth=985&imformat=chrome",
        "https://i.etsystatic.com/21668141/r/il/9b0a1f/4390569481/il_1588xN.4390569481_a8vw.jpg",
    ];
    useEffect(() => {
        setImageNum(Math.floor(Math.random() * 26));
    }, []);

    return(
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: `url(${loginImgs[imageNum]})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                    t.palette.mode === "light"
                        ? t.palette.grey[50]
                        : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1 className="header">GOOD GOODS</h1>

        </Grid>

    )
}

export default ImageLayout;