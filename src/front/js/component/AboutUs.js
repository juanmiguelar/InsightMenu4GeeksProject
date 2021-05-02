import React, { useContext } from "react";
import { Context } from "../store/appContext";
import salad from "../../img/salad.jpg";

export const AboutUs = () => {
	return (
		<div>
			<div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
				<div className="col-md-6 px-0">
					<img src={salad} className="img-thumbnail" />
				</div>
				<div className="col-md-6 px-0">
					<h1 className="display-4">Insight Menu Development Team</h1>
					<p className="lead my-3">4Geeks Academy</p>
				</div>
			</div>

			<div className="row mb-2">
				<div className="col-md-6">
					<div className="card flex-md-row mb-4 box-shadow h-md-250">
						<div className="card-body d-flex flex-column align-items-start">
							<strong className="d-inline-block mb-2 text-primary">Ingeniero Sistemas</strong>
							<h3 className="mb-0">
								<a className="text-dark" href="#">
									Juan Miguel
								</a>
							</h3>

							<p className="card-text mb-auto">Aqui ponemos una pequena descripcion</p>
						</div>
						<img src={salad} className="img-thumbnail" />
					</div>
				</div>
				<div className="col-md-6">
					<div className="card flex-md-row mb-4 box-shadow h-md-250">
						<div className="card-body d-flex flex-column align-items-start">
							<strong className="d-inline-block mb-2 text-primary">Scrum Master</strong>
							<h3 className="mb-0">
								<a className="text-dark" href="#">
									Margoth{" "}
								</a>
							</h3>
							<p className="card-text mb-auto">Aqui ponemos una pequena descripcion</p>
						</div>
						<img src={salad} className="img-thumbnail" />
					</div>
				</div>
			</div>

			<div className="row mb-2">
				<div className="col-md-6">
					<div className="card flex-md-row mb-4 box-shadow h-md-250">
						<div className="card-body d-flex flex-column align-items-start">
							<strong className="d-inline-block mb-2 text-primary">Project Manager</strong>
							<h3 className="mb-0">
								<a className="text-dark" href="#">
									David Avila
								</a>
							</h3>

							<p className="card-text mb-auto">Aqui ponemos una pequena descripcion</p>
						</div>
						<img src={salad} className="img-thumbnail" />
					</div>
				</div>
				<div className="col-md-6">
					<div className="card flex-md-row mb-4 box-shadow h-md-250">
						<div className="card-body d-flex flex-column align-items-start">
							<strong className="d-inline-block mb-2 text-primary">Ingeniero</strong>
							<h3 className="mb-0">
								<a className="text-dark" href="#">
									Adan
								</a>
							</h3>
							<p className="card-text mb-auto">Aqui ponemos una pequena descripcion</p>
						</div>
						<img src={salad} classNameName="img-thumbnail" />
					</div>
				</div>
			</div>

			<footer className="footer">
				<div className="justify-content-center text-center">
					<p className="text-muted">Si desea contactarnos, envie un correo al Soporte@insightmenu.com</p>
				</div>
			</footer>
		</div>
	);
};
