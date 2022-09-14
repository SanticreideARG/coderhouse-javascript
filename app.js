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
    let carrito = []
    alert(`Agregado ${productos[id].nombre} al carrito de compras`)
    total = total + productos[id].precio
    totalItems = totalItems+1
    alert(`total ${total}`)
    alert(`total de items en carrito ${totalItems}`)
    refreshCart();
    carrito.push([id])
    console.log(carrito)
}

function refreshCart(){
    cartShower.innerHTML = `$${total}<br>
    ${totalItems} items en el carrito`
}
const carritoDeCompras = []

const carritoIndex = (productoId)=>{
    const  contenedorCarrito = document.getElementById("carrito-contenedor")
    const renderProductosCarrito = ()=> {
        let producto = productos.find( producto => producto.id == productoId )
        carritoDeCompras.push(producto)
        producto.cantidad = 1
        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p>Cantidad: ${producto.cantidad}</p> 
                        <button id="eliminar${producto.id}" class="boton-eliminar"><i class="fa-solid fa-trash-can"></i></button>`
    }
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
let cartIcon = document.getElementById(`cartIcon`)
