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

  total = total + productos[id].precio;
  totalItems = totalItems +1;
  carritoItems.push(id)
  console.log(carritoItems)
  refreshCart();
  let shopItem = document.createElement("div");
  shopItem.className = "shopItem";
  shopItem.innerHTML = `<img class="cartImage" src="./assets/img/img${[id]}.JPG">
    <p>${productos[id].nombre} /$ ${productos[id].precio}</p>  
    <button id="trashButton${productos[id].id}" class="delete-btn">
    Borrar</button>`;
  carrito.appendChild(shopItem);
  

  //funcion eliminar

  let deletebutton = document.getElementById(`trashButton${id}`)
  deletebutton.addEventListener("click", () => {
    carrito.removeChild(shopItem);
    let itemId = carritoItems.indexOf(id)
    console.log(itemId)
    totalItems = totalItems - 1 ;
    total = total - productos[id].precio;
    carritoItems.splice(itemId , 1)
    console.log(carritoItems)
    refreshCart();
  });
}

//Funcion que refrezca barra de tareas (carrito)

function refreshCart() {
  cartShower.innerHTML = `$${total}<br>
    ${totalItems} items en el carrito`;
    carritoStorage =  localStorage.getItem("storage");
    localStorage.setItem("storage", JSON.stringify(carritoItems));
    carritoStorage =  localStorage.getItem("storage");
}

//inicializadores

let carritoStorage =  localStorage.getItem("storage");
let total = 0;
let totalItems = 0;
let carritoItems = []

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
  if(carrito.classList == 'display-none'){
  carrito.classList.replace('display-none','cartContainer');
  shopItem.classList.replace('display-none','shopItem');
}
else{
  carrito.classList.replace('cartContainer','display-none');
  shopItem.classList.replace('shopItem','display-none');
}})

//Inicializador de carrito con LocalStorage

window.addEventListener('DOMContentLoaded', ()=>{
  if(localStorage.getItem('carritoStorage')){
    let array = JSON.parse(carritoStorage)
    array.forEach((id) => {
      addCart(id)
    })}
})