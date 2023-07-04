const { userController } = require("../controllers");

const express = require("express");
const router = express.Router();

router.get("/getUsers", userController.getUsers);
router.delete("/deleteUser/:id", userController.deleteUserById);
router.post("/insertUser", userController.insertUser);
router.post("/updateUser/:id", userController.updateUser);

module.exports = router;
