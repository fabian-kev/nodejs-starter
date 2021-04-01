import express from 'express'
import dotenv from "dotenv";
import morgan from 'morgan'
import bodyparser from 'body-parser'
import passport from 'passport'
import cookieSession from 'cookie-session'
dotenv.config({ path: 'config.env' });


dotenv.config({ path: 'config.env' });
import './config/database';


const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('tiny'))
app.use(bodyparser.urlencoded({extended:true}))

// app.use('/api/v1/', userRouter)
app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen(port, () => {
    console.log(`server is listening on ${port}!`);
})
