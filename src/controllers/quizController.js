var quizModel = require("../models/quizModel");

function registerResult(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var idEstilo = req.body.idEstiloServer;

  console.log("Dados recebidos:");
  console.log("idUsuario:", idUsuario);
  console.log("idEstilo:", idEstilo);
  console.log("req.body completo:", req.body);

  if (idUsuario == undefined) {
    res.status(400).send("Seu idUsuario está undefined!");
  } else if (idEstilo == undefined) {
    res.status(400).send("Seu idEstilo está undefined!");
  } else {
    quizModel
      .registerResult(idUsuario, idEstilo)
      .then(function (result) {
        res.status(200).json({
          mensagem: "Resultado registrado com sucesso!",
          idResultado: result.insertId
        });
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
      res.status(500).json(error.sqlMessage);
    });
}

function searchUserStyle (req, res) {
  var idUsuario = req.paramss.idUsuario;

  if (idUsuario == undefined) {
    res.status(400).send("ID do usuário não fornecido!");
    return;
  }

  quizModel
    .searchUserStyle(idUsuario)
    .then(function (result) {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(204).send("Usuário ainda não fez o quiz!");
      }
    })
    .catch(function (error) {
      console.log(error);
      console.log("Houve um erro ao buscar o estilo do usuário.", error.sqlMessage);
      res.status(500).json(error.sqlMessage);
    })
}

module.exports = {
  registerResult,
  searchGeneralMeasurements,
  searchMostPopularStyle,
  searchUserStyle
};
