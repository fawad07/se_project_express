const router = require("express").Router();

router.get('/', () => console.log("GET all clothing items"));
router.post('/', () => console.log("POST: create new clothing item"));
router.delete('/', () => console.log("DELETE clothing item"));


export default router