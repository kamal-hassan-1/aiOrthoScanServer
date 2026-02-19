import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
dotenv.config()

const PORT=process.env.PORT||5000;
console.log(PORT);

const app=express();

app.listen(PORT||5000,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

app.use(morgan('dev'));
app.use(express.json());