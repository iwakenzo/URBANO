var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/register", function (req, res) {
  quizController.registerResult(req, res);
});

router.get("/general-chart", function (req, res) {
  quizController.searchGeneralMeasurements(req, res);
});

router.get("/most-popular", function (req, res) {
  quizController.searchMostPopularStyle(req, res);
});

router.get("/user-style/:idUsuario", function (req, res) {
  quizController.searchUserStyle(req, res);
})

module.exports = router;
