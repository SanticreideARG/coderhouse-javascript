//Renderizador de Tarjetas
const articleGenerator = (productos) => {
  const contenedor = document.getElementById("cardContainer");
  productos.forEach((producto) => {
   
    const div = document.createElement("div");

    div.className = "cards";
    div.innerHTML = `<h4 class="cardtitle">${producto.nombre}</h4>
                        <img src="./assets/img/img${producto.id}.jpg" class="card-img">
                                <p class="cardprice">$ ${producto.precio}</p>
                                <p class="cardCategory">Categoria:<br> ${producto.categoria}</p>
                                <p class="cardDescription">${producto.descripcion}</p>
                                <button class="btn" id="button${producto.id}" 
                                ">Agregar
                                <img src="./assets/cart2.png" class="blackcart">
                                </button>`;
    contenedor.appendChild(div);

    const boton = document.getElementById(`button${producto.id}`);
    boton.addEventListener("click", () => {
      addCart(producto.id);
    });
  });
};

//Funcion de Compras 

function addCart(id) {
  const itemRender = ()=>{
    let producto = productos.find( producto => producto.id == id)
    carritoItems.push(producto)
    producto.cantidad = 1
    }
  itemRender()
  total = total + productos[id].precio;
  totalItems = totalItems +1;
  carritoItemsStorage.push(id)
  refreshCart();
  let shopItem = document.createElement("div");
  shopItem.className = "shopItem";
  shopItem.innerHTML = `<img class="cartImage" src="./assets/img/img${[id]}.JPG">
    <p>${productos[id].nombre}<br> <bold>$  ${productos[id].precio}</bold></p>  
    <button id="trashButton${productos[id].id}" class="delete-btn">
    Borrar Item<span class="material-icons">
    delete
    </span></button>`;
  carrito.appendChild(shopItem);
  Swal.fire({
    icon: 'sucess',
    title: `Agregado ${productos[id].nombre} al carrito`,
    imageUrl: `./assets/img/img${[id]}.JPG`,
    imageWidth: 200,
    imageHeight: 200,
    footer: 'Sigue buscando las mejores ofertas!'
  });
  Toastify({
    text: `Agregado ${productos[id].nombre} al carrito`,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #48ff00, #d0ff00)",
    },
    onClick: function(){} 
  }).showToast();


  //funcion eliminar

  let deletebutton = document.getElementById(`trashButton${id}`)
  deletebutton.addEventListener("click", () => {
    carrito.removeChild(shopItem);
    let itemId = carritoItems.indexOf(id)
    totalItems = totalItems - 1 ;
    total = total - productos[id].precio;
    carritoItems.splice(itemId , 1)
    carritoItemsStorage.splice(itemId , 1)
    refreshCart();
  });
}

//Funcion que refrezca barra de tareas (carrito)

function refreshCart() {
  cartShower.innerHTML = `$${total}<br>
    ${totalItems} items en el carrito`;
    carritoStorage =  localStorage.getItem("storage");
    localStorage.setItem("storage", JSON.stringify(carritoItemsStorage));
    carritoStorage =  localStorage.getItem("storage");
}

//inicializadores
Swal.fire('Bienvenido a Lime Shop. Recuerda que este es un sitio hecho con fines educativos y que los precios y productos que veas no corresponden con articulos reales a la venta');
let carritoStorage =  localStorage.getItem("storage");
let total = 0;
let totalItems = 0;
let carritoItems = []
let carritoItemsStorage = []

let cart = document.getElementById("cart");
let cartShower = document.createElement("div");
cartShower.className = "cartShower";
//Total y Cantidad de items
cartShower.innerHTML = `$${total}<br>
                         ${totalItems} items en el carrito`;
cart.append(cartShower);

articleGenerator(productos);

//carrito de compras
const carrito = document.getElementById("cartContainer");
const cartIcon = document.getElementById("cartIcon");
cartIcon.addEventListener("click", () => {
  carrito.classList == 'display-none' ? 
   carrito.classList.replace('display-none','cartContainer') :
   carrito.classList.replace('cartContainer','display-none') 
})
//Inicializador de carrito con LocalStorage

window.addEventListener('DOMContentLoaded', ()=>{
  if(localStorage.getItem('storage')){
    let array = JSON.parse(storage)

    array.forEach((id) => {
      addCart(id);
    })}
})