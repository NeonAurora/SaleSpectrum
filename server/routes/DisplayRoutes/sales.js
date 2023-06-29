import express from "express";
import { getSales } from "../../controllers/PanelControllers/sales.js";
import { getTempStat as getStats } from "../../controllers/PanelControllers/sales.js";

const router = express.Router();

router.get("/sales", getSales);
router.get("/getStats", getStats);

export default router;
