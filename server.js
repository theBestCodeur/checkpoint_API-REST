import mongoose from "mongoose";
import Database from "./db/Database.js";
import User from "./db/models/User.js";
import express from "express";
import { routes } from "./routes/routes.js";
import  bodyParser  from "body-parser";
import dovenv from 'dotenv' 


const app = express();
const router = express.Router();
const port = 4000;
const database = new Database();


// let user = new User({
//     name : 'doumbia fode',
//     age : 23
// }).save().then((user) => {
//     console.log('person saved successful')
// })

app.use(routes);
app.use(bodyParser.json())


// app.get('/Users', function (req, res) {
//   User.find ().then((user)=> {
//     res.json(user)})
//   })

//   app.post('/users', function (req, res) {
//     new User(req.body).save().then((user) => {
//           res.send("person saved successful")
//       })
//   });

// app.put('/user/:id', function (req, res) {
//     User.findByIdAndUpdate(req.params.id,{name:"Karim"}).then((user)=>{
//       res.send(user);
//     })
//   });

// app.delete('/user/:id', function (req, res) {
//   User.findByIdAndDelete(req.params.id).then((user)=>{
//     res.send(user);
//   })
//   });

  app.listen(port, () =>{
    console.log(`Server running at ${port}`)
})




