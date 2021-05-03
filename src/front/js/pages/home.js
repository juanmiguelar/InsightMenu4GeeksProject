import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ceviche from "../../img/ceviche.jpg";
import cereal from "../../img/cereal.jpg";
import ensalada from "../../img/ensalada.jpg";
import pinto from "../../img/pinto.jpg";
import pizza from "../../img/pizza.jpg";
import logoinsight150ppi from "../../img/Insight_150ppi.png";
import logoinsight72ppi from "../../img/Insight_72ppi.png";
import logoinsightjpg from "../../img/Insight.jpg";

import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="containerhome">
			<div className="row">
				<div className="col">
					<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
							<li data-target="#carouselExampleCaptions" data-slide-to="1" />
							<li data-target="#carouselExampleCaptions" data-slide-to="2" />
							<li data-target="#carouselExampleCaptions" data-slide-to="3" />
							<li data-target="#carouselExampleCaptions" data-slide-to="4" />
						</ol>
						<div className="carousel-inner ">
							<div className="carousel-item active homecarousel">
								<div className="jumbohome">
									<h1 className="display-4">¡Hola!</h1>
									<p className="lead">
										Insight Menu te ayuda a revisar con detalles los ingredientes de los platillos
										que solicités en un restaurante.
									</p>
									<hr className="my-4" />
									<p>Registráte para recibir información acerca de tus restaurantes favoritos.</p>
									<a className="btn btn-primary btn-lg" href="#" role="button">
										¡Quiero Registrarme!
									</a>
								</div>
							</div>
							<div className="carousel-item">
								<img src={ceviche} className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5>First slide label</h5>
									<p>Some representative placeholder content for the first slide.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src={cereal} className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5>Second slide label</h5>
									<p>Some representative placeholder content for the second slide.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src={ensalada} className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5>Third slide label</h5>
									<p>Some representative placeholder content for the third slide.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src={pinto} className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5>Fourth slide label</h5>
									<p>Some representative placeholder content for the third slide.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src={pizza} className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5>Fifth slide label</h5>
									<p>Some representative placeholder content for the third slide.</p>
								</div>
							</div>
						</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleCaptions"
							role="button"
							data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleCaptions"
							role="button"
							data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
					<div className="col">
						<nav className="navbar navbar-expand-lg navbar-light bg-light">
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarNavDropdown"
								aria-controls="navbarNavDropdown"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
								<ul className="navbar-nav nav-fill w-50">
									<li className="nav-item active">
										<a className="nav-link" href="#">
											Tag1 <span className="sr-only">(current)</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Tag2
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Tag3
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Tag4
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Tag5
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};
