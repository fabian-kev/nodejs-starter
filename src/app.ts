import express from 'express'
import "reflect-metadata";
import * as dotenv from "dotenv";
import morgan from 'morgan'
import bodyparser from 'body-parser'


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
