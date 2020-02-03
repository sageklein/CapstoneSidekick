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
				<dev className="AvatarContainer">
					<Avatar />
				</dev>
				<dev className="StoreContainer">
					<Store />
				</dev>
					<Footer />
			</>
		);
	}
}

export default Dashboard;