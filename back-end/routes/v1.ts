import express from "express";
import { AddIncome, DeleteIncome, GetIncomes } from "../controllers/income";

const router = express.Router();

router.post("/income", AddIncome);
router.get("/income", GetIncomes);
router.delete("/income/:id", DeleteIncome);

module.exports = router;