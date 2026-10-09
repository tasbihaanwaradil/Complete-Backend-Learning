import app from "./src/app.js";
import connectDB from "./src/db/db.js";
import "dotenv/config";

connectDB();

app.listen(process.env.PORT, () => {
  console.log("server is running on PORT 3000");
});
