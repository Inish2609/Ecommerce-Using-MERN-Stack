const express = require("express")
const app = express();

const cors = require("cors")

const mongoose = require("mongoose")

const dotenv = require("dotenv")

const UserRoute = require("./Routers/user")
const authRoute = require("./Routers/auth")
const productRoute = require("./Routers/product")
const cartRoute = require("./Routers/cart")
const orderRoute = require("./Routers/order")
const paymentRoute = require("./Routers/stripe")

dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DBconnection Succesfull")
}).catch((err)=>{
    console.log(err)
})


// app.get("/api",()=>{
//     console.log("Hello");
// })

app.use(cors())
app.use(express.json())

//Registeration Login
app.use("/auth", authRoute);

//Users Actions
app.use("/users",UserRoute)

//Product Action
app.use("/products",productRoute)

//Cart Action
app.use("/carts",cartRoute)

//Order Action
app.use("/orders",orderRoute)

//Payment Action
app.use("/checkout",paymentRoute);

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server Running on port : 5000")
})