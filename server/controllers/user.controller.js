import User from "../models/User";

// Get user data using userId
export const getUserData = async (req, res) => {
	try {
		const { userId } = req.auth();
		const user = await User.findById(userId);
		if (!user) {
			return res.json({ success: false, message: "User not found." });
		}
		res.json({ success: true, data: user });
	} catch (err) {
		console.log(err);
		res.json({ success: false, message: err.message });
	}
}

// // Register a new user
// export const registerUser = async (req, res) => {
// 	try {
// 		const { _id, email, full_name, username } = req.body;
// 		const newUser = new User({ _id, email, full_name, username });
// 		await newUser.save();
// 		res.json({ success: true, data: newUser });
// 	} catch (err) {
// 		console.log(err);
// 		res.json({ success: false, message: err.message });
// 	}
// }

// Update user profile using userId
export const updateUserProfile = async (req, res) => {
	try {
		const { userId } = req.auth();
		const { username, bio, location, full_name } = req.body;

		const tempUser = await User.findById(userId);

		!username && (username = tempUser.username);

		if (tempUser.username !== username) {
			const user = await User.findOne({ username });
			if (user) {
				return res.json({ success: false, message: "Username already taken." });
			}
		}

		if (!updatedUser) {
			return res.json({ success: false, message: "User not found." });
		}
		res.json({ success: true, data: updatedUser });
	} catch (err) {
		console.log(err);
		res.json({ success: false, message: err.message });
	}
}