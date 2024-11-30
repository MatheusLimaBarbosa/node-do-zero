import { sql } from "./db.js"; // Certifique-se de que o caminho está correto

const createTable = async () => {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS videos (
        id TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
      );
    `;
    console.log("Table 'videos' created successfully!");
  } catch (error) {
    console.error("Error creating table:", error.message);
  }
};

createTable();
