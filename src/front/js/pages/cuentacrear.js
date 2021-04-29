import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="lcont row">
			<div />
			<div>
				<div className="col card row">
					<div className="mt-4 text-center">
						<h4>Crear Cuenta</h4> <span>Ingrese los siguientes datos para la creación de su cuenta</span>
						<div className="inputbox">
							<input type="text" className="form-control" name="" placeholder="Nombre" required />
							<i className="fa fa-user" />
						</div>
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
						<div className="inputbox">
							<input
								type="text"
								className="form-control"
								name=""
								placeholder="Dirección Física"
								required
							/>
							<i className="fa fa-map-marked-alt" />
						</div>
						<div className="inputbox">
							<input
								type="tel"
								pattern="[0-9]{3}-[0-9]{3}"
								className="form-control"
								name=""
								placeholder="Teléfono"
								required
							/>
							<i className="fa fa-mobile-alt" />
						</div>
						<div className="inputbox">
							<input type="password" className="form-control" name="" placeholder="Contraseña" required />
							<i className="fa fa-lock" />
						</div>
						<div className="inputbox">
							<input
								type="password"
								className="form-control"
								name=""
								placeholder="Repetir Contraseña"
								required
							/>
							<i className="fas fa-unlock" />
						</div>
					</div>

					<div className="d-flex">
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
							<label className="form-check-label">
								Acepta las políticas de seguridad y condiciones de servicio
							</label>
						</div>
					</div>
					<div className="container row justify-content-center">
						<div className="col-6">
							<p>Seleccione si es una cuenta empresarial</p>
						</div>
						<div className="toggle-container ">
							<label className="switch round">
								<input type="checkbox" />
								<span className="slider round" />
							</label>
						</div>
					</div>
					<div className="mt-2 justify-content-center">
						<button className="btn btn-primary btn-block">Crear mi Cuenta</button>
					</div>
				</div>
			</div>
		</div>
	);
};
