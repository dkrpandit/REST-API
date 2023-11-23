const mongoose = require("mongoose");

const validator = require("validator");


// creating a schema for student databases 
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "this email is already used"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("please enter valid email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        unique: [true, "this phone number is already used"],
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

// create a new collection
const Student = new mongoose.model('Student',studentSchema);

module.exports = Student;