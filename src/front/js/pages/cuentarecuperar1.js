import React from "react";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="lcont row">
			<div />
			<div>
				<div className="col card row">
					<div className="mt-4 text-center">
						<h4>Recuperar Contraseña</h4>{" "}
						<span>Ingrese su correo electrónico para la recuperación de su cuenta</span>
						<div className="inputbox">
							<input
								type="password"
								className="form-control"
								name=""
								placeholder="Correo Electrónico"
								required
							/>
							<i className="fa fa-envelope" />
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