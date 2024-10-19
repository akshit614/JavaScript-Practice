import { Client } from "pg";

const client = new Client ({
    connectionString : "postgresql://TryPostgresDB_owner:HTFeGktv04Si@ep-falling-rain-a47xbcpw.us-east-1.aws.neon.tech/TryPostgresDB?sslmode=require"
})

const createRelationWithForgienKey = async() => {
    await client.connect()
    try {
        const res = await client.query(`
            CREATE TABLE addresses (
                    id SERIAL PRIMARY KEY,
                    user_id INTEGER NOT NULL,
                    city VARCHAR(255) NOT NULL,
                    country VARCHAR(255) NOT NULL,
                    street VARCHAR(255) NOT NULL,
                    pincode VARCHAR(255) ,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
                    )`)
                    console.log("Successfully creatd table address",res);
                    
    } catch (error  :any) {
        console.error(error.message);
        
    }finally{
        client.end()
    }
}
// createRelationWithForgienKey()

// async function insertIntoAddressTable() {
//     await client.connect()

//     try {
//         const res = await client.query("INSERT INTO addresses (user_id, city, country, street, pincode) VALUES (3, 'kashipur', 'India', 'no2','4563463')")
//         console.log("Insertion success in addresses table",res);
                
//     } catch (error : any) {
//         console.error(error.message);
//     }
// } 

// insertIntoAddressTable()

async function insertIntoAddressTable(user_id : number,city : string, country : string, street : string, pincode : string) {

    await client.connect()
    try {
        const inserQuery = "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1,$2,$3,$4,$5)"
        const values = [user_id,city,country,street,pincode]
        const res = await client.query(inserQuery,values)
        console.log("Insertion success in addresses table",res);
                
    } catch (error : any) {
        console.error(error.message);
    }
} 

insertIntoAddressTable(4, 'Delhi', 'India', 'no2','456456')
