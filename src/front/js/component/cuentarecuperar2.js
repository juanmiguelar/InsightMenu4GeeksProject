import React from "react";
import { Link } from "react-router-dom";

export const CuentaRecuperar2 = () => {
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
										type="password"
										className="form-control"
										name=""
										placeholder="Ingrese el código"
										aria-describedby="envelope"
										required
									/>
								</div>
							</div>
							<div className="mt-2">
								<Link to={"/cuentarecuperar3"}>
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
