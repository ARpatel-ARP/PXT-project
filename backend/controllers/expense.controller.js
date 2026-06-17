import Expense from "../models/expense.model.js"

export const createExpense = async (req, res) => {
    try {
        const {title, amount, category, description, expenseDate} = req.body;
        if (!title || !amount || !expenseDate) {
            return res.status(400).json({
                success:false,
                message:"Fields are missing"
            })
        }
        const expense = await Expense.create({
            title,
            amount,
            category,
            description,
            expenseDate,
            owner:req.id,
        })
        return res.status(200).json({
            success:true,
            message:"Expense created successfully"
        })
    } catch (error) {
        return res.status(400).json({
            success:true,
            message:"Failed to create expense"
        })
        
    }
}

export const getExpense = async (req, res) => {
    try {
        const userId = req.id;
        const expenses = await Expense.findOne({owner:userId})
        if (!expenses) {
            return res.status(400).json({
                success:false,
                message:'Expense not found'
            })
        }
        return res.status(200).json({
            success:true,
            expenses
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Could not get expenses"
        })
    }
}