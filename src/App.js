import "./App.css";
import * as React from "react";
import { Browserrouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import NotFound from "./pages/NotFound/Notfound";

function App() {
	return (
		<Browserrouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="project" element={<Projects />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Browserrouter>
	);
}

export default App;
