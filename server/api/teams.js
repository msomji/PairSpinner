const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
var Team = require('./models/team');

findTeamId = async (req, res, next) => {
  try {
    let team = await Team.findById(req.params.id);
    if (team) {
      res.team = team
      next();
    } else {
      res.status(404).send('Reource not found');
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
}

router
  .get("/teams", async (req, res) => {
    try {
      let allTeams = await Team.find();
      res.status(200).send(allTeams);
    } catch (e) {
      res.status(500).send(e.message);
    }
  })

  .get("/teams/:id", findTeamId, async (req, res) => {
    res.status(200).send(res.team);
  })

  .delete("/teams/:id", findTeamId, async (req, res) => {
    try {
      await res.team.delete()
      res.send(res.team);
    } catch (e) {
      res.send(e.message);
    }

  })

  .put('/teams/:id', findTeamId, async (req, res) => {
    try {
      res.team.teamName = req.body.teamName
      let updatedTeam = await res.team.save()
      res.status(201).send(updatedTeam)
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  .post('/teams', async (req, res) => {
    try {
      let newTeam = await new Team(req.body).save()
      res.status(201).send(newTeam)
    } catch (e) {
      res.status(400).send(e.message);
    }
  });


module.exports = router;