import React from "react";
import "../../styles/landing.scss";

import salad3small from "../../img/salad3peq.jpg";
import salad4med from "../../img/salad4med.jpg";
import salad4small from "../../img/salad4peq.jpg";

export const Landing = () => {
	return (
		<div className="container">
			<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="d-block w-100" src={salad3small} alt="First slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={salad4med} alt="Second slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={salad4small} alt="Third slide" />
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
};
