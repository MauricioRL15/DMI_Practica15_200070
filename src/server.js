import express from "express";
import playerRoutes from "./routes/playerRoutes.js"

const api = new express();
const port = 20007
api.use("/players", playerRoutes)
api.listen(port, () =>{
    console.log(`Server is running in port: ${port}`)
})