const router = require("express").Router();
const { getUsers, createUser, getUserById} = require("../controllers/users");

//GET ALL
router.get('/', getUsers);

//GET SPECIFIC USER
router.get('/:userId', getUserById);

//CREATE
router.post('/', createUser);



module.exports = router