"use strict";

import { Router } from "express";
import {
  addCatFact,
  getCatFacts,
  removeCatFact,
  updateCatFact,
} from "../controllers/catFactController.js";

const router = Router({
  caseSensitive: true,
});

router.get("/cat-facts", getCatFacts);

router.post("/cat-fact", addCatFact);

router.put("/cat-fact/:id", updateCatFact);

router.delete("/cat-fact/:id", removeCatFact);

export default router;
