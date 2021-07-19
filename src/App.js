// import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Destinations from "./components/content/Destinations";
import Features from "./components/content/Features";
import FormSection from "./components/content/FormSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Route, Switch } from "react-router-dom";
import CardDetails from "./components/content/CardDetails";
import dataJson from "./assets/json/data.json";
import { useEffect, useState } from "react";
import Navbar from "./components/header/Navbar";

function App() {
	const [data, setData] = useState([]);
	const [place, setPlace] = useState([]);

	const assignPlace = (element) => {
		console.log(element);
		setPlace(element);
	};

	useEffect(() => {
		setData(dataJson);
	}, []);

	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Header />
					<Destinations data={data} assignPlace={assignPlace} />
					<Features />
					<FormSection />
					<Footer />
				</Route>
				<Route path="/cardDetails">
					{/* <Navbar /> */}
					<CardDetails place={place} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
