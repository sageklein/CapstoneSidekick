import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";
import "../../src/css/Dashboard.css";
// import "../../src/css/Login.css";

class Landing extends Component {
	render() {
		return (
			<>
				{/* <div className="login">
					<Login />
				</div> */}
				<div className="navbar">
					<NavBar />
				</div>
				<div className="dashboard">
					<Dashboard />
				</div>
				<div className="footer">
					<Footer />
				</div>
			</>
		);
	}
}

export default Landing;