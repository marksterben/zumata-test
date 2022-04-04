"use strict";

import { Router } from "express";
import apiRouter from "./api.js";
import catFactsRouter from "./catfacts.js";

const router = Router({
  caseSensitive: true,
});

router.use("/api", apiRouter);
router.use(catFactsRouter);

export default router;
