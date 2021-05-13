const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			API_URL: "https://3001-peach-swordfish-vwob60h6.ws-us04.gitpod.io/api",
			CONTENT_TYPE: "application/json",
			POST: "POST",
			GET: "GET",
			PUT: "PUT",
			DELETE: "DELETE",
			message: null,
			carrito: [
				// (total= suma de todos los subtotales)
				// total = subtotal item 1 + subtotal item 2
				// total = (item.precio * item.cantidad) + (item2.precio * item2.cantidad) + (itemN.precio * itemN.cantidad)
			],
			platillo: [
				{
					nombre: "Pinto",
					ingredientes: "arroz, frijoles, Salsa Lizano",
					precio: 1500,
					img: "https://assets.cdnelnuevodiario.com/cache/0f/3a/0f3a2be6a2ffaf920f54c21756b4d75e.jpg"
				},
				{
					nombre: "Ensalada de Papa",
					ingredientes: "papa, huevo duro, jamón",
					precio: 2300,
					img: "https://t1.rg.ltmcdn.com/es/images/8/0/2/ensalada_de_papa_y_huevo_cocido_35208_600_square.jpg"
				}
			],
			tags: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			changeQuantity: (platillo, cantidad) => {
				const newCarrito = getStore().carrito.map(item => {
					if (platillo.id == item.id) {
						item.cantidad = cantidad;
					}
					return item;
				});
				setStore({ carrito: newCarrito });
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadTags: () => {
				fetch(getStore().API_URL + "/tag", {
					method: getStore().GET,
					headers: {}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ tags: data });
					})
					.catch(err => {
						console.error(err);
					});
			},
			eliminarPlatillo: id => {
				const nuevoCarrito = getStore().carrito.filter((item, index) => {
					return item.id != id;
				});

				setStore({ carrito: nuevoCarrito });
			},
			agregarPlatillo: platillo => {
				setStore({ carrito: getStore().carrito.concat(platillo) });
			}
		}
	};
};

export default getState;
