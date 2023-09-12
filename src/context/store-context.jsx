import { createContext, useState } from "react";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
	const [addBookOpen, setAddBookOpen] = useState(false);
	const [editBookOpen, setEditBookOpen] = useState(false);
	const [selectedId, setSelectedId] = useState(null);

	const contextValue = {
		addBookOpen,
		setAddBookOpen,
		editBookOpen,
		setEditBookOpen,
		setSelectedId,
		selectedId,
	};

	return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};
