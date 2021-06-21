const express = require("express");
const router = express.Router();

const userController = require("../controller/User.controller");

router.get("/list", userController.list);

router.post("/insert", userController.create);

// router.get("/getById/:id", userController.getById);

// router.delete("/remove/:id", userControllerSecond.remove);

// router.put("/update/:id", userControllerSecond.update);

module.exports = router;
