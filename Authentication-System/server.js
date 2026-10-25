import app from "./src/app.js";
import "dotenv/config";
import connectDB from "./src/db/db.js";

const PORT = process.env.port;

connectDB();

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
