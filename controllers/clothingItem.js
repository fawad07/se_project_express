const clothingItems = require("../models/user");


//GET ALL ITEMS

const getItems = (req, res) => {
    console.log("IN clothing items CONTROLLER");   //debugging 
    clothingItems.find( {} )
    .then( (clothingItems) => {
        res.status(200).send(clothingItems);
    })
    .catch( (err) => {
        console.error(err);
        return res.status(500).send({ message: err.message });
    });
}//end get all items

//CREATE ITEM

const createItem = (req, res) => {
    console.log(req);  //debugging
    console.log(req.body);  //debugging
    console.log("IN clothing item CONTROLLER");   //debugging 
    
    const {name, weather, imageUrl} = req.body;

    clothingItems.create( {name, weather, imageUrl} )
    .then( (item) => {
        console.log(item);
        res.status(201).send( {data: item} );
    })
    .catch( (err) => {
        console.error(err);     //debugging
        console.log(err);       //debugging
        res.status(500).send({ message: err.message });
    });
}//end create Item

//UPDATE

const updateItem = (req, res) => {
    console.log(req);  //debugging
    console.log(req.body);  //debugging
    console.log("IN update item CONTROLLER");   //debugging 

    const {clothingItemId} = req.params;
    const{imageUrl} = req.body;

    clothingItems.findByIdAndUpdate(clothingItemId, {$set: {imageUrl} }).orFail()
    .then( (clothingItem) => {
        console.log(clothingItem);
        res.status(201).send( {data: clothingItem} );
    })
    .catch( (err) => {
        console.error(err);     //debugging
        console.log(err);       //debugging
        res.status(500).send({ message: err.message });
    });
}//end update item

//DELETE
const deleteItem = (req, res) => {
    console.log(req);  //debugging
    console.log(req.body);  //debugging
    console.log("IN delete item CONTROLLER");   //debugging 

    const {clothingItemId} = req.params;
    clothingItems.findByIdAndDelete(clothingItemId).orFail()
    .then( (clothingItem) => {
        console.log(clothingItem);  //debugging
        res.status(204).send( {} );
    })
    .catch( (err) => {
        console.error(err);     //debugging
        console.log(err);       //debugging
        res.status(500).send({ message: err.message });
    });
}

module.exports = {getItems,createItem, updateItem, deleteItem};


/*
1. Download POSTMAN
2. fork the following:
https://www.postman.com/tripleten-tests-team/tripleten-se-projects-tests/collection/hn20atu/sprint-12-tests?action=share&creator=23570023
3. run app
*/