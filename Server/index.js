const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./model/user");

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/CRUDmern");


app.get('/',(req,res)=> {
    userModel.find({})
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})

app.get('/getUser/:id',(req,res)=> {
    const id = req.params.id
    userModel.findById({id})
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})

app.post("/createUser", (req, res) => {
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => console.log("server is runningggg"));
