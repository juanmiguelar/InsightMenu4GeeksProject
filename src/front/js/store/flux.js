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
				{
					id: 1,
					nombre: "Pinto",
					precio: 1500,
					img: "https://i.ibb.co/tMMR78y/image.png",
					cantidad: 2
				},
				{
					id: 2,
					nombre: "Ensalada Cheems",
					precio: 2300,
					img: "https://i.ibb.co/tMMR78y/image.png",
					cantidad: 3
				}
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
			detalleplatillo: [
				{
					orden: 1,
					nombre: "queso",
					descripcion: "descripcion",
					preparacion: "preparacion",
					gramos: "gramos",
					calorias: "calorias",
					azucar: "azucar"
				},
				{
					orden: 2,
					nombre: "queso",
					descripcion: "descripcion",
					preparacion: "preparacion",
					gramos: "gramos",
					calorias: "calorias",
					azucar: "azucar"
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
			}
		}
	};
};

export default getState;
