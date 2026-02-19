import express from "express"
import morgan from "morgan"

const app=express();
app.listen(PORT||5000,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

