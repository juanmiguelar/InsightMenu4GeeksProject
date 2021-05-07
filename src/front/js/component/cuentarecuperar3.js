import React, { useState } from "react";

export const CuentaRecuperar3 = () => {
	const [password, setPassword] = useState("");
	const [repassword, setRePassword] = useState("");

	const handlePassword = e => {
		setPassword(e.target.value);
	};

	const handleRePassword = e => {
		setRePassword(e.target.value);
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
								<button className="btn btn-info btn-block">Crear mi Cuenta</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
