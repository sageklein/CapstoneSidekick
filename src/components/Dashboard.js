import React, { Component } from "react";
import Sidekick from "../components/Sidekick"
import NavBar from "../components/NavBar";
import Store from "../components/Store"
// import Login from "../components/Login";




class Dashboard extends Component {
	render() {
		return (
			<> 
				<NavBar />
				<Sidekick />
				<Store />
			</>
		);
	}
}

export default Dashboard;