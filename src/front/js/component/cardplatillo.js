import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function CardPlatillo(props) {
	const { store, actions } = useContext(Context);
	console.log(store);

	return (
		<div className="col">
			<div className="card" style={{ width: "18rem" }}>
				<img className="card-img-top" src={props.img} alt="Comida" />
				<div className="card-body">
					<h5 className="card-title text-xl-left">{props.nombre}</h5>
					<p className="card-text text-lg-left">{props.descripcion}</p>
					<p className="card-text text-lg-left">
						&#162;
						{props.precio}
					</p>
					<Link to={"/detalleplatillo/" + props.id}>
						<button href="#" className="btn btn-light float-left">
							¡Quiero saber más!
						</button>
					</Link>
					<a href="#" className="btn btn-warning float-right">
						<i className="fas fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
}

CardPlatillo.propTypes = {
	nombre: PropTypes.string,
	img: PropTypes.string,
	descripcion: PropTypes.string,
	precio: PropTypes.number,
	id: PropTypes.number
};
