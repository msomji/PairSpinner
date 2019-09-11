const express = require('express');
const router = express.Router();
const Pair = require('./models/pairs');

findPairId = async (req, res, next) => {
  try {
    let pair = await Pair.findById(req.params.id);
    if (pair !== null) {
      res.pair = pair
      next();
    } else {
      res.status(404).send('Reource not found');
    }

  } catch (e) {
    res.status(500).send(e.message);
  }
}

router
  .get("/pairs", async (req, res) => {
    try {
      let allPairs = await Pair.find();
      res.status(200).send(allPairs);
    } catch (e) {
      res.status(500).send(e.message);
    }
  })

  .get("/pairs/:id", findPairId, async (req, res) => {
    res.status(200).send(res.pair);
  })

  .delete("/pairs/:id", findPairId, async (req, res) => {
    try {
      await res.pair.delete()
      res.send(res.pair);
    } catch (e) {
      res.send(e.message);
    }

  })

  .put('/pairs/:id', findPairId, async (req, res) => {
    try {
      res.pair.teamName = req.body.teamName
      res.pair.pairs = req.body.pairs
      res.pair.spinDate = req.body.spinDate

      let updatedTeam = await res.pair.save()
      res.status(201).send(updatedTeam)
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  .post('/pairs', async (req, res) => {
    try {
      let newTeam = await new Pair(req.body).save()
      res.status(201).send(newTeam)
    } catch (e) {
      res.status(400).send(e.message);
    }
  });


module.exports = router;