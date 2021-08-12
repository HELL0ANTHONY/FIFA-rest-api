const { Router } = require("express");
const routerHelper = require("../helpers/routerHelper");
const getTeam = require("../controllers/getTeams");
const getPlayers = require("../controllers/getPlayers");

const router = Router();

router.post("/api/v1/team", routerHelper(getTeam));
router.get("/api/v1/players", routerHelper(getPlayers));

module.exports = router;
