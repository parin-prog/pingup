import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import webhookRoute from "./routes/webhook.route.js";

const app = express();

await connectDB();

app.use(cors());
app.use("/api/webhooks", webhookRoute);
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});