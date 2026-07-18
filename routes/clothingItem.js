const router = require("express").Router();
const {getItems, createItem, updateItem, deleteItem, likeItem, dislikeItem} = require("../controllers/clothingItem");

//GET ALL
router.get('/', getItems);

//CREATE 
router.post('/', createItem);

//UPDATE
router.put('/:itemId', updateItem);

//DELETE (remove)
router.delete('/:itemId', deleteItem);

//LIKE
router.put('/:itemId/likes', likeItem);

//UNLIKE
router.delete('/:itemId/likes', dislikeItem);

module.exports = router;