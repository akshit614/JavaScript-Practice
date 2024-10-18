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
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const res = yield client.query(`
            CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `);
    });
}
// createUserTable();
function insertIntoTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const res = yield client.query("INSERT INTO users (username, email, password) VALUES ('justintime','justintime@mail.com','sfasdfsdf')");
            console.log("Insertion success", res);
        }
        catch (error) {
            console.error(error.message);
        }
    });
}
insertIntoTable();
