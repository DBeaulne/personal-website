import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import NotFound from "./pages/NotFound/Notfound";

function App() {
	const [currentPage, setCurrentPage] = useState("/home");

	/*
	 * Method that updates the page using the window history object
	 */
	const gotoUrl = (event, url) => {
		event.preventDefault(); // prevent the browswer from reloading

		if (url === "/about") {
			console.log("navigating to the about page");
			setCurrentPage("/about");
			window.history.pushState({}, "about", "/about");
		} else if (url === "/home") {
			console.log("navigating to the home page");
			setCurrentPage("/home");
			window.history.pushState({}, "home", "/home");
		}
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="project" element={<Projects />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
