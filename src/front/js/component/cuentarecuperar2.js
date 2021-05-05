import React from "react";

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
								<div className="inputbox">
									<input
										type="number"
										className="form-control"
										name=""
										placeholder="Ingrese el código"
									/>
									<i className="far fa-keyboard" />
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
