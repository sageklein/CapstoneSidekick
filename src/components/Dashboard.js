import React, { Component } from "react";
import NavBar from "../components/NavBar"
import Store from "../components/Store"
import Footer from "../components/Footer"
import Avatar from "../components/Avatar"
import "../css/Dashboard.css"




class Dashboard extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className="containerContainer">
					<div className="avatarContainer">
						<Avatar />
					</div>
					<div className="storeContainer">
						<Store />
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default Dashboard;