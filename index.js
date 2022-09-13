
function refreshCart(){
    cartShower.innerHTML = `$${total}<br>
    ${totalItems} items en el carrito`
}


function articleGenerator(){
    for (const producto of productos) {
        let div = document.createElement("div");
        div.className = "cards";
        div.innerHTML = `<h4 class="cardtitle">${producto.nombre}</h4>
                        <img src="./assets/img/img${producto.id}.jpg" class="card-img">
                                <p class="cardprice">$ ${producto.precio}</p>
                                <p class="cardCategory">Categoria: ${producto.categoria}</p>
                                <button class="btn" id="button${producto.id}" 
                                onclick="addCart(${producto.id})">Agregar al Carrito</button>
                                `;
        contenedor.append(div);}

}

function addCart(id){
    alert(`Agregado ${productos[id].nombre} al carrito de compras`)
    total = total + productos[id].precio
    totalItems = totalItems+1
    alert(`total ${total}`)
    alert(`total de items en carrito ${totalItems}`)
    refreshCart();
}

//lista de productos
const productos = [
    { id: 0, nombre: "Dkny Women Esp 2U x 30ml", precio: 17136, categoria: "Belleza y Cuidado Personal"},
    { id: 1, nombre: "Maquina Cortar Pelo Groom Pro 21 Piezas Wahl", precio: 9690, categoria: "Belleza y Cuidado Personal", descripcion: "Máquina de Corte (Con Cable) con cuchillas con sistema de auto-afilado. La forma cónica de control le permite personalizar cada corte. Con 8 peines guía de las siguientes medidas para conseguir el corte deseado: 3mm, 6mm, 10mm, 13mm, 16mm, 19mm, 22mm, 25mm." },
    { id: 2, nombre: "Diesel Spirit of The Brave Eau De Toilette 125 Ml", precio: 17919, categoria: "Belleza y Cuidado Personal", descripcion: "Es una fragancia de la familia olfativa Oriental Amaderada para Hombres. Las Notas de Salida son bergamota y gálbano; las Notas de Corazón son abeto y ciprés; las Notas de Fondo son haba tonka y ládano." },
    { id: 3, nombre: "Phillips One Blade Afeitadora Recortadora", precio: 4996, categoria: "Belleza y Cuidado Personal", descripcion: "Vendo Silla PC noganet excelente estado llevo a domicilio" },
    { id: 4, nombre: "Kit Serums Regina Dia & Noche", precio: 3465, categoria: "Belleza y Cuidado Personal", descripcion: "Home theatre muteki incluye su control remoto" },
    { id: 5, nombre: "Tommy Hilfiger Impact Edt 100 Ml", precio: 18144, categoria: "Belleza y Cuidado Personal", descripcion: "guitarra segunda mano tambien vendo amplificador consultar" },
    { id: 6, nombre: "Afeitadora Remingtton Pf7200 Comfort Series", precio: 5391, categoria: "Belleza y Cuidado Personal", descripcion: "bicicleta mtb 10v horquilla fox excelente estado" },
    { id: 7, nombre: "Perfume Tommy Hilfiger Men Now Eddt 100 Ml", precio: 13080, categoria: "Belleza y Cuidado Personal", descripcion: "Tv 42 pulgadas exelente estado igual a nuevo escucho ofertas." },
    { id: 8, nombre: "Mascara de Pestañas Mac Natural Flirt Set", precio: 34650, categoria: "Belleza y Cuidado Personal", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 9, nombre: `Smart TV Philips 55" PUD7906/77 LED 4K`, precio: 161979, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 10, nombre: "Auriculares Inalambricos Sony WH CH510", precio: 8999, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 11, nombre: "Auriculares Inalabricos JBL T230 Tws", precio: 19499, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 12, nombre: "Parlante JBL Go 2 Deep Sea Blue ", precio: 6896, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 13, nombre: "Parlante Philco DJP10 Portatil Bluetooth", precio: 13650, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 14, nombre: "Microsoft Xbox Series S 512GB Standard", precio: 124999, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 15, nombre: "Nintendo Switch 32GB Standard", precio: 125537, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 16, nombre: "Microsoft Xbox Series X 1TB Standard", precio: 199999, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 17, nombre: "Joystick Ps5 Dualsense Cosmic Red", precio: 32760, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 18, nombre: "Sony Playstation 5 825GB Standard", precio: 288599, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 19, nombre: "Nintendo Switch Oled 64gb Standard", precio: 178199, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 20, nombre: "Perfume Boos Black Intense 90 Ml", precio: 5961, categoria: "Belleza y Cuidado Personal", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 21, nombre: "Aspiradora Trapeadora Liectroux C30B", precio: 67449, categoria: "Electrodomesticos", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 22, nombre: "Heladera Samsung RT38K5932", precio: 214999, categoria: "Electrodomesticos", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 23, nombre: "Lavarropas Whirpool WNQ06A 6kg", precio: 106599, categoria: "Electrodomesticos", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 24, nombre: "Aire Acondicionado Philco 2236 frigorias", precio: 99299, categoria: "Electrodomesticos", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 25, nombre: "Cafetera Nescafe Moulinex Dolce Gusto S Plus", precio: 39790, categoria: "Electrodomesticos", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 26, nombre: "Smart TV Teedge Teled 42FH6 LED", precio: 59999, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 27, nombre: "Auriculares Inalambricos Marshall Major IV", precio: 39999, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 28, nombre: `Smart TV Philips 6800 Series 43"`, precio: 69794, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 29, nombre: "Kit Streaming Microfono celular Tripode Luz", precio: 6879, categoria: "Electronica/Gaming", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 30, nombre: "Bicicleta MTB Topmega Armor R29", precio: 48879, categoria: "Deportes", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 31, nombre: "Cinta de Correr Reebok Jet 200+", precio: 349999, categoria: "Deportes", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 32, nombre: "Multigimnasio Randers Multigym ", precio: 226793, categoria: "Deportes", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 33, nombre: "Cinta de correr electrica World Fitness Dh695", precio: 449999, categoria: "Deportes", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 34, nombre: "Bicicleta Venzo Loki Evo R29", precio: 116300, categoria: "Deportes", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 35, nombre: "Barra Body Pump + 2 Mancuernas + 24 kg Kit Set", precio: 17602, categoria: "Deportes", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
];

let contenedor = document.getElementById("cardContainer")
let total = 0
let totalItems = 0
let cart = document.getElementById('cart')
let cartShower = document.createElement("div");
cartShower.className = "cartShower";
cartShower.innerHTML = `$${total}<br>
                         ${totalItems} items en el carrito`
cart.append(cartShower)
articleGenerator();
