import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2/dist/sweetalert2.js";
import withReactContent from "sweetalert2-react-content";
import "sweetalert2/src/sweetalert2.scss";

export const CuentaCrear = () => {
	const { store, actions } = useContext(Context);
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [direccion, setDireccion] = useState("");
	const [telefono, setTelefono] = useState("");
	const [password, setPassword] = useState("");
	const [repassword, setRePassword] = useState("");
	const [esCuentaEmpresarial, setEsCuentaEmpresarial] = useState(false);
	const [error, setError] = useState("");
	const [msj, setMsj] = useState("");

	// const MySwal = withReactContent(Swal);

	// const Register = () => {
	// 	// alert(nombre, email, direccion, telefono, password, repassword);
	// 	MySwal.fire({
	// 		title: <p>Crear Cuenta</p>,
	// 		icon: "success",
	// 		showConfirmButton: false,
	// 		timer: 2000,
	// 		didOpen: () => {
	// 			MySwal.clickConfirm();
	// 		}
	// 	}).then(() => {
	// 		return MySwal.fire(<p>Su cuenta se ha agregado satisfactoriamente.</p>);
	// 	});
	// };

	const handleNombre = e => {
		setNombre(e.target.value);
	};

	const handleEmail = e => {
		setEmail(e.target.value);
	};

	const handleDireccion = e => {
		setDireccion(e.target.value);
	};

	const handleTelefono = e => {
		setTelefono(e.target.value);
	};

	const handlePassword = e => {
		setPassword(e.target.value);
	};

	const handleRePassword = e => {
		setRePassword(e.target.value);
	};

	const handleEsCuentaEmpresarial = e => {
		setEsCuentaEmpresarial(e.target.checked);
	};

	// Funcion Validar - Campos Requeridos

	const Validar = () => {
		if (
			nombre.trim() === "" ||
			email.trim() === "" ||
			direccion.trim() === "" ||
			telefono.trim() === "" ||
			password.trim() === "" ||
			repassword.trim() === ""
		) {
			setError("Los campos son requeridos. Ingrese los datos solicitados");
			return false;
		}

		if (password.trim() !== repassword.trim()) {
			setError("Las contrase??as deben ser iguales.");
			return false;
		}

		setError("");
		return true;
	};

	const ValidarCrearCuenta = () => {
		// Obtener los datos
		const esValido = Validar();
		if (esValido) {
			// El llamado del API
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", store.CONTENT_TYPE);

			let body = JSON.stringify({
				nombre: nombre,
				email: email,
				tipo: esCuentaEmpresarial ? "empresarial" : "particular",
				direccion: direccion,
				telefono: telefono,
				password: password,
				repassword: repassword
			});

			var requestOptions = {
				method: store.POST,
				headers: myHeaders,
				body: body
			};

			fetch(store.API_URL + "/register", requestOptions)
				.then(response => {
					if (response.ok) {
						return response.json();
					} else {
						response.json().then(data => {
							setError(data.msg);
						});
					}
				})
				.then(result => {
					setMsj("Cuenta creada! Inicia sesi??n");
				})
				.catch(error => {
					setError(error.message);
				});
		}
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div />
				<div>
					<div className="col">
						<div className="mt-4 text-center">
							<h4>Crear Cuenta</h4>{" "}
							<span>Ingrese los siguientes datos para la creaci??n de su cuenta</span>
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
									placeholder="Nombre" // Nombre
									aria-describedby="user"
									value={nombre}
									onChange={e => {
										handleNombre(e);
									}}
									required
								/>
							</div>
							<div className="input-group mb-2">
								<div className="input-group-prepend">
									<span className="input-group-text" id="user">
										<i className="far fa-envelope" />
									</span>
								</div>
								<input
									type="email"
									className="form-control"
									name=""
									placeholder="Email" // Email
									aria-describedby="user"
									value={email}
									onChange={e => {
										handleEmail(e);
									}}
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
									placeholder="Direcci??n F??sica" // Direccion
									aria-describedby="address"
									value={direccion}
									onChange={e => {
										handleDireccion(e);
									}}
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
									placeholder="Tel??fono" // Telefono
									aria-describedby="telephone"
									value={telefono}
									onChange={e => {
										handleTelefono(e);
									}}
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
									placeholder="Contrase??a" // Contrase??a
									aria-describedby="contrasenna"
									value={password}
									onChange={e => {
										handlePassword(e);
									}}
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
									placeholder="Repetir Contrase??a" // Repetir Contrase??a
									aria-describedby="contrasenna2"
									value={repassword}
									onChange={e => {
										handleRePassword(e);
									}}
									required
								/>
							</div>
						</div>
						<div>
							<div className="form-check">
								<input
									className="form-check-input" // Checkbox Cuenta Empresarial
									type="checkbox"
									value={esCuentaEmpresarial}
									id="defaultCheck1"
									onChange={e => {
										handleEsCuentaEmpresarial(e);
									}}
								/>
								<label className="form-check-label" htmlFor="defaultCheck1">
									Seleccione si es una cuenta empresarial
								</label>
							</div>
						</div>
						<div className="mt-2 justify-content-center">
							<p className="text-info">{msj}</p>
							<p className="text-danger">{error}</p>
							<button
								className="btn btn-info btn-block"
								onClick={e => {
									ValidarCrearCuenta(e);
								}}>
								{/* onClick={Register} */}
								Crear mi Cuenta
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
