const Blog = require("./model");

module.exports = {
  async create(data) {
    return Blog.create(data);
  },
  async getAll({ term }) {
    let query = {};

    if (term) {
      query = {
        $or: [
          { title: { $regex: term, $options: "i" } },
          { content: { $regex: term, $options: "i" } },
          { category: { $regex: term, $options: "i" } },
        ],
      };
    }

    return Blog.find(query);
  },
  async getById(id) {
    return Blog.findById(id);
  },

  async update(id, data) {
    return Blog.findByIdAndUpdate(id, data, { new: true });
  },

  async delete(id) {
    return Blog.findByIdAndDelete(id);
  },
};
