const user = require("../models/user");
const { BAD_REQUEST_ERROR_CODE, NOT_FOUND_ERROR_CODE, DEFAULT_ERROR_CODE } = require("../utils/errors");

//GET /users

const getUsers = (req, res) => {
    console.log("IN CONTROLLER");   //debugging 
    user.find( {} )
    .then( (users) => {
        res.status(200).send(users);
    })
    .catch( (err) => {
        console.error(err);
        return res.status(DEFAULT_ERROR_CODE).send({ message: "An error has occurred on the server." });
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
            return res.status(BAD_REQUEST_ERROR_CODE).send({message: err.message});
        }//end if 
        return res.status(DEFAULT_ERROR_CODE).send({message: "An error has occurred on the server."});
    });
}

//GET USER BY ID
const getUserById = (req, res) => {
    const {userId} = req.params;
    user.findById(userId)
    .orFail(() => {
        const error = new Error("User not found");
        error.statusCode = NOT_FOUND_ERROR_CODE;
        throw error;
    })
    .then( (user) => {
        res.status(200).send(user);
    })
    .catch( (err) => {
        console.error(err);
        if(err.statusCode === NOT_FOUND_ERROR_CODE){
            return res.status(NOT_FOUND_ERROR_CODE).send({ message: err.message });
        }
        else if(err.name === "CastError"){
            return res.status(BAD_REQUEST_ERROR_CODE).send({ message: "Invalid user ID" });
        }
        return res.status(DEFAULT_ERROR_CODE).send({ message: "An error has occurred on the server." });
    });
}

module.exports = { getUsers, createUser, getUserById };