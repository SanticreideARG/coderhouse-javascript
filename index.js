
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
                                <p class="cardDescription">${producto.descripcion}</p>
                                <button class="btn" id="button${producto.id}" 
                                onclick="addCart(${producto.id})">Agregar<img src="./assets/cart2.png" class="blackcart"></button>
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
    { id: 0, nombre: "Dkny Women Esp 2U x 30ml", precio: 17136, categoria: "Belleza y Cuidado Personal", descripcion: "Esta fragancia del año 1999 fue la primera de la línea New York de Donna Karan, más conocida por las siglas DKNY y por el ciclo de perfumes en torno a la manzana de Be Delicious."},
    { id: 1, nombre: "Maquina Cortar Pelo Groom Pro 21 Piezas Wahl", precio: 9690, categoria: "Belleza y Cuidado Personal", descripcion: "Máquina de Corte (Con Cable) con cuchillas con sistema de auto-afilado. La forma cónica de control le permite personalizar cada corte. Con 8 peines guía de las siguientes medidas para conseguir el corte deseado: 3mm, 6mm, 10mm, 13mm, 16mm, 19mm, 22mm, 25mm." },
    { id: 2, nombre: "Diesel Spirit of The Brave Eau De Toilette 125 Ml", precio: 17919, categoria: "Belleza y Cuidado Personal", descripcion: "Es una fragancia de la familia olfativa Oriental Amaderada para Hombres. Las Notas de Salida son bergamota y gálbano; las Notas de Corazón son abeto y ciprés; las Notas de Fondo son haba tonka y ládano." },
    { id: 3, nombre: "Phillips One Blade Afeitadora Recortadora", precio: 4996, categoria: "Belleza y Cuidado Personal", descripcion: "La tecnología única de OneBlade afeita cualquier cabello: úselo húmedo o seco" },
    { id: 4, nombre: "Kit Serums Regina Dia & Noche", precio: 3465, categoria: "Belleza y Cuidado Personal", descripcion: "Este kit es básico en tu rutina para mantener la hidratación de todas las capas de la piel y si éstas se encuentran saludables, por consecuencia se refleja ..." },
    { id: 5, nombre: "Tommy Hilfiger Impact Edt 100 Ml", precio: 18144, categoria: "Belleza y Cuidado Personal", descripcion: " Fragancia amaderada fresca con un estallido de frescura de naranja amarga y notas frescas de ciprés. Masculino e inspirador." },
    { id: 6, nombre: "Afeitadora Remingtton Pf7200 Comfort Series", precio: 5391, categoria: "Belleza y Cuidado Personal", descripcion: "Afeitadora de láminas Comfort Series Ideal para pieles sensibles, la afeitadora Comfort Series de Remington proporciona un apurado cómodo. " },
    { id: 7, nombre: "Perfume Tommy Hilfiger Men Now Eddt 100 Ml", precio: 13080, categoria: "Belleza y Cuidado Personal", descripcion: "Tommy nos trae una renovada fragancia de edición limita. No te la podes perder! Sus notas frutales lo hacen ideal para cualquier época del año." },
    { id: 8, nombre: "Mascara de Pestañas Mac Natural Flirt Set", precio: 34650, categoria: "Belleza y Cuidado Personal", descripcion: "El Kit Natural Flirt es ideal para llevar vayas donde vayas y lograr un ... El kit incluye: 1 máscara de pestañas Mac In Extreme Dimension 3D Black Lash 1" },
    { id: 10, nombre: "Auriculares Inalambricos Sony WH CH510", precio: 8999, categoria: "Electronica/Gaming", descripcion: "Escucha tu música durante todo el día sin interrupciones. Los WH-CH510 son inalámbricos, ligeros y su batería dura lo suficiente para seguirte el ritmo." },
    { id: 11, nombre: "Auriculares Inalabricos JBL T230 Tws", precio: 19499, categoria: "Electronica/Gaming", descripcion: "Los auriculares JBL T230 poseen un diseño Stick Close que garantizan una gran comodidad sin presión y un peso súper ligero." },
    { id: 12, nombre: "Parlante JBL Go 2 Deep Sea Blue ", precio: 6896, categoria: "Electronica/Gaming", descripcion: "JBL Go Go 2 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa uniformemente por toda la habitación. Un parlante que asegura que el ritmo no pare" },
    { id: 13, nombre: "Parlante Philco DJP10 Portatil Bluetooth", precio: 13650, categoria: "Electronica/Gaming", descripcion: "Parlante Philco Djp10 Parlante Activo Portátil C/bluetooth Usb Fm - Conexión Inalámbrica Bluetooth Potencia 500 w pmpo" },
    { id: 14, nombre: "Microsoft Xbox Series S 512GB Standard", precio: 124999, categoria: "Electronica/Gaming", descripcion: "Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos." },
    { id: 15, nombre: "Nintendo Switch 32GB Standard", precio: 125537, categoria: "Electronica/Gaming", descripcion: "Switch se convirtió en una de las consolas más versátiles del mercado gracias a su uso portátil. Nintendo desarrolló este modelo con el objetivo de tener todas las comodidades de la tecnología en un aparato portátil" },
    { id: 16, nombre: "Microsoft Xbox Series X 1TB Standard", precio: 199999, categoria: "Electronica/Gaming", descripcion: "Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos" },
    { id: 17, nombre: "Joystick Ps5 Dualsense Cosmic Red", precio: 32760, categoria: "Electronica/Gaming", descripcion: "El mando inalámbrico DualSense ofrece una inmersiva retroalimentación háptica - gatillos adaptativos dinámicos y un micrófono integrado - todo ello en un diseño icónico." },
    { id: 18, nombre: "Sony Playstation 5 825GB Standard", precio: 288599, categoria: "Electronica/Gaming", descripcion: "PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos." },
    { id: 19, nombre: "Nintendo Switch Oled 64gb Standard", precio: 178199, categoria: "Electronica/Gaming", descripcion: "Switch se convirtió en una de las consolas más versátiles del mercado gracias a su uso portátil. Nintendo desarrolló este modelo con el objetivo de tener todas las comodidades de la tecnología en un aparato portátil" },
    { id: 20, nombre: "Perfume Boos Black Intense 90 Ml", precio: 5961, categoria: "Belleza y Cuidado Personal", descripcion: "El eau de parfum Boos Intense x 90 ml, se caracteriza por ser una fragancia oriental amaderada que combina" },
    { id: 21, nombre: "Aspiradora Trapeadora Liectroux C30B", precio: 67449, categoria: "Electrodomesticos", descripcion: "Contar con una aspiradora robot te permitirá ahorrar tiempo y esfuerzo. Es la solución para que la limpieza de tu casa se realice con mayor frecuencia y puedas mantener los ambientes impecables siempre. " },
    { id: 22, nombre: "Heladera Samsung RT38K5932", precio: 214999, categoria: "Electrodomesticos", descripcion: "Disfrutá de tus alimentos frescos y almacenalos de manera práctica y cómoda en la heladera Samsung, la protagonista de la cocina. Comodidad para tu casa." },
    { id: 23, nombre: "Lavarropas Whirpool WNQ06A 6kg", precio: 106599, categoria: "Electrodomesticos", descripcion: "Whirlpool es sinónimo de tecnología de punta, diseño e innovación pensados para simplificar el día a día. Un electrodoméstico para toda la vida." },
    { id: 24, nombre: "Aire Acondicionado Philco 2236 frigorias", precio: 99299, categoria: "Electrodomesticos", descripcion: "El tipo de aire split es de bajo consumo energético, de fácil mantenimiento y sumamente silencioso ya que cuenta con una unidad exterior." },
    { id: 25, nombre: "Cafetera Nescafe Moulinex Dolce Gusto S Plus", precio: 39790, categoria: "Electrodomesticos", descripcion: "Arrancar cada mañana de una forma diferente es posible. Con las cápsulas podés elegir entre una amplia gama de variedades de café y otras bebidas, como chocolate caliente." },
    { id: 26, nombre: "Smart TV Teedge Teled 42FH6 LED", precio: 59999, categoria: "Electronica/Gaming", descripcion: "Con el Smart TV Teled 42FH6 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos." },
    { id: 27, nombre: "Auriculares Inalambricos Marshall Major IV", precio: 39999, categoria: "Electronica/Gaming", descripcion: "Te presentamos Major IV, los auriculares emblemáticos de Marshall que ofrecen más de 80 horas de reproducción inalámbrica, carga inalámbrica y un nuevo y mejorado diseño ergonómico." },
    { id: 29, nombre: "Kit Streaming Microfono celular Tripode Luz", precio: 6879, categoria: "Electronica/Gaming", descripcion: "Diseñado para transmitir en directo o grabar videos de forma rápida, profesional y sencilla. Incluye todos los accesorios necesariospara sus videos. Conexión Plug & Play, no requiere drivers." },
    { id: 30, nombre: "Bicicleta MTB Topmega Armor R29", precio: 48879, categoria: "Deportes", descripcion: "Bicicleta Mountain Bike Armor, rodado 29 con 21 velocidades, suspensión delantera, frenos a disco, cuadro de aluminio, manijas de cambio/freno Shimano Rapid Fire, cubiertas Arisun." },
    { id: 31, nombre: "Cinta de Correr Reebok Jet 200+", precio: 349999, categoria: "Deportes", descripcion: "No busques más, con Reebok mejorá tu salud y tu físico con cintas especialmente diseñadas para cumplir con tus expectativas. Potencia tu Entrenamiento." },
    { id: 32, nombre: "Multigimnasio Randers Multigym ", precio: 226793, categoria: "Deportes", descripcion: "Equipo para ejercitación muscular múltiple MultiGym RANDERS. Estructura de caño perfil cuadrado de hierro galvanizado, Sistema de pesas para carga de hasta 50Kg." },
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
