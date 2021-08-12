const { Router } = require("express");
const routerHelper = require("../helpers/routerHelper");
const getPlayers = require("../controllers/getPlayers");
const router = Router();

router.post("/api/v1/team", routerHelper(getPlayers));

module.exports = router;
