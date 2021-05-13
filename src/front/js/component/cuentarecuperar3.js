import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const CuentaRecuperar3 = props => {
	const { store, actions } = useContext(Context);
	const [password, setPassword] = useState("");
	const [repassword, setRePassword] = useState("");
	const [error, setError] = useState("");

	const handlePassword = e => {
		setPassword(e.target.value);
	};

	const handleRePassword = e => {
		setRePassword(e.target.value);
	};

	// Funcion Validar - Campos Requeridos

	const Validar = () => {
		if (password === "" || repassword === "") {
			setError("Los campos son requeridos. Ingrese los datos solicitados");
			return false;
		}

		if (password !== repassword) {
			setError("Las contraseñas no son iguales!");
			return false;
		}

		setError("");
		return true;
	};

	const ValidarRecuperar3 = () => {
		// Obtener los datos
		const esValido = Validar();
		if (esValido) {
			// llamar al api
			// El llamado del API
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", store.CONTENT_TYPE);

			let body = JSON.stringify({
				email: props.email,
				password: password
			});

			var requestOptions = {
				method: store.PUT,
				headers: myHeaders,
				body: body
			};

			fetch(store.API_URL + "/recuperar", requestOptions)
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
				<div className="col-xs-12 col-md-6">
					<div className="card">
						<div className="card-body">
							<div className="mt-4 text-center">
								<h4>Nueva Contraseña</h4> <span>Ingrese su nueva contraseña</span>
								<div className="input-group mb-2">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i className="fa fa-lock" />
										</span>
									</div>
									<input
										type="password"
										className="form-control"
										name=""
										placeholder="Nueva contraseña"
										aria-describedby="envelope"
										value={password}
										onChange={e => {
											handlePassword(e);
										}}
										required
									/>
								</div>
								<div className="input-group mb-1">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i className="fas fa-unlock" />
										</span>
									</div>
									<input
										type="password"
										className="form-control"
										name=""
										placeholder="Confirme nueva contraseña"
										aria-describedby="efas fa-unlock"
										value={repassword}
										onChange={e => {
											handleRePassword(e);
										}}
										required
									/>
								</div>
							</div>
							<div className="mt-2">
								<p className="text-danger">{error}</p>
								<button
									className="btn btn-info btn-block"
									onClick={e => {
										ValidarRecuperar3(e);
									}}>
									Crear mi Cuenta
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

CuentaRecuperar3.propTypes = {
	email: PropTypes.string,
	setMostrarControles: PropTypes.func,
	setMsjSig: PropTypes.func
};
