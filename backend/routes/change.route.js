let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// ChangeDB Model
let changeSchema = require('../models/ChangeDB');

// CREATE Change
router.route('/create-change').post((req, res, next) => {
  changeSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Change
router.route('/').get((req, res) => {
  changeSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Change
router.route('/edit-change/:id').get((req, res) => {
  changeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Change
router.route('/update-change/:id').put((req, res, next) => {
  changeSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Change updated successfully !')
    }
  })
})

// Delete Change
router.route('/delete-change/:id').delete((req, res, next) => {
  changeSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;