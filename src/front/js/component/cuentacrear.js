import React from "react";

export const CuentaCrear = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div />
				<div>
					<div className="col">
						<div className="mt-4 text-center">
							<h4>Crear Cuenta</h4>{" "}
							<span>Ingrese los siguientes datos para la creación de su cuenta</span>
							<div className="input-group mb-2">
								<div className="input-group-prepend">
									<span className="input-group-text" id="user">
										<i className="fa fa-user" />
									</span>
								</div>
								<input
									type="text"
									className="form-control"
									name=""
									placeholder="Nombre"
									aria-describedby="user"
									required
								/>
							</div>
							<div className="input-group mb-2">
								<div className="input-group-prepend">
									<span className="input-group-text" id="address">
										<i className="fa fa-map-marked-alt" />
									</span>
								</div>
								<input
									type="text"
									className="form-control"
									name=""
									placeholder="Dirección Física"
									aria-describedby="address"
									required
								/>
							</div>
							<div className="input-group mb-2">
								<div className="input-group-prepend">
									<span className="input-group-text" id="telephone">
										<i className="fa fa-mobile-alt" />
									</span>
								</div>
								<input
									type="tel"
									pattern="[0-9]{4}-[0-9]{4}"
									className="form-control"
									name=""
									placeholder="Teléfono"
									aria-describedby="telephone"
									required
								/>
							</div>
							<div className="input-group mb-2">
								<div className="input-group-prepend">
									<span className="input-group-text" id="contrasenna">
										<i className="fa fa-lock" />
									</span>
								</div>
								<input
									type="password"
									className="form-control"
									name=""
									placeholder="Contraseña"
									aria-describedby="contrasenna"
									required
								/>
							</div>
							<div className="input-group mb-2">
								<div className="input-group-prepend">
									<span className="input-group-text" id="contrasenna2">
										<i className="fas fa-unlock" />
									</span>
								</div>
								<input
									type="password"
									className="form-control"
									name=""
									placeholder="Repetir Contraseña"
									aria-describedby="contrasenna2"
									required
								/>
							</div>
						</div>

						<div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								<label className="form-check-label">
									Acepta las políticas de seguridad y condiciones de servicio
								</label>
							</div>
						</div>
						<div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
								<label className="form-check-label" htmlFor="defaultCheck1">
									Seleccione si es una cuenta empresarial
								</label>
							</div>
						</div>
						<div className="mt-2 justify-content-center">
							<button className="btn btn-info btn-block">Crear mi Cuenta</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
