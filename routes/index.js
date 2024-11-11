const router = require("express").Router();
const userRoute = require ("./users");
const clothingItemRoute =  require ("./clothingItem");

//router.get('/index', () => console.log("INDEX"));
router.use('/user', userRoute);
router.use("/clothingItem", clothingItemRoute);


export default router;