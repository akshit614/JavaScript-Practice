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
const selectQuery = (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const selectQuery = "SELECT * from users WHERE email = $1";
    const values = [email];
    const response = yield client.query(selectQuery, values);
    if (response.rows.length > 0) {
        console.log("User found", response.rows[0]);
        return response.rows[0];
    }
    else {
        console.log("User not found with this email");
        return null;
    }
});
selectQuery("ijkl@mail.com");
