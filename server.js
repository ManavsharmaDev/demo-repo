const express = require ("express");

const app = express();

const port = 3000;

app.get("/", function(req, res) {
    res.send("Hello, Express is working");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
