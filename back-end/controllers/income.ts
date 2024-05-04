import { Request, Response } from "express";
import { IncomeRequest } from "../dtos/incomeRequest";
import IncomeModel from "../models/IncomeModel";

function IsBodyValid(body: IncomeRequest): boolean
{
    if(!body.title || !body.category || !body.description || !body.date) return false;
    if(body.amount < 0) return false;
    return true;
}

export async function AddIncome(request: Request, response: Response) 
{
    const body = request.body as IncomeRequest;
    if(!body || !IsBodyValid(body)) return response.status(400).send("Bad request...");

    const income = new IncomeModel(body);
    try {
        console.info("information: saving new income to database...");
        await income.save();
        console.log("successfully saved new income to the database...");
        return response.status(200).send("successfully saved!");
    } catch (error) {
        console.error("error: can't save new income to database.\nerror: ", error);
        return response.status(500).send("can't save new income to the database...");
    }
}

export async function GetIncomes(request: Request, response: Response)
{
    try {
        const incomes = await IncomeModel.find().sort({ createdAt: -1 });
        return response.status(200).json(incomes);
    } catch (error) {
        console.error("error: can't able to read all incomes from the schema...");
        response.status(500).send("can't retrieve incomes...");
    }
}

export async function DeleteIncome(request: Request, response: Response)
{
    const id: number = +request.params;

    if(id <= 0) return response.status(400).send("bad request...");
    IncomeModel.findByIdAndUpdate(id)
    .then(() => response.status(200).send("successfully deleted the income"))
    .catch((error) => {
        console.error("error: can't delete the income from the database.\nerror: ", error);
        response.status(500).send("can't delete income...");
    })
}