import { NavLink } from "react-router-dom"
import { menuItemsData, type MenuItemType } from "../assets/assets"

const MenuItem = ({ setSidebarOpen }: { setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
	return (
		<div className="px-6 text-gray-600 space-y-1 font-medium">
			{
				menuItemsData.map(({to, label, Icon}: MenuItemType)  => (
					<NavLink key={to} to={to} end={to === "/"} onClickCapture={() => setSidebarOpen(false)}
						 className={({ isActive }) => `px-3.5 py-2 flex items-center gap-3 rounded-xl
							 ${isActive ? "bg-indigo-50 text-indigo-700" : "hover:bg-gray-50"}`}>
						<Icon className="w-5 h-5" />
						{label}
					</NavLink>
				))
			}
		</div>
	)
}

export default MenuItem