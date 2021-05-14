import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
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
	const [processed, setProcessed] = useState(false);
	const params = useParams();
	const [tags, setTags] = useState([]);
	const [imagenes, setImagenes] = useState([]);
	const [imagenprincipal, setImagenprincipal] = useState("");
	const [nombre, setNombre] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [ingredientes, setIngredientes] = useState([]);
	const [precio, setPrecio] = useState(0);
	const [cantidad, setCantidad] = useState(0);

	useEffect(() => {
		ObtenerInformacionPlatillo();
	}, []);

	const ObtenerInformacionPlatillo = () => {
		let idPlatillo = params.id;

		fetch(store.API_URL + "/producto/" + idPlatillo, {
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
		setImagenprincipal(data.img);
		setPrecio(data.precio);
	};

	const MostrarTags = () => {
		return store.tags.map((item, index) => {
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
		return ingredientes.map((item, index) => {
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

	const handleCantidad = e => {
		setCantidad(e.target.value);
	};

	const AgregarCarrito = () => {
		const nuevoPlatillo = {
			id: params.id,
			nombre: nombre,
			precio: precio,
			img: imagenprincipal,
			cantidad: cantidad
		};
		if (existeenelCarrito(nuevoPlatillo)) {
			actions.changeQuantity(nuevoPlatillo, cantidad);
		} else {
			actions.agregarPlatillo(nuevoPlatillo);
		}
		console.log("se agregó");
	};

	const existeenelCarrito = nuevoPlatillo => {
		return (
			store.carrito.filter(item => {
				return item.id == nuevoPlatillo.id;
			}).length > 0
		);
	};

	const mensajepedidoenCarrito = () => {
		// <!-- Modal -->
		return (
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body">¡Su pedido se ha agregado con éxito!</div>
						<div className="modal-footer">
							<button
								onClick={e => {
									setProcessed(true);
								}}
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal">
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const redirect = () => {
		setProcessed(true);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-3 col-md-4 col-lg-5 mb-2">
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
						<h1>{nombre}</h1>
						<div className="Tags float-right">{MostrarTags()}</div>
						<h2>Descripción breve del platillo:</h2>
						{descripcion}
						<h4 className="price">
							Precio: &#162;
							{precio}
						</h4>
						<div className="PedidoOnline">
							<form className="form-inline">
								<label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
									Cantidad de platillos
								</label>
								<select
									className="custom-select my-1 mr-sm-2"
									id="inlineFormCustomSelectPref"
									onChange={e => {
										handleCantidad(e);
									}}>
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
								<div className="text-center">
									<button
										type="button"
										className="btn btn-primary"
										data-toggle="modal"
										data-target="#exampleModal"
										onClick={e => {
											AgregarCarrito();
										}}>
										Agregar al carrito
									</button>
									{mensajepedidoenCarrito()}
								</div>
							</form>
						</div>
					</div>
					{/* <!--description end--> */}
				</div>
				{MostrarTabla()}
				{processed ? <Redirect to="/" /> : null}
			</div>
		</div>
	);
};
