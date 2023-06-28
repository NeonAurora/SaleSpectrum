import express from "express";
import { addTempStat } from "../../controllers/DatabaseControllers/addQuery.js";
import { searchTempStat } from "../../controllers/DatabaseControllers/getQuery.js";
import { deleteTempStat } from "../../controllers/DatabaseControllers/removeQuery.js";
import { updateTempStat } from "../../controllers/DatabaseControllers/setQuery.js";

const router = express.Router();

// Router definitions
router.post("/add", addTempStat);
router.get("/search/:id", searchTempStat);
router.delete("/delete/:_id", deleteTempStat);
router.put("/update/:id", updateTempStat);

export default router;
