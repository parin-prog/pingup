import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhookHandler = async (req, res) => {
	const payload = req.body;
	const headers = req.headers;

	const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);

	let evt;
	try {
		evt = wh.verify(payload, headers);     // verify webhook signature
	} catch (err) {
		console.error("Webhook verification failed:", err);
		return res.status(400).send("Invalid signature");
	}

	const { type, data } = evt;
	console.log(type, data);

	const { id, username, first_name, last_name,
		email_addresses, image_url } = data;

	let userName = username;

	if (!userName) {
		userName = email_addresses[0].email_address.split("@")[0];
		userName += Math.floor(Math.random() * 1000);
	}

	const transformedData = {
		_id: id,
		email: email_addresses?.[0]?.email_address,
		full_name: `${first_name} ${last_name}`,
		username: userName,
		profile_picture: image_url,
	}

	try {

		// USER CREATED
		if (type === "user.created") {
			await User.create(transformedData);
			return res.status(201).send("User created in MongoDB");
		}

		// USER UPDATED
		if (type === "user.updated") {
			const { _id, ...updateData } = transformedData;
			await User.findOneAndUpdate({ _id: data.id }, { $set: updateData });
			return res.status(200).send("User updated");
		}

		// USER DELETED
		if (type === "user.deleted") {
			await User.findOneAndDelete({ _id: data.id });
			return res.status(200).send("User deleted");
		}

		res.status(200).send("Webhook received");
	} catch (dbErr) {
		console.error("MongoDB error:", dbErr);
		return res.status(500).send("Database operation failed");
	}
};
