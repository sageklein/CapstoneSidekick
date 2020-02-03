import React, { Component } from "react";
import App from "../App"
// import ApiManager from "../components/modules/APIManager"
import "../../src/css/Login.css";

class Login extends Component {
	render() {
		// state = {
		// 	name: "",
		// 	password: "",
		// 	userId: "",
		// };
			App.isAuthenticated = () => sessionStorage.getItem("userId") !== null;

			App.setUser = userId => {
				sessionStorage.setItem("userId", userId);
			};

			App.toggle = () => {
				this.setState(prevState => ({
					modal: !prevState.modal
				}));
			};

			// Update state whenever an input field is edited
			App.handleFieldChange = evt => {
				const stateToChange = {};
				stateToChange[evt.target.id] = evt.target.value;
				this.setState(stateToChange);
			};
		return (
			<>
				<div className="LoginContainer">
					<h1>This is Login</h1>
					<img
						src={require("../images/raccoon.png")}
						className="racoon"
						alt="raccoon"
					/>
				</div>
			</>
		);
	}
}

export default Login;
