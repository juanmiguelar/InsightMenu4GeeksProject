import React from "react";
import { Link } from "react-router-dom";
import logoinsight150ppi from "../../img/Insight_150ppi.png";
import logoinsight72ppi from "../../img/Insight_72ppi.png";
import logoinsightjpg from "../../img/Insight.jpg";

import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<div className="container-fluid mb-3">
			<div className="row">
				<div className="col">
					<nav className="navbar navbar-expand-lg navbar-light bg-light navbarinsight">
						<Link to="/">
							<a className="navbar-brand" href="#">
								<img src={logoinsight150ppi} width="180" height="90" alt="" />
							</a>
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div className="collapse navbar-collapse justify-content-center" id="navbarNav">
							<ul className="navbar-nav nav-fill w-500">
								<Link to="/cuentainiciar">
									<li className="nav-item">
										<a className="nav-link" href="#">
											Iniciar Sesión
										</a>
									</li>
								</Link>
								<Link to="/carrito">
									<li className="nav-item">
										<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
											Carrito
											<i className="fas fa-shopping-cart" />
										</a>
									</li>
								</Link>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};
