const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/student', {
}).then(() => {
    console.log("connection is successfully")
}).catch((err) => {
    console.log("failed to connect the database")
})