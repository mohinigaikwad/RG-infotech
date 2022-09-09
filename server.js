const express = require("express");
const cors = require('cors');
const db = require("./config/db")
const env = require("dotenv")
env.config({path:"./config/.env"})
const userRoute = require("./routes/userRoutes")
const app = express();

app.use(express.json())
app.use(cors());
db()
app.use("/api",userRoute)

app.listen(process.env.PORT || 5005, e =>console.log(`server is runing on port:http://localhost:${process.env.PORT || 5005}`.bgMagenta));

