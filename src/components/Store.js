import React, { Component } from "react";
// import APIManager from "../../modules/APIManager";
import "../../src/css/Store.css";

class Store extends Component {
	render() {
		return (
			<>
				<div className="store">
					<img
						src={require("../images/AccessorriesStore.png")}
						className="store"
						alt="store"
					/>
				</div>
			</>
		);
	}
}

export default Store;
