import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Storage from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<Router>
		<Storage />
	</Router>,
	document.getElementById("root")
);
