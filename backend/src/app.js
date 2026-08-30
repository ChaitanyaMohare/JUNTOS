import express from "express";
import {createServer} from "node:http";
import {Server} from "scoket.io";
import mongoose from "mongoose";
import cors from "cors";

const express = require("express");
const app = express();

app.get("/home",(req,res) =>{
    return res.json({"hello":"world"})
})

const start = async () =>{
    app.listen(8383,()=>{
        console.log("server is running on port 8383")
    });
}
start();