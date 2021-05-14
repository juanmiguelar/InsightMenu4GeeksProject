import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import cereal from "../../img/cereal2.jpg";
import pizza from "../../img/pizza2.jpg";
import carne from "../../img/carne.jpg";
import cake from "../../img/cake.jpg";
import logoinsight150ppi from "../../img/Insight_150ppi.png";
import logoinsight72ppi from "../../img/Insight_72ppi.png";
import logoinsightjpg from "../../img/Insight.jpg";

import { CardPlatillo } from "../component/cardplatillo";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const MostrarTags = () => {
		return store.tags.map((item, index) => {
			return GenerarTag(item, index);
		});
	};

	const GenerarTag = (item, index) => {
		return (
			<li className="nav-item" key={index}>
				<a className="nav-link" href="#">
					<span className="badge badge-pill badge-primary">{item.nombre}</span>
				</a>
			</li>
		);
	};

	const Mostrarplatillos = () => {
		return (
			<div className="container-fluid characters mt-5">
				<div className="row">
					{store.platillo !== undefined
						? store.platillo.map((item, index) => {
								return (
									<div key={index}>
										<CardPlatillo
											img={item.img}
											nombre={item.nombre}
											precio={item.precio}
											descripcion={item.descripcion}
											id={item.id}
										/>
									</div>
								);
						  })
						: "loading..."}
				</div>
			</div>
		);
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
							<li data-target="#carouselExampleCaptions" data-slide-to="1" />
							<li data-target="#carouselExampleCaptions" data-slide-to="2" />
							<li data-target="#carouselExampleCaptions" data-slide-to="3" />
						</ol>
						<div className="carousel-inner mb-2">
							<div className="carousel-item active">
								<img src={cereal} className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5>First slide label</h5>
									<p>Some representative placeholder content for the first slide.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src={carne} className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5>Second slide label</h5>
									<p>Some representative placeholder content for the second slide.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src={pizza} className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5>Third slide label</h5>
									<p>Some representative placeholder content for the third slide.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src={cake} className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5>Third slide label</h5>
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
				</div>
			</div>
			<div className="row">
				<div className="col">
					<nav className="navbar navbar-expand-lg navbar-light bg-light navbartags">
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
							<ul className="navbar-nav nav-fill w-50">{MostrarTags()}</ul>
						</div>
					</nav>
				</div>
			</div>
			<div className="row">
				<div className="col">{Mostrarplatillos()}</div>
			</div>
		</div>
	);
};
