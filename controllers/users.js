const user = require("../models/user");

//GET /users

const getUsers = (req, res) => {
    console.log("IN CONTROLLER");   //debugging 
    user.find( {} )
    .then( (users) => {
        res.status(200).send(users);
    })
    .catch( (err) => {
        console.error(err);
        return res.status(500).send({ message: err.message });
    });
};

// CREATE USER
const createUser = (req, res) => {
    const {name, avatar} = req.body;
    console.log(name, avatar); //debugging statement

    user.create( {name, avatar} )
    .then( (user) => res.status(201).send(user))
    .catch( (err) => {
        console.error(err);   //debugging
        if(err.name === "ValidationError"){
            return res.status(400).send({message: err.message});
        }//end if 
        return res.status(500).send({message: err.message});
    });
}

//GET USER BY ID
const getUserById = (req, res) => {
    const {userId} = req.params;
    user.findById(userId)
    .onFail()
    .then( (user) => {
        res.status(200).send(user);
    })
    .catch( (err) =>{
        console.error(err);   //debugging
        if(err.name === "DocumentNotFoundError"){
            return res.status(404).send({message: err.message});
        }//end if 
        else if(err.name === "CastError"){
            return res.status(400).send({message: err.message});
        }//end else
        return res.status(500).send({message: err.message});
    });
}


module.exports = { getUsers, createUser, getUserById };