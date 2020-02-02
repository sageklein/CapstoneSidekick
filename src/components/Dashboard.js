import React, { Component } from "react";
import Sidekick from "../components/Sidekick"
import Navbar from "../components/NavBar";




class Dashboard extends Component {
	render() {
		return (
			<> 
                <Navbar />
				<Sidekick />
			</>
		);
	}
}

export default Dashboard;