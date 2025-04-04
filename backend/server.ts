import dotenv from "dotenv";
import app from "./src/app";

dotenv.config();

app.listen(process.env.PORT || 4000, () => {
	console.log(`Server running on port ${process.env.PORT || 4000}`);
});
