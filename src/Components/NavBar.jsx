import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { StoreContext } from "../context/store-context";

export const Navbar = () => {
	const { setAddBookOpen } = useContext(StoreContext);

	return (
		<div className="navbar">
			<div className="links">
				<Link onClick={() => setAddBookOpen(true)}>Add New Book</Link>
			</div>
		</div>
	);
};
