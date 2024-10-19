"use strict";
// Preventing SQL injections using paramererized query
// makes database from different attacks 
// makes our database more vulnerable
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
function insertData(name, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1,$2,$3)";
            const values = [name, email, password];
            const res = yield client.query(insertQuery, values);
            console.log("Insertion success", res);
        }
        catch (error) {
            console.error(error.message);
        }
        finally {
            client.end();
        }
    });
}
insertData('name5', 'mail.com', 'password');
