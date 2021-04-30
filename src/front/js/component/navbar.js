import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/detalleplatillo">
					<button className="btn btn-primary">Detalle del platillo</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/test">
					<button className="btn btn-primary">test</button>
				</Link>
				<Link to="/cuentacrear">
					<button className="btn btn-success">Crear Cuenta</button>
				</Link>
				<Link to="/cuentainiciar">
					<button className="btn btn-success">Inicio Sesión</button>
				</Link>
				<Link to="/cuentarecuperar1">
					<button className="btn btn-warning">Recuperar Cuenta 1</button>
				</Link>
				<Link to="/cuentarecuperar2">
					<button className="btn btn-warning">Recuperar Cuenta 2</button>
				</Link>
				<Link to="/cuentarecuperar3">
					<button className="btn btn-warning">Recuperar Cuenta 3</button>
				</Link>
			</div>
		</nav>
	);
};
