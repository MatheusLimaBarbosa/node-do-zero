import postgres from "postgres";
import { neon } from "@neondatabase/serverless";
import "dotenv/config"; // Substitui require

export const sql = neon(process.env.DATABASE_URL); // Garante que o Neon está configurado corretamente

console.log("Database connection ready.");
