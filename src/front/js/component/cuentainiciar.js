import React from "react";
import "../../styles/cuentainiciar.scss";

export const CuentaIniciar = () => {
	return (
		<div className="lcont row justify-content-center">
			<div />
			<div className="d-flex ">
				<img
					className="test"
					src="https://pro.tibbyolivier.com/wp-content/uploads/2018/07/fruit_1024x1024.jpg"
					alt="Characters"
				/>
				<div className="card row col-md-4 col-md-6">
					<div className="mt-2 text-center">
						<h4>Inicio de Sesión</h4> <span>Inicie sesión con sus credenciales</span>
						<div className="mt-3 inputbox">
							<input
								type="password"
								className="form-control"
								name=""
								placeholder="Correo Electronico"
								required
							/>
							<i className="fa fa-user" />
						</div>
						<div className="inputbox">
							<input type="text" className="form-control" name="" placeholder="Contraseña" required />
							<i className="fa fa-lock" />
						</div>
					</div>
					<div className="fpass d-flex justify-content-between">
						<div>
							<a href="#" className="forgot">
								Olvidó su contraseña?
							</a>
						</div>
					</div>
					<div className="mt-2">
						<button className="btn btn-primary btn-block">Inicio de Sesión</button>
					</div>
				</div>
			</div>
		</div>
	);
};
