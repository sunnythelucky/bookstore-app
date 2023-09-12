import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./BookStore.css";
import Books from "./Books";

const BookStore = () => {
	useSelector((state) => state.books);
	const books = useSelector((state) => state.books);

	return (
		<div className="shop">
			<div className="shopTitle">
				<h1>Book Store</h1>
			</div>

			<div className="products">
				{books.map((book) => (
					<Books data={book} key={book.name} id={book.id} />
				))}
			</div>
		</div>
	);
};

export default BookStore;
