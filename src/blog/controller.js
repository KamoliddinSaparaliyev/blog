const services = require("./service");

const getAllBlog = async (req, res) => {
  try {
    const data = await services.getAll(req.query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getByIdBlog = async (req, res) => {
  try {
    const data = await services.getById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const data = await services.create(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const data = await services.update(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeBlog = async (req, res) => {
  try {
    const data = await services.delete(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBlog,
  getByIdBlog,
  createBlog,
  updateBlog,
  removeBlog,
};
