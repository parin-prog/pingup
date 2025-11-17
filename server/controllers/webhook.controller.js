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

	// USER CREATED
	if (type === "user.created") {
		const user = await User.findById(data.id);
		
		let userName = data.username;
		if (user) {
			userName = userName + Math.floor(Math.random() * 1000);
		}

		await User.create({
			_id: data.id,
			email: data.email_addresses?.[0]?.email_address,
			first_name: data.first_name,
			last_name: data.last_name,
			username: userName,
			profile_picture: data.image_url,
		});

		return res.status(201).send("User created in MongoDB");
	}

	// USER UPDATED
	if (type === "user.updated") {
		await User.findOneAndUpdate(
			{ clerkId: data.id },
			{
				email: data.email_addresses?.[0]?.email_address,
				firstName: data.first_name,
				lastName: data.last_name,
				image: data.image_url,
			}
		);
		return res.status(200).send("User updated");
	}

	// USER DELETED
	if (type === "user.deleted") {
		await User.findOneAndDelete({ clerkId: data.id });
		return res.status(200).send("User deleted");
	}

	res.status(200).send("Webhook received");
};
