import express from "express";
import { AddIncome, DeleteIncome, GetIncomes } from "../controllers/income";
import { AddExpense, DeleteExpenses, GetExpenses } from "../controllers/expense";

const router = express.Router();

router.post("/income", AddIncome);
router.get("/income", GetIncomes);
router.delete("/income/:id", DeleteIncome);
router.post("/expense", AddExpense);
router.get("/expense", GetExpenses);
router.delete("/expense/:id", DeleteExpenses);

module.exports = router;