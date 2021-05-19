import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function CardPlatillo(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="col">
			<div className="card" style={{ width: "18rem" }}>
				<img
					className="card-img-top img-responsive"
					src={props.img}
					alt="Comida"
					style={{ maxHeight: "250px" }}
				/>
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
