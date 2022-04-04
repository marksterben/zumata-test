"use strict";

import { Router } from "express";
import { getFactsFromAPI } from "../../services/catFactService.js";
import CatFact from "../models/CatFact.js";

const router = Router();

router.get("/init", async (req, res) => {
  const data = await getFactsFromAPI();

  if (data) {
    const list = data.map((e) => {
      return { text: e.text };
    });

    await CatFact.bulkCreate(list);

    res.status(200).send({ message: "success" });
  } else {
    res.status(400).send({ errorMessage: "There is an error" });
  }
});

export default router;
