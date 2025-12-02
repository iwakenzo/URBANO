var database = require("../database/config");

function registerResult(idUsuario, idEstilo) {
  var instrucaoSql = `
    insert into resultado (fkUsuario, fkEstilo) values (${idUsuario}, ${idEstilo})
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function searchGeneralMeasurements() {
  var instrucaoSql = `
    select
        e.nome as estilo,
        count(r.idResultado) as contagem
    from resultado r
    join estilo e on r.fkEstilo = e.idEstilo
    group by e.nome
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function searchMostPopularStyle() {
  var instrucaoSql = `
    select
        e.nome as estilo,
        count(r.idResultado) as contagem
    from resultado r
    join estilo e on r.fkEstilo = e.idEstilo
    group by e.nome
    order by contagem desc
    limit 1
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  registerResult,
  searchGeneralMeasurements,
  searchMostPopularStyle,
};
