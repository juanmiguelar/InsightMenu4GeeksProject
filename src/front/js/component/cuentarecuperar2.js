import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CuentaRecuperar2 = () => {
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
		} else {
			// no hacer nada
		}
		// El llamado del API
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", store.CONTENT_TYPE);

		let body = JSON.stringify({
			codigo: codigo
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
										type="number"
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
