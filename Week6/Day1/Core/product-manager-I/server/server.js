const express = require("express")
const app=express()
// const cors = require('cors') 
app.use(express.json(), express.urlencoded({ extended: true }))
// app.use(cors())  
require("dotenv").config()
require("./config/mongoose.config")
const port = process.env.PORT

require("./routes/product.routes")(app)




app.listen(port, () => console.log(` Listening on port: ${port}`));

