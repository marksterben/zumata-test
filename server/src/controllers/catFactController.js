import CatFact from "../models/CatFact.js";

export const getCatFacts = async (req, res) => {
  const catFacts = await CatFact.findAll({ order: [["id", "ASC"]] });
  res.status(200).send({
    data: catFacts,
  });
};

export const addCatFact = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    res.status(400).json({
      errorMessage: "text is required",
    });

    return;
  }

  const newFact = await CatFact.create({ text: text });

  res.status(201).json({
    message: "Fact successfully added!",
    created: newFact,
  });
};

export const updateCatFact = async (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  if (!body.text) {
    res.status(400).json({
      errorMessage: "text is required",
    });

    return;
  }

  const catFact = await CatFact.findByPk(id);

  // check if fact is exist
  if (!catFact) {
    res.status(400).json({
      errorMessage: "Edit fact failed. Not implemented",
    });

    return;
  }

  catFact.text = body.text;
  await catFact.save();

  res.status(200).json({
    message: "Fact successfully edited",
  });
};

export const removeCatFact = async (req, res) => {
  const id = req.params.id;

  const catFact = await CatFact.findByPk(id);

  // check if fact is exist
  if (!catFact) {
    res.status(400).json({
      errorMessage: "Remove fact failed. Not implemented",
    });

    return;
  }

  await catFact.destroy();

  res.status(200).json({
    message: "fact successfully removed",
  });
};
