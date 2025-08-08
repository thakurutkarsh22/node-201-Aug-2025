const { default: mongoose } = require("mongoose");
const BlogsModel = require("../Models/BlogsModel");
class BlogService {

    static async createBlog(title, content, author) {
        // create an model object.
        const blogObject = BlogsModel({
            title,
            content,
            author,
            tags: ["cricket"] // own logic
        });

         // save this object in DB 

        try {
            const response = await blogObject.save();
            return response;
        } catch(error) {
            return error;
        }


    }

    static async getBlogById(id) {

    }

    static async getAllBlogs(id) {
        
    }
}

module.exports = BlogService;