let contenedor = document.getElementById("cardContainer")

function addItem(){
    if (document.getElementById('title').value != 0 && document.getElementById('price').value != 0  ){
    let art1 = newArticle();}
    //addItem verifica que el titulo y el precio esten detallados para evitar ingresar arrays vacios.
}
function newArticle(){
    let nombre = document.getElementById('title').value;
    let precio =  document.getElementById('price').value;
    let user =   document.getElementById('name').value;
    let description =   document.getElementById('info').value;

    articleGenerator()

}

function articleGenerator(){
    for (const producto of productos) {
        let div = document.createElement("div");
        div.className = "cards";
        div.innerHTML = `<h4 class="cardtitle">${producto.nombre}</h4>
                        <img src="./assets/img/img${producto.id}.jpg" class="card-img">
                                <p class="cardprice">$ ${producto.precio}</p>
                                <p>Categoria: ${producto.categoria}</p>
                                <button class="btn" id="button${producto.id}" onclick="addChart(${producto.id})">Agregar al Carrito</button>
                                `;
        contenedor.append(div);}
}


//lista de productos
const productos = [
    { id: 1, nombre: "Dkny Women Esp 2U x 30ml", precio: 17136, categoria: "Belleza y Cuidado Personal"},
    { id: 2, nombre: "Groom Pro 21 Piezas Wahl", precio: 9690, categoria: "Belleza y Cuidado Personal", descripcion: "Máquina de Corte (Con Cable) con cuchillas con sistema de auto-afilado. La forma cónica de control le permite personalizar cada corte. Con 8 peines guía de las siguientes medidas para conseguir el corte deseado: 3mm, 6mm, 10mm, 13mm, 16mm, 19mm, 22mm, 25mm." },
    { id: 3, nombre: "Diesel Spirit of The Brave", precio: 17919, categoria: "Belleza y Cuidado Personal", descripcion: "Es una fragancia de la familia olfativa Oriental Amaderada para Hombres. Las Notas de Salida son bergamota y gálbano; las Notas de Corazón son abeto y ciprés; las Notas de Fondo son haba tonka y ládano." },
    { id: 4, nombre: "Phillips One Blade Afeitadora Recortadora", precio: 4996, categoria: "Belleza y Cuidado Personal", descripcion: "Vendo Silla PC noganet excelente estado llevo a domicilio" },
    { id: 5, nombre: "Kit Serums Regina Dia & Noche", precio: 3465, categoria: "Belleza y Cuidado Personal", descripcion: "Home theatre muteki incluye su control remoto" },
    { id: 6, nombre: "Tommy Hilfiger Impact Edt 100 Ml", precio: 18144, categoria: "Belleza y Cuidado Personal", descripcion: "guitarra segunda mano tambien vendo amplificador consultar" },
    { id: 7, nombre: "Afeitadora Remingtton Pf7200 Comfort Series", precio: 5391, categoria: "Belleza y Cuidado Personal", descripcion: "bicicleta mtb 10v horquilla fox excelente estado" },
    { id: 8, nombre: "Perfume Tommy Hilfiger Men Now Eddt 100 Ml", precio: 13080, categoria: "Belleza y Cuidado Personal", descripcion: "Tv 42 pulgadas exelente estado igual a nuevo escucho ofertas." },
    { id: 9, nombre: "Mascara de Pestañas Mac Natural Flirt Set", precio: 34650, categoria: "Belleza y Cuidado Personal", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 10, nombre: `Smart TV Philips 55"`, precio: 161979, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 11, nombre: "Auriculares Inalambricos Sony WH CH510", precio: 8999, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 12, nombre: "Auriculares JBL T230 Tws", precio: 19499, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 13, nombre: "Parlante JBL Go 2 ", precio: 6896, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 14, nombre: "Parlante Philco DJP10", precio: 13650, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 15, nombre: "Microsoft Xbox Series S 512GB Standard", precio: 124999, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 16, nombre: "Nintendo Switch 32GB Standard", precio: 125537, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 17, nombre: "Microsoft Xbox Series X 1TB Standard", precio: 199999, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 18, nombre: "Joystick Ps5 Dualsense Cosmic Red", precio: 32760, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 19, nombre: "Sony Playstation 5 825GB Standard", precio: 288599, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 20, nombre: "Nintendo Switch Oled 64gb Standard", precio: 178199, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 21, nombre: "Perfume Boos Black 90 Ml", precio: 5961, categoria: "Belleza y Cuidado Personal", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 22, nombre: "Aspiradora Trapeadora Liectroux C30B", precio: 67449, categoria: "Electrodomesticos", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 23, nombre: "Heladera Samsung RT38K5932", precio: 214999, categoria: "Electrodomesticos", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 24, nombre: "Lavarropas Whirpool WNQ06A 6kg", precio: 106599, categoria: "Electrodomesticos", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 25, nombre: "Aire Acondicionado Philco 2236 frigorias", precio: 99299, categoria: "Electrodomesticos", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 26, nombre: "Cafetera Nescafe Moulinex Dolce Gusto S Plus", precio: 39790, categoria: "Electrodomesticos", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 27, nombre: "Smart TV Teedge Teled 42FH6 LED", precio: 59999, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 28, nombre: "Auriculares Inalambricos Marshall Major IV", precio: 39999, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 29, nombre: `Smart TV Philips 6800 43"`, precio: 69794, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 30, nombre: "Kit Streaming Microfono celular Tripode Luz", precio: 6879, categoria: "Electronica", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 31, nombre: "Bicicleta MTB Topmega Armor R29", precio: 48879, categoria: "Deportes", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 32, nombre: "Cinta de Correr Reebok Jet 200+", precio: 349999, categoria: "Deportes", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 33, nombre: "Multigimnasio Randers Multigym ", precio: 226793, categoria: "Deportes", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 34, nombre: "Cinta de correr electrica World Fitness Dh695", precio: 449999, categoria: "Deportes", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 35, nombre: "Bicicleta Venzo Loki Evo R29", precio: 116300, categoria: "Deportes", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },
    { id: 36, nombre: "Barra Body Pump + 2 Mancuernas + 24 kg Kit Set", precio: 17602, categoria: "Deportes", descripcion: "Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti" },

];


articleGenerator()

//articleGenerator se inicializa con los articulos, y se actualiza nuevamente con los valores que ingresa addItem
// 
//articleGenerator se encarga de imprimir los Arrays actuales sobre cada Card en el Documento,
// o actualizarlas segun sea necesario.

//aqui detallo la version antigua de article generator que interactuaba con el htlm, la nueva crea los divs automaticamente

// function articleGenerator(){
//     document.getElementById("card1title").innerHTML = `${articleNames[0]}`;
//     document.getElementById("card1price").innerHTML = `$${articlePrices[0]}`;
//     document.getElementById("card1user").innerHTML = `${articleUsers[0]}`;
//     document.getElementById("card1description").innerHTML = `${articleDescription[0]}`;
//     document.getElementById("card2title").innerHTML = `${articleNames[1]}`;
//     document.getElementById("card2price").innerHTML = `$${articlePrices[1]}`;
//     document.getElementById("card2user").innerHTML = `${articleUsers[1]}`;
//     document.getElementById("card2description").innerHTML = `${articleDescription[1]}`;
//     document.getElementById("card3title").innerHTML = `${articleNames[2]}`;
//     document.getElementById("card3price").innerHTML = `$${articlePrices[2]}`;
//     document.getElementById("card3user").innerHTML = `${articleUsers[2]}`;
//     document.getElementById("card3description").innerHTML = `${articleDescription[2]}`;
//     document.getElementById("card4title").innerHTML = `${articleNames[3]}`;
//     document.getElementById("card4price").innerHTML = `$${articlePrices[3]}`;
//     document.getElementById("card4user").innerHTML = `${articleUsers[3]}`;
//     document.getElementById("card4description").innerHTML = `${articleDescription[3]}`;
//     document.getElementById("card5title").innerHTML = `${articleNames[4]}`;
//     document.getElementById("card5price").innerHTML = `$${articlePrices[4]}`;
//     document.getElementById("card5user").innerHTML = `${articleUsers[4]}`;
//     document.getElementById("card5description").innerHTML = `${articleDescription[4]}`;
//     document.getElementById("card6title").innerHTML = `${articleNames[5]}`;
//     document.getElementById("card6price").innerHTML = `$${articlePrices[5]}`;
//     document.getElementById("card6user").innerHTML = `${articleUsers[5]}`;
//     document.getElementById("card6description").innerHTML = `${articleDescription[5]}`;
//     document.getElementById("card7title").innerHTML = `${articleNames[6]}`;
//     document.getElementById("card7price").innerHTML = `$${articlePrices[6]}`;
//     document.getElementById("card7user").innerHTML = `${articleUsers[6]}`;
//     document.getElementById("card7description").innerHTML = `${articleDescription[6]}`;
//     document.getElementById("card8title").innerHTML = `${articleNames[7]}`;
//     document.getElementById("card8price").innerHTML = `$${articlePrices[7]}`;
//     document.getElementById("card8user").innerHTML = `${articleUsers[7]}`;
//     document.getElementById("card8description").innerHTML = `${articleDescription[7]}`;
// }


    //Esta es la version vieja de new article
    //function newArticle(){
    // let nombre = document.getElementById('title').value;
    // articleNames.shift();
    // let precio =  document.getElementById('price').value;
    // articlePrices.push(precio);
    // articlePrices.shift();
    // let user =   document.getElementById('name').value;
    // articleUsers.push(user);
    // articleUsers.shift();
    // let description =   document.getElementById('info').value;
    // articleDescription.push(description);
    // articleDescription.shift();
    // console.log(articleNames);
    // console.log(articlePrices);
    // console.log(articleUsers);
    // console.log(articleDescription);
    // //articleGenerator actualiza la lista de articulos luego de ingresar los nuevos valores a los arrays
    //articleGenerator()  }
