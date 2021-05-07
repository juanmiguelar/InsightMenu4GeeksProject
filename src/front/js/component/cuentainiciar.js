import React from "react";
import { Link } from "react-router-dom";

export const CuentaIniciar = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-sm-12 col-lg-6">
					<img
						className="test img-thumbnail"
						src="https://pro.tibbyolivier.com/wp-content/uploads/2018/07/fruit_1024x1024.jpg"
						alt="Inicio de Sesión"
					/>
				</div>
				<div className="col-xs-12 col-md-6">
					<div className="card">
						<div className="card-body">
							<div className="mt-4 text-center">
								<h4>Inicio de Sesión</h4> <span>Inicie sesión con sus credenciales</span>
								<div className="input-group mb-2">
									<div className="input-group-prepend">
										<span className="input-group-text" id="envelope">
											<i className="far fa-envelope" />
										</span>
									</div>
									<input
										type="email"
										className="form-control"
										name=""
										placeholder="Correo Electronico"
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
										placeholder="Contraseña"
										aria-describedby="far fa-keyboard"
										required
									/>
								</div>
							</div>
							<div className="fpass d-flex justify-content-between">
								<div>
									<Link to={"/cuentarecuperar1"}>
										<a href="#">Olvidó su contraseña?</a>
									</Link>
								</div>
							</div>
							<div className="mt-2">
								<button className="btn btn-info btn-block">Inicio de Sesión</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
