const router = require("express").Router();
const userRoute = require ("./users");
const clothingItemRoute =  require ("./clothingItem");

//router.get('/index', () => console.log("INDEX"));
router.use('/users', userRoute);
router.use("/clothingItem", clothingItemRoute);

module.exports = router;
//export default router;