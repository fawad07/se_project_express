const router = require("express").Router();
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItem");

// GET ALL
router.get("/", getItems);

// CREATE
router.post("/", createItem);

// DELETE (remove)
router.delete("/:itemId", deleteItem);

// LIKE
router.put("/:itemId/likes", likeItem);

// UNLIKE
router.delete("/:itemId/likes", dislikeItem);

module.exports = router;