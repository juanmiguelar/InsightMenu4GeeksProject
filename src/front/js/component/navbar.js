import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar sticky-top navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand">Insight Menu</span>
				</Link>
				<div className="nav nav-pills nav-justified">
					<Link className="nav-link" to="/demo">
						<span className="">Inicio</span>
					</Link>
					<Link className="nav-link" to="/detalleplatillo">
						<span className="">Menú</span>
					</Link>
					<Link className="nav-link" to="/test">
						<span className="">Contáctenos</span>
					</Link>
					<Link className="nav-link" to="/test">
						<span className="">Carrito</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};
