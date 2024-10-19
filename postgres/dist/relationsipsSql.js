"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://TryPostgresDB_owner:HTFeGktv04Si@ep-falling-rain-a47xbcpw.us-east-1.aws.neon.tech/TryPostgresDB?sslmode=require"
});
const createRelationWithForgienKey = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    try {
        const res = yield client.query(`
            CREATE TABLE addresses (
                    id SERIAL PRIMARY KEY,
                    user_id INTEGER NOT NULL,
                    city VARCHAR(255) NOT NULL,
                    country VARCHAR(255) NOT NULL,
                    street VARCHAR(255) NOT NULL,
                    pincode VARCHAR(255) ,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
                    )`);
        console.log("Successfully creatd table address", res);
    }
    catch (error) {
        console.error(error.message);
    }
    finally {
        client.end();
    }
});
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
function insertIntoAddressTable(user_id, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const inserQuery = "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1,$2,$3,$4,$5)";
            const values = [user_id, city, country, street, pincode];
            const res = yield client.query(inserQuery, values);
            console.log("Insertion success in addresses table", res);
        }
        catch (error) {
            console.error(error.message);
        }
    });
}
insertIntoAddressTable(4, 'Delhi', 'India', 'no2', '456456');
