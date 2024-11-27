const express = require("express");
const controller = require("./controller");

const router = express.Router();

router.get("/", controller.getAllBlog);
router.get("/:id", controller.getByIdBlog);
router.post("/", controller.createBlog);
router.put("/:id", controller.updateBlog);
router.delete("/:id", controller.removeBlog);

module.exports = router;
