import express from "express"
import { createExpense, deleteExpense, getExpense, updateExpense } from "../controllers/expense.controller.js"
import { isAuthenticated } from "../middlewares/isAuthenticated.js"

const router = express.Router()

router.route('/create').post(isAuthenticated,  createExpense)
router.route('/').get(isAuthenticated, getExpense)
router.route('/:expenseId').put(isAuthenticated, updateExpense)
router.route('/:expenseId').delete(isAuthenticated, deleteExpense)

export default router