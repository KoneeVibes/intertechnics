import { useState } from "react";
import { AppContext } from "./index";
import type { ContextProviderPropsType } from "../type/context.type";

export const AppContextProvider: React.FC<ContextProviderPropsType> = ({
	children,
}) => {
	const [openMenu, setOpenMenu] = useState(false);
	const [showServicesDropdown, setShowServicesDropdown] = useState(false);

	return (
		<AppContext.Provider
			value={{
				openMenu,
				setOpenMenu,
				showServicesDropdown,
				setShowServicesDropdown,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
