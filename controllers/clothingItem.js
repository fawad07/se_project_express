const clothingItems = require("../models/clothingItem");
const { BAD_REQUEST_ERROR_CODE, NOT_FOUND_ERROR_CODE, DEFAULT_ERROR_CODE } = require("../utils/errors");

//GET ALL ITEMS
const getItems = (req, res) => {
    clothingItems.find( {} )
    .then( (items) => {
        res.status(200).send(items);
    })
    .catch( (err) => {
        console.error(err);
        return res.status(DEFAULT_ERROR_CODE).send({ message: "An error has occurred on the server." });
    });
}//end get all items

//CREATE ITEM
const createItem = (req, res) => {
    const {name, weather, imageUrl} = req.body;
    const owner = req.user._id;

    clothingItems.create( {name, weather, imageUrl, owner} )
    .then( (item) => {
        res.status(201).send( {data: item} );
    })
    .catch( (err) => {
        console.error(err);
        if(err.name === "ValidationError"){
            return res.status(BAD_REQUEST_ERROR_CODE).send({ message: err.message });
        }
        return res.status(DEFAULT_ERROR_CODE).send({ message: "An error has occurred on the server." });
    });
}//end create Item

//UPDATE
const updateItem = (req, res) => {
    const {itemId} = req.params;
    const {imageUrl} = req.body;

    clothingItems.findByIdAndUpdate(itemId, {$set: {imageUrl} })
    .orFail(() => {
        const error = new Error("Item not found");
        error.statusCode = NOT_FOUND_ERROR_CODE;
        throw error;
    })
    .then( (clothingItem) => {
        res.status(200).send( {data: clothingItem} );
    })
    .catch( (err) => {
        console.error(err);
        if(err.statusCode === NOT_FOUND_ERROR_CODE){
            return res.status(NOT_FOUND_ERROR_CODE).send({ message: err.message });
        }
        else if(err.name === "CastError" || err.name === "ValidationError"){
            return res.status(BAD_REQUEST_ERROR_CODE).send({ message: "Invalid data" });
        }
        return res.status(DEFAULT_ERROR_CODE).send({ message: "An error has occurred on the server." });
    });
}//end update item

//DELETE
const deleteItem = (req, res) => {
    const {itemId} = req.params;

    clothingItems.findByIdAndDelete(itemId)
    .orFail(() => {
        const error = new Error("Item not found");
        error.statusCode = NOT_FOUND_ERROR_CODE;
        throw error;
    })
    .then( (item) => {
        res.status(200).send( {data: item} );
    })
    .catch( (err) => {
        console.error(err);
        if(err.statusCode === NOT_FOUND_ERROR_CODE){
            return res.status(NOT_FOUND_ERROR_CODE).send({ message: err.message });
        }
        else if(err.name === "CastError"){
            return res.status(BAD_REQUEST_ERROR_CODE).send({ message: "Invalid item ID" });
        }
        return res.status(DEFAULT_ERROR_CODE).send({ message: "An error has occurred on the server." });
    });
}//end delete item

//LIKE ITEM
const likeItem = (req, res) => {
    clothingItems.findByIdAndUpdate(
        req.params.itemId,
        { $addToSet: { likes: req.user._id } },
        { new: true },
    )
    .orFail(() => {
        const error = new Error("Item not found");
        error.statusCode = NOT_FOUND_ERROR_CODE;
        throw error;
    })
    .then( (item) => {
        res.status(200).send( {data: item} );
    })
    .catch( (err) => {
        console.error(err);
        if(err.statusCode === NOT_FOUND_ERROR_CODE){
            return res.status(NOT_FOUND_ERROR_CODE).send({ message: err.message });
        }
        else if(err.name === "CastError"){
            return res.status(BAD_REQUEST_ERROR_CODE).send({ message: "Invalid item ID" });
        }
        return res.status(DEFAULT_ERROR_CODE).send({ message: "An error has occurred on the server." });
    });
}//end like item

//DISLIKE ITEM (UNLIKE)
const dislikeItem = (req, res) => {
    clothingItems.findByIdAndUpdate(
        req.params.itemId,
        { $pull: { likes: req.user._id } },
        { new: true },
    )
    .orFail(() => {
        const error = new Error("Item not found");
        error.statusCode = NOT_FOUND_ERROR_CODE;
        throw error;
    })
    .then( (item) => {
        res.status(200).send( {data: item} );
    })
    .catch( (err) => {
        console.error(err);
        if(err.statusCode === NOT_FOUND_ERROR_CODE){
            return res.status(NOT_FOUND_ERROR_CODE).send({ message: err.message });
        }
        else if(err.name === "CastError"){
            return res.status(BAD_REQUEST_ERROR_CODE).send({ message: "Invalid item ID" });
        }
        return res.status(DEFAULT_ERROR_CODE).send({ message: "An error has occurred on the server." });
    });
}//end dislike item


module.exports = {getItems, createItem, updateItem, deleteItem, likeItem, dislikeItem};