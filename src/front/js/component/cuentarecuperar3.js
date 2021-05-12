import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CuentaRecuperar3 = () => {
	const [password, setPassword] = useState("");
	const [repassword, setRePassword] = useState("");
	const { store, actions } = useContext(Context);
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
		} else {
			setError("");
			return true;
		}
	};

	const ValidarRecuperar3 = () => {
		// Obtener los datos
		const esValido = Validar();
		if (esValido) {
			// llamar al api
		} else {
			// no hacer nada
		}
		// El llamado del API
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", store.CONTENT_TYPE);

		let body = JSON.stringify({
			password: password,
			repassword: repassword
		});

		var requestOptions = {
			method: store.POST,
			headers: myHeaders,
			body: body
		};

		fetch(store.API_URL + "/login", requestOptions)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw Error(response.json());
				}
			})
			.then(result => {
				console.log("ok");
			})
			.catch(error => {});
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
