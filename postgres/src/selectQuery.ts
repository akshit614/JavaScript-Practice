
import { Client } from "pg";

const client = new Client ({
   connectionString : "postgresql://TryPostgresDB_owner:HTFeGktv04Si@ep-falling-rain-a47xbcpw.us-east-1.aws.neon.tech/TryPostgresDB?sslmode=require"
})

const selectQuery = async (email:string) => {
    await client.connect()
    const selectQuery = "SELECT * from users WHERE email = $1"
    const values = [email]
    const response = await client.query(selectQuery,values)

    if (response.rows.length > 0) {
        console.log("User found", response.rows[0]);
        return response.rows[0]
    } else {
        console.log("User not found with this email");
        return null
    }
    
}

selectQuery("ijkl@mail.com")