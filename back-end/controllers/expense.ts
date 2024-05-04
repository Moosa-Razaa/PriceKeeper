import { Request, Response } from "express";
import { IncomeRequest } from "../dtos/incomeRequest";
import ExpenseModel from "../models/ExpenseModel";

function IsBodyValid(body: IncomeRequest): boolean
{
    if(!body.title || !body.category || !body.description || !body.date) return false;
    if(body.amount < 0) return false;
    return true;
}

export async function AddExpense(request: Request, response: Response) 
{
    const body = request.body as IncomeRequest;
    if(!body || !IsBodyValid(body)) return response.status(400).send("Bad request...");

    const income = new ExpenseModel(body);
    try {
        console.info("information: saving new expense to database...");
        await income.save();
        console.log("successfully saved new expense to the database...");
        return response.status(200).send("successfully saved!");
    } catch (error) {
        console.error("error: can't save new expense to database.\nerror: ", error);
        return response.status(500).send("can't save new expense to the database...");
    }
}

export async function GetExpenses(_request: Request, response: Response)
{
    try {
        const expenses = await ExpenseModel.find().sort({ createdAt: -1 });
        return response.status(200).json(expenses);
    } catch (error) {
        console.error("error: can't able to read all expenses from the schema...");
        response.status(500).send("can't retrieve expenses...");
    }
}

export async function DeleteExpenses(request: Request, response: Response)
{
    const id: number = +request.params;

    if(id <= 0) return response.status(400).send("bad request...");
    ExpenseModel.findByIdAndUpdate(id)
    .then(() => response.status(200).send("successfully deleted the expense"))
    .catch((error) => {
        console.error("error: can't delete the expense from the database.\nerror: ", error);
        response.status(500).send("can't delete expense...");
    })
}