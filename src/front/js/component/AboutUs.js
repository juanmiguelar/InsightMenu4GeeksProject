import React, { useContext } from "react";
import { Context } from "../store/appContext";
import salad from "../../img/salad.jpg";
import InsightMap from "./InsightMap";
import logoinsight150ppi from "../../img/Insight_150ppi.png";

import juan from "../../img/perfil2.jpg";
import david from "../../img/david.jpeg";
import margo from "../../img/margopower.jpeg";
import adan from "../../img/adan.jpeg";

export const AboutUs = () => {
	const { store, actions } = useContext(Context);
	const MapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=" + store.googlemap;
	return (
		<div>
			<div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
				<div className="col-md-6 px-0" />
				<div className="col-md-6 px-0">
					<h1 className="display-4">Insight Menu Development Team</h1>
					<p className="lead my-3">4Geeks Academy</p>
				</div>
			</div>

			<div className="row mb-2">
				<div className="col-md-6">
					<div className="card flex-md-row mb-4 box-shadow h-md-250">
						<div className="card-body d-flex flex-column align-items-start">
							<strong className="d-inline-block mb-2 text-primary">FullStack Developer</strong>
							<h3 className="mb-0">
								<a className="text-dark" href="#">
									Juan Miguel Arias Mejias
								</a>
							</h3>

							<p className="card-text mb-auto">
								En esta aplicación veo resuelto uno de los problemas más comunes para la población
								vegana.{" "}
							</p>
						</div>
						<img src={juan} className="img-thumbnail" style={{ maxHeight: "250px" }} />
					</div>
				</div>
				<div className="col-md-6">
					<div className="card flex-md-row mb-4 box-shadow h-md-250">
						<div className="card-body d-flex flex-column align-items-start">
							<strong className="d-inline-block mb-2 text-primary">
								SCRUM Product Owner SCRUM Master Certified
							</strong>
							<h3 className="mb-0">
								<a className="text-dark" href="#">
									Margoth Picado Aguilar
								</a>
							</h3>
							<p className="card-text mb-auto">
								¿Cuántas veces nos hemos llevado la sorpresa de que nuestro picadillo de papa lleva
								carne, pero no sabíamos? Este proyecto brinda la oportunidad de detallar los
								ingredientes del platillo que nos vamos a comer y de esta manera, brindarnos seguridad
								de lo que vamos a consumir.
							</p>
						</div>
						<img src={margo} className="img-thumbnail" style={{ maxHeight: "250px" }} />
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

							<p className="card-text mb-auto">
								Entusiasta de la tecnologia y servicios, gestion de proyectos y el deporte. Me gusta
								mucho bootstrap. Me fascina aplicar en conocimiento para innovar y ayudar a los demas.
							</p>
						</div>
						<img src={david} className="img-thumbnail" style={{ maxHeight: "250px" }} />
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
						<img src={adan} classNameName="img-thumbnail" style={{ maxHeight: "250px" }} />
					</div>
				</div>
			</div>

			<div className="row mb-2 ml-2">
				<div className="col">
					Localización física:
					<InsightMap
						googleMapURL={MapURL}
						containerElement={<div style={{ height: "400px" }} />}
						mapElement={<div style={{ height: "100%" }} />}
						loadingElement={<p>Cargando</p>}
					/>
				</div>
			</div>

			<footer className="footer">
				<div className="justify-content-center text-center">
					<p className="text-muted">Si desea contactarnos, envíe un correo a insightmenu@gmail.com</p>
				</div>
			</footer>
		</div>
	);
};
