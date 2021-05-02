import React, { useContext } from "react";
import { Context } from "../store/appContext";
import salad from "../../img/salad.jpg";

export const Carrito = () => {
	return (
		<div className="row">
			<div className="col-md-4 order-md-2 mb-4">
				<h4 className="d-flex justify-content-between align-items-center mb-3">
					<span className="text-muted">Resumen de su pedido</span>
				</h4>
				<ul className="list-group mb-3">
					<li className="list-group-item d-flex justify-content-between lh-condensed">
						<div>
							<h6 className="my-0">Subtotal</h6>
						</div>
						<span className="text-muted">$20</span>
					</li>
					<li className="list-group-item d-flex justify-content-between lh-condensed">
						<div>
							<h6 className="my-0">Impuesto de ventas incluido</h6>
						</div>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span>Total (USD)</span>
						<strong>$20</strong>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<button type="submit" className="btn btn-secondary">
							Completar su orden
						</button>
					</li>
				</ul>
			</div>
			<div className="col-md-8 order-md-1">
				<h1 className="mb-3">Su pedido</h1>
				<div className="container-fluid">
					<div className="container-fluid">
						<div className="m-2 pb-2 row justify-content-start">
							<div className="col col-lg-3" />
							<div className="col col-lg-3">Platillos</div>
							<div className="col col-lg-3">Precio</div>
							<div className="col col-lg-3">Cantidad</div>
						</div>
					</div>

					<div className="container-fluid">
						<div className="m-2 row justify-content-start">
							<div className="col col-lg-3">
								<img src={salad} className="img-thumbnail" />
							</div>
							<div className="col col-lg-3">
								<h3 className="my-0">Ensalada Cesar</h3>
							</div>
							<div className="col col-lg-3">
								<h3 className="my-0">$20</h3>
							</div>
							<div className="col col-lg-3 text-left">
								<div className="form-group text-left">
									<label htmlFor="exampleFormControlSelect1" />
									<select className="form-control text-left" id="exampleFormControlSelect1">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<button type="button" className="m-4 btn btn-outline-danger btn-sm">
										Eliminar platillo
									</button>
									<div className="container-fluid">
										<h6 className="my-0 text-left">Subtotal: $20</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
