import mongoose from "mongoose";

function GenerateDatabaseURL(): string
{
    let url: string = "mongodb+srv://moosaraza1k99:<password>@maindb.e1kduzm.mongodb.net/?retryWrites=true&w=majority&appName=mainDB";
    const password: string = process.env.PASSWORD ?? "";
    return url.replace("<password>", password);
}

export async function DatabaseConfiguration() {
    try 
    {
        mongoose.set("strictQuery", true);
        mongoose.set("autoCreate", true);
        await mongoose.connect(GenerateDatabaseURL());
        console.info("information: database connected...");
    } catch (error) 
    {
        console.error("error: cannot connect to the database...");
    }
}