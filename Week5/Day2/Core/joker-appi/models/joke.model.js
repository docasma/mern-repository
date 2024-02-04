// import the mongoose lib to build the schema
const mongoose = require("mongoose");

// the model /the rules of the entries need to follow in our shema
// create a JokeSchema:
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [10, "{PATH} must have at least 10 chars"]
    },
    punchline:{
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must have at least 3 chars"]
        
    }
},{timestamps:true})


// export the mongoose.model("joke", JokeSchema):
const Joke = mongoose.model("Joke",JokeSchema)
module.exports = Joke