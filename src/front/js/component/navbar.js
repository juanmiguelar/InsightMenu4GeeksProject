import React from "react";
import { Link } from "react-router-dom";
import logoinsight150ppi from "../../img/Insight_150ppi.png";
import logoinsight72ppi from "../../img/Insight_72ppi.png";
import logoinsightjpg from "../../img/Insight.jpg";

export const Navbar = () => {
	return (
		<div className="containerlanding">
			<div className="row">
				<div className="col">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<a className="navbar-brand" href="#">
							<img src={logoinsight150ppi} width="150" height="70" alt="" />
						</a>
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
							<ul className="navbar-nav nav-fill w-50">
								<li className="nav-item active">
									<a className="nav-link" href="#">
										Inicio <span className="sr-only">(current)</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Menú
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Contáctenos
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
										Carrito
										<i className="fas fa-shopping-cart" />
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};
