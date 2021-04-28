import React, { useContext } from "react";
import { Context } from "../store/appContext";
import salad from "../../img/salad.jpg";


export const Carrito = () => {
	return (
        
<div class="row">
    <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Resumen de su pedido</span>
        </h4>
        <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">Subtotal</h6>
                </div>
                <span class="text-muted">$20</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">Impuesto de ventas incluido</h6>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <button type="submit" class="btn btn-secondary">Completar su orden</button>
            </li>
        </ul>

    </div>
    <div class="col-md-8 order-md-1">
        <h1 class="mb-3">Su pedido</h1>
        <div class="container-fluid">
            <div class="container-fluid">
                <div class="m-2 pb-2 row justify-content-start">
                    <div class="col col-lg-3">
                    </div>
                    <div class="col col-lg-3">
                        Platillos
                    </div>
                    <div class="col col-lg-3">
                        Precio
                    </div>
                    <div class="col col-lg-3">
                        Cantidad
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="m-2 row justify-content-start">
                     <div class="col col-lg-3">
                           <img src={salad} class="img-thumbnail">
                    </div>
                    <div class="col col-lg-3">
                        <h3 class="my-0">Ensalada Cesar</h3>
                    </div>
                    <div class="col col-lg-3">
                        <h3 class="my-0">$20</h3>
                    </div>
                    <div class="col col-lg-3">
                        <div class="form-group">
                            <label for="exampleFormControlSelect1"></label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <button type="button" class="m-4 btn btn-outline-danger btn-sm">Eliminar platillo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
	);
};