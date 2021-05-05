import React from "react";

export const CuentaRecuperar3 = () => {
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
										<span className="input-group-text" id="envelope">
											<i className="far fa-envelope" />
										</span>
									</div>
									<input
										type="password"
										className="form-control"
										name=""
										placeholder="Nueva contraseña"
										aria-describedby="envelope"
										required
									/>
								</div>
								<div className="input-group mb-1">
									<div className="input-group-prepend">
										<span className="input-group-text" id="envelopeopen">
											<i className="far fa-envelope-open" />
										</span>
									</div>
									<input
										type="password"
										className="form-control"
										name=""
										placeholder="Confirme nueva contraseña"
										aria-describedby="envelopeopen"
										required
									/>
								</div>
							</div>
							<div className="mt-2">
								<button className="btn btn-primary btn-block">Crear mi Cuenta</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
