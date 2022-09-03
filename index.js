let articleNames = ["Pc Gamer", "PS5", "Xbox One", "Silla Pc", "Home Theatre Muteki", "Guitarra Les Paul", "Bicicleta Dartmoor", "TV 42 TCL"]
let articlePrices = [120000,  210000, 95000, 24000, 49999, 24000, 250000, 100000]
let articleUsers = ["Marcos", "Pablo", "Jose", "Lorena", "Miguel", "Andy", "Patricia", "Julian"]

function crearArticulos(){
    //Crear articulos se encarga de imprimir los Arrays actuales sobre cada Card en el Documento,
    // o actualizarlas segun sea necesario.
    document.getElementById("card1title").innerHTML = `${articleNames[0]}`;
    document.getElementById("card1price").innerHTML = `${articlePrices[0]}`;
    document.getElementById("card1user").innerHTML = `${articleUsers[0]}`;
    document.getElementById("card2title").innerHTML = `${articleNames[1]}`;
    document.getElementById("card2price").innerHTML = `${articlePrices[1]}`;
    document.getElementById("card2user").innerHTML = `${articleUsers[1]}`;
    document.getElementById("card3title").innerHTML = `${articleNames[2]}`;
    document.getElementById("card3price").innerHTML = `${articlePrices[2]}`;
    document.getElementById("card3user").innerHTML = `${articleUsers[2]}`;
    document.getElementById("card4title").innerHTML = `${articleNames[3]}`;
    document.getElementById("card4price").innerHTML = `${articlePrices[3]}`;
    document.getElementById("card4user").innerHTML = `${articleUsers[3]}`;
    document.getElementById("card5title").innerHTML = `${articleNames[4]}`;
    document.getElementById("card5price").innerHTML = `${articlePrices[4]}`;
    document.getElementById("card5user").innerHTML = `${articleUsers[4]}`;
    document.getElementById("card6title").innerHTML = `${articleNames[5]}`;
    document.getElementById("card6price").innerHTML = `${articlePrices[5]}`;
    document.getElementById("card6user").innerHTML = `${articleUsers[5]}`;
    document.getElementById("card7title").innerHTML = `${articleNames[6]}`;
    document.getElementById("card7price").innerHTML = `${articlePrices[6]}`;
    document.getElementById("card7user").innerHTML = `${articleUsers[6]}`;
    document.getElementById("card8title").innerHTML = `${articleNames[7]}`;
    document.getElementById("card8price").innerHTML = `${articlePrices[7]}`;
    document.getElementById("card8user").innerHTML = `${articleUsers[7]}`;
}

crearArticulos()


function addItem(){
    let art1 = nuevoArticulo();
}
function nuevoArticulo(){
    let nombre = prompt(`Ingrese nombre de nuevo articulo`);
    articleNames.shift();
    articleNames.push(nombre);
    let precio = parseInt(prompt(`Ingrese Precio`));
    articlePrices.push(precio);
    articlePrices.shift();
    let user =  prompt(`Ingrese su nombre`);
    articleUsers.push(user);
    articleUsers.shift();

    console.log(articleNames);
    console.log(articlePrices);
    console.log(articleUsers);

    crearArticulos()


}

