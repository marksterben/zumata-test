import CatFact from "../models/CatFact.js";

export const getCatFacts = async (req, res) => {
  const catFacts = await CatFact.findAll();
  res.status(200).send({
    data: catFacts,
  });
};

export const addCatFact = async (req, res) => {
  res.send("aaa");
};
