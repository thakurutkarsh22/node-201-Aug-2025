const express = require("express");
const { createBlog, getAllBlogs, getBlogById, deleteBlogById } = require("../Controllers/BlogClontroller");
const router = express.Router();

router.get("/createBlog", createBlog);
router.get("/getAllBlogs", getAllBlogs);
router.get("/getBlogById/:id", getBlogById);
router.get("/delete/:id", deleteBlogById);


module.exports = router;