import React from "react";
import "../../styles/cuentarecuperar3.scss";

export const CuentaRecuperar3 = () => {
	return (
		<div className="cr3 row justify-content-center">
			<div />
			<div>
				<div className="cardr3 col card row ">
					<div className="mt-4 text-center">
						<h4>Nueva Contraseña</h4> <span>Ingrese su nueva contraseña</span>
						<div className="inputbox">
							<input
								type="password"
								className="form-control"
								name=""
								placeholder="Nueva contraseña"
								required
							/>
							<i className="far fa-envelope" />
						</div>
						<div className="inputbox">
							<input
								type="password"
								className="form-control"
								name=""
								placeholder="Confirme nueva contraseña"
								required
							/>
							<i className="far fa-envelope-open" />
						</div>
					</div>
					<div className="mt-2">
						<button className="btn btn-primary btn-block">Crear mi Cuenta</button>
					</div>
				</div>
			</div>
		</div>
	);
};
