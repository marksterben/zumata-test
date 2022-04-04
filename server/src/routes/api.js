"use strict";

import { Router } from "express";
import { addCatFact, getCatFacts } from "../controllers/catFactController.js";

const router = Router({
  caseSensitive: true,
});

router.get("/cat-facts", getCatFacts);

router.post("/cat-fact", addCatFact);

// router.put("/api/item/:id", jsonParser, updateItem);

// router.delete("/api/item/:id", removeItem);

// router.delete("/api/items", removeAllItem);

export default router;
