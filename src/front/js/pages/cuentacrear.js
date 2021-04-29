import React from "react";
import "../../styles/home.scss";

export const CuentaCrear = () => {
	return (
		<div className="lcont row">
			<div />
			<div>
				<div className="col card row">
					<div className="mt-4 text-center">
						<h4>Crear Cuenta</h4> <span>Ingrese los siguientes datos para la creación de su cuenta</span>
						<div className="inputbox">
							<input type="text" className="form-control" name="" placeholder="Nombre" />
							<i className="fa fa-user" />
						</div>
						<div className="inputbox">
							<input type="text" className="form-control" name="" placeholder="Correo Electrónico" />
							<i className="fa fa-envelope" />
						</div>
						<div className="inputbox">
							<input type="text" className="form-control" name="" placeholder="Dirección Física" />
							<i className="fa fa-map-marked-alt" />
						</div>
						<div className="inputbox">
							<input type="text" className="form-control" name="" placeholder="Teléfono" />
							<i className="fa fa-mobile-alt" />
						</div>
						<div className="inputbox">
							<input type="text" className="form-control" name="" placeholder="Contraseña" />
							<i className="fa fa-lock" />
						</div>
						<div className="inputbox">
							<input type="text" className="form-control" name="" placeholder="Repetir Contraseña" />
							<i className="fas fa-unlock" />
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
					<div className="container row">
						<div className="col-6">
							<p>Es para una cuenta empresarial?</p>
						</div>
						<div className="toggle-container col-2">
							<label className="switch round">
								<input type="checkbox" />
								<span className="slider round" />
							</label>
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
