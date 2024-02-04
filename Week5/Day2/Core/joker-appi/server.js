const express = require("express")
const app = express()


//---MIDDLEWARE ---
app.use(express.json(), express.urlencoded({ extended: true }))
   // call dotenv and invoke it with .config to use it it in the connection with the port
require("dotenv").config()
   // a 'path' require needed to connect DB with the server
require("./config/mongoose.config")
   // const port define the path of the variable PORT
const port =process.env.PORT
  // add the get route to the server
  require("./routes/joke.route")(app)


app.listen(port,()=>{console.log(`joke is on PORT:${port}`)})