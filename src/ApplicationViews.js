import { Route } from "react-router-dom";
import React, { Component } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Sidekick from "./components/Sidekick";
import Store from "./components/Store";

export default class ApplicationViews extends Component {
	render() {
		console.log("from app js", this.props);
		return (
			<>
				{/* <Route
					exact
					path="/"
					render={props => {
						return <Home />;
					}}
				/> */}
				<Route
					exact
					path="/sidekick"
					render={props => {
						return (
							<Sidekick
								user={this.props.user}
								setUser={this.props.setUser}
								{...props}
							/>
						);
					}}
				/>
				<Route
					exact
					path="/store"
					render={props => {
						return (
							<Store setUser={this.props.setUser} {...props} />
						);
					}}
				/>
				<Route
					exact
					path="/Dashboard"
					render={props => {
						return (
							<Dashboard setUser={this.props.setUser} {...props} />
						);
					}}
				/>
				<Route
					exact
					path="/login"
					render={props => {
						return (
							<Login setUser={this.props.setUser} {...props} />
						);
					}}
				/>
				{/* <Route
					exact
					path="/dashboard"
					render={props => {
						if (this.props.isAuthenticated()) {
							return <Dashboard {...props} />;
						} else {
							return <Redirect to="/login" />;
						}
					}}
				/> */}
			</>
		);
	}
}
