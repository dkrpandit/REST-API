require("./database/connection")
const express = require("express");
const app = express();
const Student = require("./models/student");
const port = process.env.PORT || 3000;

app.use(express.json());
app.post("/student", (req, res) => {
    const user = new Student(req.body)
    // res.send("reading the data")
    console.log(req.body)
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.listen(port, () => {
    console.log(`listen at port ${port}`)
})