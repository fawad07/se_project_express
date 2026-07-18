const router = require("express").Router();
const userRoute = require("./users");
const clothingItemRoute = require("./clothingItem");

router.use('/users', userRoute);
router.use("/items", clothingItemRoute);

router.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

module.exports = router;