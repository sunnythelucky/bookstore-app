/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ReactReduxContext, useDispatch } from "react-redux";
import { addBook } from "../actions/bookAction";
import { StoreContext } from "../context/store-context";
import "./BookDetails.css";
import { Modal } from "./Modal";

const categories = ["Comedy", "Fantasy", "Crime", "Drama", "Music", "Adventure", "History", "Thriller", "Animation"];

export const BookDetails = ({ onClose, open }) => {
	const dispatch = useDispatch();
	const { store } = useContext(ReactReduxContext);
	const [{ name, price, category, description, id }, updateValue] = useState({
		name: "",
		price: "",
		category: "",
		description: "",
		id: "",
	});

	const { handleSubmit, register, reset } = useForm({
		defaultValues: { name: "", description: "", category: "", price: "" },
	});
	const onSubmit = (data) => {
		dispatch(addBook({ ...data, id: store.getState().books[store.getState().books.length - 1].id + 1 }));
		reset({ name: "", description: "", category: "", price: "" });
		onClose();
	};

	return (
		<Modal open={open} onClose={onClose}>
			<div className="center">
				<section className="login">
					<h2>Add New Books</h2>
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
							<button type="submit">Add Book</button>
						</form>
					</div>
				</section>
			</div>
		</Modal>
	);
};

export default BookDetails;
