import "./App.css";

import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSideBar = () => {
		const sideBar = document.querySelector(".Sidebar");

		if (isOpen) {
			sideBar.style.display = "none";
		} else {
			sideBar.style.position = "fixed";
			sideBar.style.top = 0;
			sideBar.style.left = 0;
			sideBar.style.right = 0;
			sideBar.style.bottom = 0;
			sideBar.style.display = "block";
		}

		setIsOpen(!isOpen);
	};

	return (
		<div className="App">
			<Sidebar toggleSidebar={toggleSideBar} />
			<Main toggleSidebar={toggleSideBar} />
		</div>
	);
};

export default App;
