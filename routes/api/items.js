const express = require('express');
const router = express.Router();

// Message model
const Item = require('../../models/Item');

//  @route    GET api/messages
// @describe  GET All messages
// @access    Public
router.get('/', (req, res) => {
  Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
});

//  @route    POST api/items
// @describe  Create a item
// @access    Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

//  @route    DELETE api/messages/:id
// @describe  Delete a message
// @access    Public
router.delete('/:id', (req, res) => {
  console.log(req.params.id);
  Item.findById(req.params.id).then(item =>
    item.remove().then(() => res.json({ success: true }))
  )
  .catch(err => res.status(404).json({ succes: false }));
});




module.exports = router;
