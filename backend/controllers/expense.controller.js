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
console.log(error);

        return res.status(400).json({
            success:false,
            message:"Failed to create expense"
        })
        
    }
}

export const getExpense = async (req, res) => {
    try {
        const userId = req.id;
        const expenses = await Expense.find({owner:userId})
        if (!expenses || expenses.length === 0) {
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

export const updateExpense = async (req, res) => {
    try {
        const {expenseId} = req.params
        const {title, amount, category, description, expenseDate} = req.body
        let updateData = {title, amount, category, description, expenseDate}
        const expense = await Expense.findByIdAndUpdate(expenseId, updateData, {new:true,})
        if (!expense) {
            return res.status(404).json({
                success:false,
                message:"Not found"
            })
        }
        
        return res.status(200).json({
            success:true,
            message:"Updated successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success:false,
            message:"Failed to update"
        })
        
    }
}

export const deleteExpense = async (req, res) => {
    
}