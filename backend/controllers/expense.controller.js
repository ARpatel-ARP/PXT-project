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
            userId:req.id,
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

export const 