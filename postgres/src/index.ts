// Using postGres DB in a node project
// using neonDB database and pg library

import { Client } from "pg";

const client = new Client ({
   connectionString : "postgresql://TryPostgresDB_owner:HTFeGktv04Si@ep-falling-rain-a47xbcpw.us-east-1.aws.neon.tech/TryPostgresDB?sslmode=require"
})

// function to create table in database using sql query
async function createUserTable(){
    await client.connect()
    try {
        await client.query(`CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                )`)
    } 
    catch (error : any) {
        console.error(error.message);
    }
}
// createUserTable();
        
        
// function to insert values to table in database using sql query
async function insertIntoTable() {
    await client.connect()

    try {
        const res = await client.query("INSERT INTO users (username, email, password) VALUES ('justintime','justintime@mail.com','sfasdfsdf')")
        console.log("Insertion success",res);
                
    } catch (error : any) {
        console.error(error.message);
    }
}

insertIntoTable()

