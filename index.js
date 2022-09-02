// let articleNames = ["Pc Gamer", "PS5", "Xbox One", "Silla Pc"]
// let articlePrices = 
// let articleUsers = 

let art1 = ["Pc Gamer", 120000, "Marcos", 1];
let art2 = ["PS5", 210000, "Pablo", 1];
let art3 = ["Xbox One", 95000, "Jose", 1];
let art4 = ["Silla Pc", 24000, "Lorena", 1];
let art5 = ["Home Theatre Muteki", 50000, "Miguel", 1]
let art6 = ["Guitarra Les Paul", 24000, "Andy", 1]
let art7 = ["Bicicleta Dartmoor", 250000, "Jonas", 1]
let art8 = ["TV 42 TCL", 100000, "Joana", 1]

function crearArticulos(){
    document.getElementById("card1title").innerHTML = `${art1[0]}`;
    document.getElementById("card1price").innerHTML = `${art1[1]}`;
    document.getElementById("card1user").innerHTML = `${art1[2]}`;
    document.getElementById("card2title").innerHTML = `${art2[0]}`;
    document.getElementById("card2price").innerHTML = `${art2[1]}`;
    document.getElementById("card2user").innerHTML = `${art2[2]}`;
    document.getElementById("card3title").innerHTML = `${art3[0]}`;
    document.getElementById("card3price").innerHTML = `${art3[1]}`;
    document.getElementById("card3user").innerHTML = `${art3[2]}`;
    document.getElementById("card4title").innerHTML = `${art4[0]}`;
    document.getElementById("card4price").innerHTML = `${art4[1]}`;
    document.getElementById("card4user").innerHTML = `${art4[2]}`;
}

crearArticulos()




function addItem(){
    let art1 = nuevoArticulo();
}
function nuevoArticulo(){
    let nombre = prompt(`Ingrese nombre de nuevo articulo`)
    let precio = parseInt(prompt(`Ingrese Precio`))
    let user =  prompt(`Ingrese su nombre`)
    let state = 1
    let art9 = [nombre, precio, user, state];
    alert(`articulo creado`);
    alert(`nombre: ${art9[0]}
    Precio: ${art9[1]} vendedor: ${art9[2]}`);
    document.getElementById("card1title").innerHTML = `${art9[0]}`;
    document.getElementById("card1price").innerHTML = `${art9[1]}`;
    document.getElementById("card1user").innerHTML = `${art9[2]}`;

}





//class Articulo{
//     constructor(user, number, categoria, condicion, productName, price, description){
//         this.user = user;
//         this.number = number;
//         this.categoria = categoria;
//         this.condicion = condicion;
//         this.productName = productName;
//         this.price = price;
//         this.description = description;
//     }
//         //articleShow
//     }
//    let articulo1 = new Articulo("Jose", 299445533, 2, 2, "Motorola g20", 21000, "Usado, excelente estado.")
//    let articulo2 = new Articulo("Marcos", 299455231, 1, 2, "Fiat Punto", 6000000, "Usado, Unico dueño digno dever.")
//    let articulo3 = new Articulo("Patricia", 297245599, 4, 1, "Taladro Percutor Dewalt", 32000, "Vendo Taladro Portatil Dewalt Nuevo")

// function ingresarArticulo1(){
//     let user = document.getElementById(user).value;
//     let number = document.getElementById(number).value;
//     let categoria = document.getElementById(categoria).value;
//     let condicion = document.getElementById(condicion).value;
//     let productName = document.getElementById(productName).value;
//     let price = document.getElementById(price).value;
//     let description = document.getElementById(description).value;
//     let articulo0 = new Articulo(user, number, categoria, condicion, productName, price, description)
//     console.log(articulo4)
//     document.getElementById("newcard").innerHTML = articulo4
// }
// function ingresarArticulo(){
//     let user = "jorge";
//     let number = 291149;
//     let categoria = 3;
//     let condicion = 2;
//     let productName = "panda";
//     let price = 400;
//     let description = "breve description";
//     let articulo4 = new Articulo(user, number, categoria, condicion, productName, price, description)
//     console.log(articulo4)
//     document.getElementById("newcard").innerHTML = articulo4
// }

// let nombres = ["Jorge", "Carlos", "Marcelo", "Claudia"]
// let titulos = ["Motorola g20","TV 40 TCL", "Honda XR", "Sony PS5"]
// let precios = [42000, 52000, 419000, 210000]

// let nombre = "jose";
// let  titulo = "pava";
// let  precio = 24505;
// //   let nombre = document.getElementById(user);
// //   let  titulo = document.getElementById(producto);
// //   let  precio = document.getElementById(precio);
//   nombres = (nombres.push(nombre));
//   titulos = (titulos.push(titulo));
//   precios = (precios.push(precio));

//   console.log(nombres)

// function callnombre(){
// let nombre = nombres.pop();
// console.log(nombre);}

// function calltitulo(){
//     let titulo = titulos.pop();
//     console.log(titulo);}

//  function callprecio(){
//     let precio = precios.pop();
//     console.log(precio);}

// callnombre();
// calltitulo();
// callprecio();

