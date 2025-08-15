const BlogsModel = require("../Models/BlogsModel");
const BlogService = require("../Service/BlogService");

async function createBlog(req, res) {
    const body = req.body;
    const {title, content, author} = body;

    try {
        console.log("controller : before service")
        const response = await BlogService.createBlog(title, content, author);
        console.log("controller : after service", response)

        res.status(201).json(response);
    } catch(error) {
        res.status(500).json(error);
    }

}

function deleteBlogById(req, res) {

}

async function getBlogById(req, res) {

    const params = req.params;
    const id = params.id;

    try {
        const response = await BlogsModel.findById(id);
        res.status(200).json(response)
    } catch(error) {
        res.status(500).json(error);
    }
}

async function getAllBlogs(req, res) {
    try {
        const response = await BlogsModel.find({});
        res.status(200).json(response)
    } catch(error) {
        res.status(500).json(error);
    }
}


module.exports = {createBlog, getAllBlogs, getBlogById, deleteBlogById};