import express from"express";
import mongoose from "mongoose";

import {createServer} from "node:http";

import {Server} from "socket.io";

import monngoose from "mongoose";
import connectToSocket from "./src/controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./src/routes/users.routes.js"
import newUserRoutes from "./src/routes/users.routes.js"

const app=express();
const server=createServer(app);
const io=connectToSocket(server);

app.set("port",(process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit:"40kb"}));//to limit the payload
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/api/v1/users",userRoutes);
app.use("/api/v2/users",newUserRoutes);


const start =async ()=>{
    app.set("mongo_user")
      const connectionDb=await mongoose.connect("mongodb+srv://beautykumari02:Baty1610@conferacluster.jh4hvvi.mongodb.net/?retryWrites=true&w=majority&appName=ConferaCluster");

      console.log(`MONGO Connected DB Host:${connectionDb.connection.host}`)
      server.listen(app.get("port"),()=>{
        console.log("LISTENING ON PORT 8000");
      });


}


start();