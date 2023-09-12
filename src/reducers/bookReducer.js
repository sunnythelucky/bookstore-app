import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from "../actions/actionTypes";

const initialState = {
	books: [
		{
			id: 1,
			name: "Book1",
			category: "Thriller",
			description: "This is a horror book",
			price: 999.0,
		},
		{
			id: 2,
			name: "Book2",
			price: 1999.0,
			category: "Fantasy",
			description: "This is a fantasy book",
		},
	],
};

export const bookReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BOOK:
			return {
				books: [...state.books, action.book],
			};
		case DELETE_BOOK:
			return {
				books: state.books.filter((book) => book.id !== action.id),
			};
		case EDIT_BOOK:
			return {
				books: [
					...state.books.map((book) => {
						if (book.id === action.book.id) {
							return action.book;
						}
						return book;
					}),
				],
			};
		default:
			return state;
	}
};
