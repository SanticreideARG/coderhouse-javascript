const articleGenerator = (productos) =>{
    const contenedor = document.getElementById("cardContainer")

    productos.forEach(producto =>{
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

        const boton = document.getElementById(`button${producto.id}`)
        boton.addEventListener('click', ()=> {
            addCart(producto.id)
        })
    })
}

function addCart(id){
    alert(`Agregado ${productos[id].nombre} al carrito de compras`)
    total = total + productos[id].precio
    totalItems = totalItems+1
    refreshCart();
    alert(`total ${total}`)
    const div = document.createElement("div");
    div.className = "shopItem";
    div.innerHTML = `<p>${ productos[id].nombre} /$ ${ productos[id].precio}</p>  <button id="delete${productos[id].id}" class="delete-btn">X</button>`    
    carrito.appendChild(div);

}

function refreshCart(){
    cartShower.innerHTML = `$${total}<br>
    ${totalItems} items en el carrito`
}



let total = 0
let totalItems = 0
let cart = document.getElementById('cart')
let cartShower = document.createElement("div");
cartShower.className = "cartShower";
cartShower.innerHTML = `$${total}<br>
                         ${totalItems} items en el carrito`
cart.append(cartShower)
articleGenerator(productos);
const carrito = document.getElementById("carrito-contenedor")
