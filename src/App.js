import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Dashboard from "./components/dashboard";

function App() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Dashboard} />
		</BrowserRouter>
	);
}

export default App;