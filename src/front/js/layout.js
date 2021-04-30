import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Detalleplatillo } from "./component/detalleplatillo";
import { Carrito } from "./component/Carrito";
import { AboutUs } from "./component/AboutUs";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { CuentaCrear } from "./pages/cuentacrear";
import { CuentaIniciar } from "./pages/cuentainiciar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/cuentacrear">
							<CuentaCrear />
						</Route>
						<Route exact path="/cuentainiciar">
							<CuentaIniciar />
						</Route>
						<Route exact path="/detalleplatillo">
							<Detalleplatillo />
						</Route>
						<Route exact path="/Carrito">
							<Carrito />
						</Route>
						<Route exact path="/AboutUs">
							<AboutUs />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
