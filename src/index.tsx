import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Home from "./routers/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route
				path="/"
				element={
					<React.StrictMode>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0"
						/>
						<Home />
					</React.StrictMode>
				}
			/>
			<Route path="*" element={<div>404</div>} />
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
