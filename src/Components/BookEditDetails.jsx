/* eslint-disable no-unused-vars */
import { nanoid } from "nanoid";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { editBook } from "../actions/bookAction";
import "./BookDetails.css";
import { Modal } from "./Modal";
import { StoreContext } from "../context/store-context";

const categories = ["Comedy", "Fantasy", "Crime", "Drama", "Music", "Adventure", "History", "Thriller", "Animation"];

export const BookEditDetails = ({ onClose, open }) => {
	const dispatch = useDispatch();
	const { selectedId } = useContext(StoreContext);
	const { handleSubmit, register, reset } = useForm({});
	const selectedBook = useSelector((state) => state.books.find((book) => book.id === selectedId));

	useEffect(() => {
		reset(selectedBook);
	}, [reset, selectedBook]);

	const onSubmit = (data, e) => {
		e.preventDefault();
		dispatch(editBook({ ...data, id: selectedId }));
		reset({ name: "", description: "", category: "", price: "" });
		onClose();
	};

	return (
		<Modal open={open} onClose={onClose}>
			<div className="center">
				<section className="login">
					<h2>Update the Book Detail</h2>
					<div className="login login__container">
						<form onSubmit={handleSubmit(onSubmit)}>
							<label htmlFor="name">Book Name</label>
							<input {...register("name", { required: true })} type="text" placeholder="Book Name" />
							<label htmlFor="description">Description</label>
							<input {...register("description", { required: true })} type="text" placeholder="Author Name" />
							<label htmlFor="category">Category</label>
							<select {...register("category", { required: true })} placeholder="Category">
								<option value="" disabled>
									Select Category
								</option>
								{categories.map((category) => {
									return (
										<option key={category} value={category}>
											{category}
										</option>
									);
								})}
							</select>
							<label htmlFor="price">Price</label>
							<input {...register("price", { required: true })} type="number" placeholder="Price" />
							<button type="submit">Update Book</button>
						</form>
					</div>
				</section>
			</div>
		</Modal>
	);
};

export default BookEditDetails;
