db.voos.countDocuments({
  $or: [{
    "aeroportoDestino.pais": "BRASIL" }, { "aeroportoDestino.pais": "ARGENTINA" }, { "aeroportoDestino.pais": "CHILE",
  }],
});
