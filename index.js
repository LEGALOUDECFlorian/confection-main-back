import { createServer } from "node:http";
import "./app/helpers/env.load.js";
import app from "./app/index.app.js";

const server = createServer(app);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server launched at http://localhost:${PORT}`);
});
