import { useState } from "react";
import { dummyUserData, type UserType } from "../assets/assets"
import { Pencil } from "lucide-react";

type UserEditFormDataType = Pick<UserType,
	"username" | "full_name" | "bio" |
	"location"> & {
		profile_picture: File | null,
		cover_photo: File | null
	};

const ProfileModal = ({ setShowEdit }:
	{ setShowEdit: React.Dispatch<React.SetStateAction<boolean>> }) => {

	const user = dummyUserData;
	const [editForm, setEditForm] = useState<UserEditFormDataType>({
		username: user.username,
		full_name: user.full_name,
		bio: user.bio,
		location: user.location,
		profile_picture: null,
		cover_photo: null,

	});

	const handleSaveProfile = async (e: React.FormEvent) => {
		e.preventDefault();
	}

	return (
		<div className="fixed top-0 bottom-0 left-0 right-0 z-110 h-screen
		overflow-y-scroll bg-black/50">
			<div className="max-w-2xl sm:py-6 mx-auto">
				<div className="bg-white rounded-lg shadow p-6">
					<h1 className="text-2xl font-bold text-gray-900 mb-6">
						Edit Profile
					</h1>

					<form className="space-y-4" onSubmit={handleSaveProfile}>
						{/* Profile Picture */}
						<div className="flex flex-col items-center gap-3">
							<label htmlFor="profile_picture" className="block text-sm
							font-medium text-gray-700 mb-1">
								Profile Picture
								<input type="file" accept="image" id="profile_picture"
									className="w-full p-3 border border-gray-200 rounded-lg"
									onChange={e => {
										const file = e.target.files?.[0];
										if (!file) return;

										setEditForm({
											...editForm,
											profile_picture: file
										})
									}
									} />
								<div className="group/profile relative">
									<img src={editForm.profile_picture
										? URL.createObjectURL(editForm.profile_picture)
										: user.profile_picture} className="w-24 h-24 rounded-full
										object-cover mt-2" alt="" />
									<div className="absolute hidden group-hover/profile:flex
										top-0 left-0 right-0 bottom-0 bg-black/20 rounded-full
										items-center justify-center">
										<Pencil className="w-5 h-5 text-white" />
									</div>
								</div>
							</label>
						</div>

						{/* Cover Photo */}
						<div className="flex flex-col items-start gap-3">
							<label htmlFor="cover_photo" className="block text-sm font-medium
							text-gray-700 mb-1">
								Cover Photo
								<input hidden type="file" accept="image/*" id="profile_picture"
									className="w-full p-3 border border-gray-200 rounded-lg"
									onChange={e => {
										const files = e.target.files;
										if (files && files.length > 0) {
											setEditForm({ ...editForm, cover_photo: files[0] })
										}
									}} />

								<div className="group/cover relative">
									<img src={editForm.cover_photo
										? URL.createObjectURL(editForm.cover_photo)
										: user.cover_photo} className="w-80 h-40 rounded-lg bg-linear-to-r
										from-indigo-200 via-purple-200 to-pink-200 object-cover mt-2" alt="" />

									<div className="absolute hidden group-hover/cover:flex
									top-0 left-0 right-0 bottom-0 bg-black/20 rounded-lg
									items-center justify-center">
										<Pencil className="w-5 h-5 text-white" />
									</div>
								</div>
							</label>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Name
							</label>
							<input type="text" id="" className="w-full p-3 border border-gray-200
							rounded-lg" placeholder="Please enter your full name"
								value={editForm.full_name}
								onChange={e => setEditForm({ ...editForm, full_name: e.target.value })} />
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Name
							</label>
							<input type="text" id="" className="w-full p-3 border border-gray-200
							rounded-lg" placeholder="Please enter a username"
								value={editForm.username}
								onChange={e => setEditForm({ ...editForm, username: e.target.value })} />
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Bio
							</label>
							<textarea rows={3} className="w-full p-3 border border-gray-200
							rounded-lg" placeholder="Please enter your bio"
								value={editForm.bio}
								onChange={e => setEditForm({ ...editForm, bio: e.target.value })} />
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Location
							</label>
							<input type="text" id="" className="w-full p-3 border border-gray-200
							rounded-lg" placeholder="Please enter your location"
								value={editForm.location}
								onChange={e => setEditForm({ ...editForm, location: e.target.value })} />
						</div>

						<div className="flex justify-end space-x-3 pt-6">
							<button onClick={() => setShowEdit(false)} type="button" className="px-4 py-2
							border border-gray-300 rounded-lg text-gray-700 cursor-pointer
							hover:bg-gray-50 transition-colors">Cancel</button>
							<button type="submit" className="px-4 py-2 bg-linear-to-r from-indigo-500
							to-purple-600 text-white rounded-lg hover:from-indigo-600
							hover:to-purple-700 transition cursor-pointer">Save Changes</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ProfileModal