const categoryService = require('../services/categoryService');

/**
 * CREATE Category
 */
const createCategory = async (req, res) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json({
      success: true,
      data: category
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * READ All Categories
 */
const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * READ Single Category by ID
 */
const getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    res.status(200).json({
      success: true,
      data: category
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * UPDATE Category
 */
const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await categoryService.updateCategory(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      data: updatedCategory
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * DELETE Category
 */
const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await categoryService.deleteCategory(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Category deleted successfully',
      data: deletedCategory
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};
