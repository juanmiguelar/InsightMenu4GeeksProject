import React from "react";
import "../../styles/home.scss";

export const CuentaIniciar = () => {
	return (
		<div className="lcont row">
			<div />
			<img
				className="col-6 "
				src="https://pro.tibbyolivier.com/wp-content/uploads/2018/07/fruit_1024x1024.jpg"
				alt="Characters"
			/>
			<div>
				<div className="col card row">
					<div className="mt-2 text-center">
						<h4>Inicio de Sesión</h4> <span>Inicie sesión con sus credenciales</span>
						<div className="mt-3 inputbox">
							<input type="text" className="form-control" name="" placeholder="Correo Electronico" />
							<i className="fa fa-user" />
						</div>
						<div className="inputbox">
							<input type="text" className="form-control" name="" placeholder="Contraseña" />
							<i className="fa fa-lock" />
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
							<label className="form-check-label">
								Acepta las políticas de seguridad y condiciones de servicio
							</label>
						</div>
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
