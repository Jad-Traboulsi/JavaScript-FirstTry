const bodyParser = require("body-parser")
const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const session = require("express-session")
const cors = require('cors')

require('./utils/data')

const messagesRoute = require('./routes/messages')
const authRoute = require("./routes/auth")

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use(bodyParser.json({
    extended:true
}))

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    path:'/',
    httpOnly:true,
    secure:true,
    maxAge:null,
    secret:"Heyy"
}))

app.use("/api/messages",messagesRoute)
app.use("/api/users", authRoute)


app.get("/",(req,res)=>{
    // res.status(200).send("<h1>Hi</h1>")
    res.status(200).json({name: "Jad"})
})

app.listen(5000,() => {
    console.log("Server running on http://localhost:5000");
})