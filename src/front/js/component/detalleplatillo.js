import React, { useContext } from "react";
import { Context } from "../store/appContext";
import salad1med from "../../img/salad1med.jpg";
import salad1small from "../../img/salad1small.jpg";
import salad2med from "../../img/salad2med.jpg";
import salad2small from "../../img/salad2peq.jpg";
import salad3med from "../../img/salad3med.jpg";
import salad3small from "../../img/salad3peq.jpg";
import salad4med from "../../img/salad4med.jpg";
import salad4small from "../../img/salad4peq.jpg";

import "../../styles/detalleplatillo.scss";

export const Detalleplatillo = () => {
	return (
		<div className="container">
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
					<li data-target="#carouselExampleIndicators" data-slide-to="1" />
					<li data-target="#carouselExampleIndicators" data-slide-to="2" />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={salad1med} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src={salad2med} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src={salad3med} className="d-block w-100" alt="..." />
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
			{/* <!--description start--> */}
			<div className="dishdetails">
				<h1>Ensalada Verde</h1>
				<h2>Descripción breve del platillo:</h2>
				<p className="product-description">
					Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa
					senectus enim minim sociosqu delectus posuere.
				</p>
				<h2>Descripción detallada del platillo:</h2>
				<p className="product-description">
					Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa
					senectus enim minim sociosqu delectus posuere.
				</p>
				<h4 className="price">
					Precio: <span>$180</span>
				</h4>
				<div>
					<form className="form-inline">
						<label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
							Cantidad de platillos
						</label>
						<select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
							<option selected>Seleccione:</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</select>
					</form>
					<div className="description row-sm-6">
						<form>
							<div className="form-group">
								<label htmlFor="exampleFormControlTextarea1">Instrucciones Especiales</label>
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
							</div>
							<div className="text-center">
								<button type="button" className="btn btn-primary">
									Agregar al carrito
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			{/* <!--description end--> */}
		</div>
	);
};
