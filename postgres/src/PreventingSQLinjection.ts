// Preventing SQL injections using paramererized query
// makes database from different attacks 
// makes our database more vulnerable

import { Client } from "pg";

const client = new Client({
    connectionString:"postgresql://TryPostgresDB_owner:HTFeGktv04Si@ep-falling-rain-a47xbcpw.us-east-1.aws.neon.tech/TryPostgresDB?sslmode=require"
})

async function insertData(name : string, email: string, password : string) {
    await client.connect()

    try {
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1,$2,$3)";
        const values = [name,email,password];
        const res = await client.query(insertQuery,values);
        console.log("Insertion success", res);        
    } catch (error : any) {
        console.error(error.message)
    }finally {
        client.end()
    }
}

insertData('name5', 'mail.com', 'password' )