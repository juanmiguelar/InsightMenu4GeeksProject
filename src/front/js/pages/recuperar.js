import React, { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { CuentaRecuperar1 } from "../component/cuentarecuperar1";
import { CuentaRecuperar2 } from "../component/cuentarecuperar2";
import { CuentaRecuperar3 } from "../component/cuentarecuperar3";

export const Recuperar = () => {
	const [etapa, setEtapa] = useState(1);
	const [msjSig, setMsjSig] = useState("");
	const [email, setEmail] = useState("");
	const [mostrarControles, setMostrarControles] = useState(false);
	const [mostrarInicioSesion, setMostrarInicioSesion] = useState(false);

	const mostrarEtapa = () => {
		switch (etapa) {
			case 1:
				return (
					<CuentaRecuperar1
						setEmail={setEmail}
						setMsjSig={setMsjSig}
						setMostrarControles={setMostrarControles}
					/>
				);
			case 2:
				return (
					<CuentaRecuperar2 email={email} setMostrarControles={setMostrarControles} setMsjSig={setMsjSig} />
				);
			case 3:
				return (
					<CuentaRecuperar3
						email={email}
						setMostrarControles={setMostrarInicioSesion}
						setMsjSig={setMsjSig}
					/>
				);
			default:
				return null;
		}
	};

	const handleOnClickSigEtapa = () => {
		const sigEtapa = etapa + 1;
		setEtapa(sigEtapa);
		setMostrarControles(false);
	};

	const mostrarSigEtapa = () => {
		if (mostrarControles) {
			return (
				<div className="container">
					<div className="row justify-content-center">
						<p className="text-info">{msjSig}</p>
					</div>
					<div className="row justify-content-center">
						<button
							className="btn btn-success"
							onClick={e => {
								handleOnClickSigEtapa();
							}}>
							Siguiente etapa
						</button>
					</div>
				</div>
			);
		} else {
			return null;
		}
	};

	const _mostrarIniciarSession = () => {
		if (mostrarInicioSesion) {
			return (
				<div className="container">
					<div className="row justify-content-center">
						<p className="text-info">{msjSig}</p>
						<br />
						<Link to={"/cuentainiciar"}>
							<a href="#" className="btn btn-success">
								Iniciar sesión
							</a>
						</Link>
					</div>
				</div>
			);
		} else {
			return null;
		}
	};

	return (
		<Fragment>
			{mostrarEtapa()}
			{mostrarSigEtapa()}
			{_mostrarIniciarSession()}
		</Fragment>
	);
};
