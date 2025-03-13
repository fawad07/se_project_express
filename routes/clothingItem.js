const router = require("express").Router();
const {clothingItems,createItem} = require("../controllers/clothingItem");

//GET ALL
router.get('/', clothingItems);

//CREATE 
router.post('/', createItem);

//READ

//UPDATE

//DELETE (remove)
router.delete('/', () => console.log("DELETE clothing item"));


export default router