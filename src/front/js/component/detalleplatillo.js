import React, { useContext } from "react";
import { Context } from "../store/appContext";
import salad1med from "../../img/salad1med.jpg";
import salad1small from "../../img/salad1small.jpg";
import salad2med from "../../img/salad2med.jpg";
import salad2small from "../../img/salad2peq.jpg";
import salad3med from "../../img/salad3med.jpg";
import salad3small from "../../img/salad3peq.jpg";
import salad4med from "../../img/salad4med.jpg";
import salad4small from "../../img/salad4peq.jpg";

import "../../styles/detalleplatillo.scss";

export const Detalleplatillo = () => {
	return (
		<div className="container">
			{/* <!--zoom container start--> */}
			<div className="xzoom-container">
				<img src={salad1small} className="xzoom" xoriginal={salad1med} />
				<div className="xzoom-thumbs">
					<a href={salad1med}>
						<img className="xzoom-gallery" src={salad1small} xpreview={salad1small} />
					</a>
					<a href={salad2med}>
						<img className="xzoom-gallery" src={salad2small} />
					</a>
					<a href={salad3med}>
						<img className="xzoom-gallery" src={salad3small} />
					</a>
					<a href={salad4med}>
						<img className="xzoom-gallery" src={salad4small} />
					</a>
					<div />
				</div>
				{/* <!--zoom container end--> */}
				{/* <!--description start--> */}
				<div className="description row-sm-6">
					<h1>Ensalada Verde</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
						in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
						recently with desktop publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
					</p>
					<span>$150</span>
					<div>
						<button className="buy">Comprar Ahora</button>
						<button className="cart">Agregar al carrito</button>
					</div>
				</div>
				{/* <!--description end--> */}
			</div>
		</div>
	);
};
