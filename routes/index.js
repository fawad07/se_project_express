const router = require("express").Router();
const userRoute = require("./users");
const clothingItemRoute = require("./clothingItem");
const { NOT_FOUND_ERROR_CODE } = require("../utils/errors");

router.use("/users", userRoute);
router.use("/items", clothingItemRoute);

router.use((req, res) => {
  res.status(NOT_FOUND_ERROR_CODE).send({ message: "Requested resource not found" });
});

module.exports = router;