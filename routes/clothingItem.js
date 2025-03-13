const router = require("express").Router();
const {clothingItems,createItem, updateItem, deleteItem} = require("../controllers/clothingItem");

//GET ALL
router.get('/', clothingItems);

//CREATE 
router.post('/', createItem);

//READ

//UPDATE
router.put('/:itemId', updateItem);

//DELETE (remove)
router.delete('/:itemId', deleteItem);


export default router