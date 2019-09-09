const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.get("/pairs", (req, res) => {

  mongoose.connection.collection('pairs').find().toArray((err, data) => {
    res.send(data);
  });
});

module.exports = router;