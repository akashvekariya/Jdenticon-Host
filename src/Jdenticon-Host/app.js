const express = require("express");
const jdenticon = require("jdenticon");

const app = express();

app.get("/getJdenticon", (req, res) => {
    const email = req.query.email;

    if (email) {
        jdenticon.configure({
            lightness: {
                color: [0.28, 0.73],
                grayscale: [0.14, 0.46],
            },
            saturation: {
                color: 0.86,
                grayscale: 1.0,
            },
            backColor: "#fff",
        });

        const image = jdenticon.toPng(email, 200);
        res.set("Content-Type", "image/png");
        res.send(image);

    } else {
        res.status(400).send("Missing email parameter");
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
