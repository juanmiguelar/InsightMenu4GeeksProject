import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CuentaRecuperar2 = () => {
	const [codigo, setCodigo] = useState("");

	const handleCodigo = e => {
		setCodigo(e.target.value);
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
								<Link to={"/cuentarecuperar3"} style={{ textDecoration: "none" }}>
									<button className="btn btn-info btn-block">Crear mi Cuenta</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
