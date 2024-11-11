const router = require("express").Router();

router.get('/', () => console.log("GET all users"));
router.get('/:userId', () => console.log("GET user by ID"));
router.post('/', () => console.log("POST: create new user"));



module.exports = router