db.voos.findOne({
  $and: [
    { litrosCombustivel: { $exists: 1 } },
    { litrosCombustivel: { $not: { $gt: 600 } } },
    { $nor: [
      { "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" },
    ] },
  ],
},
{ vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 });
