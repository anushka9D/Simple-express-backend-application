const express =require("express");
const router  = express.Router();
const {createUser,readUsers,readUser,deleteUser,updateUser} = require("../controller/userController");


router.post("/users",createUser);
router.get("/users",readUsers);
router.get("/user/:id",readUser);
router.delete("/user/:id",deleteUser);
router.put("/user/:id",updateUser)
module.exports = router;