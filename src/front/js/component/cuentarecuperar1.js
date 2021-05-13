import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const CuentaRecuperar1 = props => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const { store, actions } = useContext(Context);

	const handleEmail = e => {
		setEmail(e.target.value);
	};

	// Funcion Validar - Campos Requeridos
	const Validar = () => {
		if (email === "") {
			setError("Los campos son requeridos. Ingrese los datos solicitados");
			return false;
		} else {
			setError("");
			return true;
		}
	};

	const ValidarRecuperar1 = () => {
		// Obtener los datos
		const esValido = Validar();
		if (esValido) {
			// llamar al api
			// El llamado del API
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", store.CONTENT_TYPE);

			let body = JSON.stringify({
				email: email
			});

			var requestOptions = {
				method: store.POST,
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
					props.setEmail(email);
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
				<div>
					<div className="card">
						<div className="card-body">
							<div className="mt-4 text-center">
								<h4>Recuperar Contraseña</h4>{" "}
								<span>Ingrese su correo electrónico para la recuperación de su cuenta</span>
								<div className="input-group mb-2">
									<div className="input-group-prepend">
										<span className="input-group-text" id="envelope">
											<i className="fa fa-envelope" />
										</span>
									</div>
									<input
										type="email"
										className="form-control"
										name=""
										placeholder="Correo Electrónico"
										aria-describedby="envelope"
										value={email}
										onChange={e => {
											handleEmail(e);
										}}
										required
									/>
								</div>
							</div>
							<div className="mt-2">
								{/* <Link to={"/cuentarecuperar2"} style={{ textDecoration: "none" }}> */}
								<p className="text-danger">{error}</p>
								<button
									className="btn btn-info btn-block"
									onClick={e => {
										ValidarRecuperar1(e);
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

CuentaRecuperar1.propTypes = {
	setEmail: PropTypes.func,
	setMostrarControles: PropTypes.func,
	setMsjSig: PropTypes.func
};
