import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CuentaRecuperar1 = () => {
	const [email, setEmail] = useState("");

	const handleEmail = e => {
		setEmail(e.target.value);
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
								<Link to={"/cuentarecuperar2"} style={{ textDecoration: "none" }}>
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
