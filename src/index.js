require("./database/connection")
const express = require("express");
const app = express();
const Student = require("./models/student");
const port = process.env.PORT || 3000;

app.use(express.json());
// app.post("/student", (req, res) => {
//     const user = new Student(req.body)
//     // res.send("reading the data")
//     console.log(req.body)
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })

// same part of code we can write using try and catch block of code
app.post("/student", async (req, res) => {
    try {
        const user = new Student(req.body)

        const createData = await user.save();
        res.status(201).send(createData);
    } catch (error) {
        res.status(400).send(error);
    }
})

// read the student data by using get method
app.get("/student", async (req, res) => {
    try {
        const studentData = await Student.find();
        res.send(studentData)
    } catch (e) {
        res.send(e)
    }
})

app.listen(port, () => {
    console.log(`listen at port ${port}`)
})