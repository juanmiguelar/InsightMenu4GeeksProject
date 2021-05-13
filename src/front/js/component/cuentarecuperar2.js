import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const CuentaRecuperar2 = props => {
	const { store, actions } = useContext(Context);
	const [codigo, setCodigo] = useState("");
	const [error, setError] = useState("");

	const handleCodigo = e => {
		setCodigo(e.target.value);
	};

	// Funcion Validar - Campos Requeridos

	const Validar = () => {
		if (codigo === "") {
			setError("Los campos son requeridos. Ingrese los datos solicitados");
			return false;
		} else {
			setError("");
			return true;
		}
	};

	const ValidarRecuperar2 = () => {
		// Obtener los datos
		const esValido = Validar();
		if (esValido) {
			// llamar al api
			// El llamado del API
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", store.CONTENT_TYPE);

			let body = JSON.stringify({
				email: props.email,
				codigo: codigo
			});

			var requestOptions = {
				method: store.POST,
				headers: myHeaders,
				body: body
			};

			fetch(store.API_URL + "/recuperar/validar", requestOptions)
				.then(response => {
					if (response.ok) {
						return response.json();
					} else {
						response.json().then(data => {
							setError(data.msg);
						});
					}
				})
				.then(result => {
					props.setMsjSig(result.msg);
					props.setMostrarControles(true);
				})
				.catch(error => {
					console.log(error);
				});
		}
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div />
				<div>
					<div className="card">
						<div className="card-body">
							<div className="mt-4 text-center">
								<h4>Código de Validación</h4>{" "}
								<span>Ingrese el código enviado a su correo electrónico</span>
								<div className="input-group mb-2">
									<div className="input-group-prepend">
										<span className="input-group-text" id="keyboard">
											<i className="far fa-keyboard" />
										</span>
									</div>
									<input
										type="text"
										className="form-control"
										name=""
										placeholder="Ingrese el código"
										aria-describedby="number"
										value={codigo}
										onChange={e => {
											handleCodigo(e);
										}}
										required
									/>
								</div>
							</div>
							<div className="mt-2">
								{/* <Link to={"/cuentarecuperar3"} style={{ textDecoration: "none" }}> */}
								<p className="text-danger">{error}</p>
								<button
									className="btn btn-info btn-block"
									onClick={e => {
										ValidarRecuperar2(e);
									}}>
									Crear mi Cuenta
								</button>
								{/* </Link> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

CuentaRecuperar2.propTypes = {
	email: PropTypes.string,
	setMostrarControles: PropTypes.func,
	setMsjSig: PropTypes.func
};
