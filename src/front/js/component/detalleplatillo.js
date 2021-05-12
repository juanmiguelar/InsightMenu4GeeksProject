import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
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
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [tags, setTags] = useState([]);
	const [imagenes, setImagenes] = useState([]);
	const [nombre, setNombre] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [ingredientes, setIngredientes] = useState([]);

	useEffect(() => {
		ObtenerInformacionPlatillo();
	}, []);

	const ObtenerInformacionPlatillo = () => {
		let idPlatillo = params.id;

		fetch("https://3001-maroon-beetle-2jn5kz80.ws-us03.gitpod.io/api/producto/" + idPlatillo, {
			method: "GET",
			headers: {}
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				// Procesamos la informacion
				ProcesarInformacionPlatillo(data);
			})
			.catch(err => {
				console.error(err);
			});
	};

	const ProcesarInformacionPlatillo = data => {
		setTags(data.tags);
		setNombre(data.nombre);
		setImagenes(data.imagenes);
		setDescripcion(data.descripcion);
		setIngredientes(data.ingredientes);
	};

	const MostrarTags = () => {
		return tags.map((item, index) => {
			return GenerarTag(item, index);
		});
	};

	const GenerarTag = (item, index) => {
		return (
			<span className="badge badge-pill badge-primary" key={index}>
				{item.nombre}
			</span>
		);
	};

	const MostrarImagenes = () => {
		const myvar = imagenes.map((item, index) => {
			return GenerarImagen(item, index);
		});
		console.log(myvar);
		return myvar;
	};

	const GenerarImagen = (item, index) => {
		const esActive = index == 0;
		const classActive = esActive ? "active" : "";
		return (
			<div className={"carousel-item " + classActive} key={index}>
				<img src={item.url} className="d-block img-responsive imagemaxheight" alt="..." />
			</div>
		);
	};

	const MostrarDetalles = () => {
		return ingrediente.map((item, index) => {
			return GenerarDetalles(item, index);
		});
	};

	const GenerarDetalles = (item, index) => {
		return (
			<tr>
				<th scope="row">{item.orden}</th>
				<td>{item.nombre}</td>
				<td>{item.descripcion}</td>
				<td>{item.preparacion}</td>
				<td>{item.gramos}</td>
				<td>{item.calorias}</td>
				<td>{item.azucar}</td>
			</tr>
		);
	};

	const MostrarTabla = () => {
		if (ingredientes.length > 0) {
			return (
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Orden</th>
							<th scope="col">Nombre</th>
							<th scope="col">Descripción</th>
							<th scope="col">Preparación</th>
							<th scope="col">Gramos</th>
							<th scope="col">Calorías</th>
							<th scope="col">Azúcar</th>
						</tr>
					</thead>
					<tbody>{MostrarDetalles()}</tbody>
				</table>
			);
		} else {
			return null;
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-3 col-md-4 col-lg-5">
					<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
							<li data-target="#carouselExampleIndicators" data-slide-to="1" />
							<li data-target="#carouselExampleIndicators" data-slide-to="2" />
						</ol>
						<div className="carousel-inner">{MostrarImagenes()}</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
				<div className="col-xs-12 col-sm-8 col-md-7 col-lg-6">
					{/* <!--description start--> */}
					<div className="dishdetails">
						<div className="Tags float-right">{MostrarTags()}</div>
						<h1>{nombre}</h1>
						<h2>Descripción breve del platillo:</h2>
						{descripcion}
						<h4 className="price">
							Precio: <span>$180</span>
						</h4>
						<div className="PedidoOnline">
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
							<div className="description">
								<form>
									<div className="form-group">
										<label htmlFor="exampleFormControlTextarea1">Instrucciones Especiales</label>
										<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
									</div>
									<div className="text-center mb-2">
										<button type="button" className="btn btn-info">
											Agregar al carrito
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!--description end--> */}
			</div>
			{MostrarTabla()}
		</div>
	);
};
