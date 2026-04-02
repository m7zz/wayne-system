const model = require("../models/recursos.model");

exports.getRecursos = async (req, res) => {
  const dados = await model.getAll();
  res.json(dados);
};

exports.addRecurso = async (req, res) => {
  const { nome, tipo } = req.body;

  await model.add({ nome, tipo });

  res.json({ message: "Adicionado" });
};

exports.deleteRecurso = async (req, res) => {
  const id = req.params.id;

  await model.remove(id);

  res.json({ message: "Removido" });
};

exports.updateRecurso = async (req, res) => {
  try {
    const id = req.params.id;
    const { nome, tipo } = req.body;

    console.log("UPDATE:", id, nome, tipo);

    await model.update(id, { nome, tipo });

    res.json({ message: "Atualizado" });

  } catch (error) {
    console.log("ERRO NO UPDATE:", error);
    res.status(500).json({ error: "Erro no servidor" });
  }
};