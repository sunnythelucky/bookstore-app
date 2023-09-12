import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../actions/bookAction";
import { StoreContext } from "../context/store-context";

export const Books = (props) => {
	const dispatch = useDispatch();

	const { name, price, category, id } = props.data;
	const { setEditBookOpen, editBookOpen, setSelectedId } = useContext(StoreContext);

	const handleBookClick = (e, id) => {
		setEditBookOpen(!editBookOpen);
		setSelectedId(id);
	};

	const handleDelete = (e) => {
		e.stopPropagation();
		dispatch(deleteBook(id));
	};

	return (
		<div className="product" onClick={(e) => handleBookClick(e, id)}>
			<div className="description">
				<img src="book.jpg" alt="book icon" />
				<p>Name: {name}</p>
				<p>Price: {price}</p>
				<p>Category : {category}</p>
			</div>
			<button onClick={(e) => handleDelete(e)}>Delete</button>
		</div>
	);
};

export default Books;
