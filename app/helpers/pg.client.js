import pg from "pg";

// utilisation de Pool pour ouvrir des connexions multiples utilisables en parallèle
const client = new pg.Pool({
  connectionString: process.env.PG_URL,
});

export default client;
