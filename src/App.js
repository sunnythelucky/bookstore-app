import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { Navbar } from "./components/NavBar";
import { StoreContext } from "./context/store-context";
import BookDetails from "./components/BookDetails";
import { useContext } from "react";
import { Route, Routes } from "react-router";
import BookStore from "./components/BookStore";
import BookEditDetails from "./components/BookEditDetails";

function App() {
	const { addBookOpen, setAddBookOpen, editBookOpen, setEditBookOpen } = useContext(StoreContext);
	return (
		<Provider store={store}>
			<BookDetails open={addBookOpen} onClose={() => setAddBookOpen(false)}></BookDetails>
			<BookEditDetails open={editBookOpen} onClose={() => setEditBookOpen(false)}></BookEditDetails>
			<Navbar />
			<Routes>
				<Route path="/bookstore-app" element={<BookStore />} />
			</Routes>
		</Provider>
	);
}

export default App;
