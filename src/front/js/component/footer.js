import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			<Link to="/aboutus">Insight Menu</Link> <i className="fas fa-utensils" /> Todos los derechos reservados{" "}
			<i className="far fa-copyright" /> 2021
		</p>
	</footer>
);
