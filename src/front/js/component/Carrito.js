import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Carrito = () => {
	const { store, actions } = useContext(Context);

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

	const CalcularSubTotalOrdenFinal = () => {
		return store.carrito.map((item, index) => {
			return item, index;
		});
	};

	const CalcularIva = () => {
		//	return item.precio * 0.13;
		return 20;
	};

	const CalcularTotalItem = () => {
		// return item.cantidad * item.precio + item.Iva;
		return 20;
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
						<h3 className="my-0">{item.precio}</h3>
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
								<h6 className="my-0 text-left">Subtotal: {CalcularSubTotalItem(item)}</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="container">
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
							<span className="text-muted">{CalcularSubTotalOrdenFinal()}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between lh-condensed">
							<div>
								<h6 className="my-0">IVA {CalcularIva()}</h6>
							</div>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Total (USD)</span>
							<strong>{CalcularTotalItem()}</strong>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<button type="submit" className="btn btn-info">
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
	);
};
