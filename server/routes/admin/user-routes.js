const express = require("express");
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/admin/user-controller");

const router = express.Router();

router.get("/get", getAllUsers);
router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
