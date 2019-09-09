const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.get("/teams", (req, res) => {

  mongoose.connection.collection('teams').find().toArray((err, data) => {
    res.send(data);
  });
});

module.exports = router;