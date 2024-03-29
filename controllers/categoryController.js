const { Category } = require("../models/models");

class CategoryController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Category.create({ name });
    return res.json(type);
  }
  async getAll(req, res) {
    const categories = await Category.findAll();
    return res.json(categories);
  }
}

module.exports = new CategoryController();
