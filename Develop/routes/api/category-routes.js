const router = require('express').Router();
const { Category, Product } = require('../../models');
const { update } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  }).then((categories) => {
    res.json(categories); 
  }).catch((err) => res.json(err)); 
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    include: [Product],
    where: {
      id: req.params.id
    }
  }).then((categoryById) => {
    res.json(categoryById);
  }).catch((err) => res.json(err)); 
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((newCategory) => {
    res.json(newCategory); 
  }).catch((err) => res.json(err)); 
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
    category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((updateCategory) => {
    res.json(updateCategory)
  }).catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((deleteCategory) => {
    res.json(deleteCategory); 
  }).catch((err) => res.json(err)); 
});

module.exports = router;
