import React, { useContext, Fragment, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";

export const Carrito = () => {
	const { store, actions } = useContext(Context);
	const [processed, setProcessed] = useState(false);

	const MostrarListaProductosEnCarrito = () => {
		return store.carrito.map((item, index) => {
			return GenerarUnItem(item, index);
		});
	};

	const CalcularSubTotalItem = item => {
		return item.cantidad * item.precio;
	};

	const EliminarPlatillo = item => {
		actions.eliminarPlatillo(item.id);
	};

	//david

	const ModificarCantidad = (e, item) => {
		actions.changeQuantity(item, e.target.value);
	};

	//total = (item.precio * item.cantidad) + (item2.precio * item2.cantidad) + (itemN.precio * itemN.cantidad)
	const CalcularTotal = () => {
		let total = 0;
		store.carrito.forEach(item => {
			let Subtotal = item.cantidad * item.precio;
			total = total + Subtotal;
		});
		return total;
	};

	//$("compraFinalModal").modal('hide');

	const CrearFinalAlert = () => {
		return (
			<div id="compraFinalModal" className="modal fade" tabIndex="-1">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Orden confirmada</h5>
							<button type="button" className="close" data-dismiss="modal">
								&times;
							</button>
						</div>
						<div className="modal-body">
							<p>Gracias por visitar Insight Menu</p>
							<p className="text-secondary">
								<small>Recibiras un correo de confirmacion en unos minutos</small>
							</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Cancelar
							</button>
							<button
								onClick={e => {
									setProcessed(true);
								}}
								type="button"
								className="btn btn-primary"
								data-dismiss="modal">
								Regresar al menu principal
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const GenerarUnItem = (item, index) => {
		return (
			<div className="container-fluid" key={index}>
				<div className="m-2 row justify-content-start">
					<div className="col col-lg-3">
						<img src={item.img} className="img-thumbnail" />
					</div>
					<div className="col col-lg-3">
						<h3 className="my-0">{item.nombre}</h3>
					</div>
					<div className="col col-lg-3">
						<h3 className="my-0">
							&#162;
							{item.precio}
						</h3>
					</div>
					<div className="col col-lg-3 text-left">
						<div className="form-group text-left">
							<label htmlFor="exampleFormControlSelect1" />
							<select
								onChange={e => {
									ModificarCantidad(e, item);
								}}
								value={item.cantidad}
								className="form-control text-left"
								id="exampleFormControlSelect1">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
							</select>
							<button
								type="button"
								className="m-4 btn btn-outline-danger btn-sm"
								onClick={e => {
									EliminarPlatillo(item);
								}}>
								Eliminar platillo
							</button>
							<div className="container-fluid">
								<h6 className="my-0 text-left">
									Subtotal: &#162;
									{CalcularSubTotalItem(item)}
								</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<Fragment>
			<div className="container">
				<div className="row">
					<div className="col-md-4 order-md-2 mb-4">
						<h4 className="d-flex justify-content-between align-items-center mb-3">
							<span className="text-muted">Resumen de su pedido</span>
						</h4>
						<ul className="list-group mb-3">
							<li className="list-group-item d-flex justify-content-between lh-condensed" />
							<li className="list-group-item d-flex justify-content-between">
								<span>Total:</span>
								<strong>
									{" "}
									&#162;
									{CalcularTotal()}
								</strong>
							</li>
							<li className="list-group-item d-flex justify-content-between">
								<button
									type="submit"
									className="btn btn-info"
									data-target="#compraFinalModal"
									data-toggle="modal">
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

							{MostrarListaProductosEnCarrito()}
						</div>
					</div>
				</div>
			</div>
			{CrearFinalAlert()}
			{processed ? <Redirect to="/" /> : null}
		</Fragment>
	);
};

//Pendiente crear la funcion del pago
//crear un evento del onclick
//metodo para borrar todo el contenido , action en flux llamar desde ahi , hay que dejarlo vacio.
// preparar un fetch para ese mismo evento onclick

