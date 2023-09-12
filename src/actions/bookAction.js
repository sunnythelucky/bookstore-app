import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from "./actionTypes";

const addBook = (book) => {
	return {
		type: ADD_BOOK,
		book,
	};
};

const deleteBook = (id) => {
	return {
		type: DELETE_BOOK,
		id,
	};
};

const editBook = (book) => {
	return {
		type: EDIT_BOOK,
		book,
	};
};

export { addBook, deleteBook, editBook };
