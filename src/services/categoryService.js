const Category = require('../models/categoryModel');

/**
 * CREATE Category
 */
const createCategory = async (data) => {
    const existingCategory = await Category.findOne({ slug: data.slug });

    if (existingCategory) {
        throw new Error('Category with this slug already exists');
    }

    const category = await Category.create(data);
    return category;
};

/**
 * READ All Categories
 */
const getAllCategories = async () => {
    const categories = await Category.find({});
    return categories;
};

/**
 * READ Single Category by ID
 */
const getCategoryById = async (id) => {
    const category = await Category.findById(id);

    if (!category) {
        throw new Error('Category not found');
    }

    return category;
};

/**
 * UPDATE Category
 */
const updateCategory = async (id, data) => {
    const updatedCategory = await Category.findByIdAndUpdate(
        id,
        data,
        { new: true, runValidators: true }
    );

    if (!updatedCategory) {
        throw new Error('Category not found');
    }

    return updatedCategory;
};

/**
 * DELETE Category
 */
const deleteCategory = async (id) => {
    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
        throw new Error('Category not found');
    }

    return deletedCategory;
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};
