const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Setup Database
const db = JSON.parse(fs.readFileSync("./database.json").toString("ascii"));

// Set Route
app.get("/", (req, res) => {
    res.send("Up and Running");
});

app.get("/siswa/all", (req, res) => {
    console.log("Request Siswa");
    res.json(db.siswa);
})

app.get("/siswa/:absen", (req, res) => {
    const absenNow = parseInt(req.params.absen)
    if (!absenNow) {
        res.sendStatus(404);
        return ;
    }

    const result = db.siswa[absenNow-1];
    if(!result) {
        res.statusCode = 404;
        res.send("Index Not Found");
        return ;
    } 
    res.json(result);
})

app.get("/guru/all", (req, res) => {
    console.log("Request Guru");
    res.json(db.guru);
})

app.get("/guru/:absen", (req, res) => {
    const absenNow = parseInt(req.params.absen)
    if (!absenNow) {
        res.sendStatus(404);
        return ;
    }

    const result = db.guru[absenNow-1];
    if(!result) {
        res.statusCode = 404;
        res.send("Index Not Found");
        return ;
    } 
    res.json(result);
})

app.post("/suggestions", (req, res) => {
    console.log(req.body.content);
    db.suggestions.push(req.body.content);
    res.sendStatus(200);
});

app.get("/suggestions", (req, res) => {
    const str = "<h1>SUGGESTIONS</h1><br><hr><br><pre>" + db.suggestions.map((val, idx) => {return `${idx+1}. ${val}`}).join("\n") + "</pre>";
    res.send(str);
})

app.listen(3000, ()=>{console.log("Listening on port 3000!")});