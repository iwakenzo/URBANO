var quizModel = require("../models/quizModel");
const { cadastrar } = require("./usuarioController");

function registerResult(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var idEstilo = req.body.idEstiloServer;

  if (idUsuario == undefined) {
    req.status(400).send("Seu idUsuario está undefined!");
  } else if (idEstilo == undefined) {
    req.status(400).send("Seu idEstilo está undefined!");
  } else {
    quizModel
      .registerResult(idUsuario, idEstilo)
      .then(function (result) {
        res.json(result);
      })
      .catch(function (error) {
        console.log(error);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          error.sqlMessage
        );
        res.status(500).json(error.sqlMessage);
      });
  }
}

function searchGeneralMeasurements(req, res) {
  quizModel
    .searchGeneralMeasurements()
    .then(function (result) {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (error) {
      console.log(error);
      console.log("Houve um erro ao buscar as medidas.", error.sqlMessage);
      res.status(500).json(error.sqlMessage);
    });
}

function searchMostPopularStyle(req, res) {
  quizModel
    .searchMostPopularStyle()
    .then(function (result) {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (error) {
      console.log(error);
      console.log("Houve um erro ao buscar a KPI.", error.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  registerResult,
  searchGeneralMeasurements,
  searchMostPopularStyle,
};
