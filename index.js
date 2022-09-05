let articleNames = ["Pc Gamer", "PS5", "Xbox One", "Silla Pc", "Home Theatre Muteki", "Guitarra Les Paul", "Bicicleta Dartmoor", "TV 42 TCL"]
let articlePrices = [120000,  210000, 95000, 24000, 49999, 24000, 250000, 100000]
let articleUsers = ["Marcos", "Pablo", "Jose", "Lorena", "Miguel", "Andy", "Patricia", "Julian"]
let articleDescription = ["Vendo PC AMD Ryzen 5 8gb Ram GeForce RTX 2080Ti", "Vendo Sony PS5 con 4 juegos y dos Joysticks", "Vendo Xbox One solo un mando", "Vendo Silla PC noganet excelente estado llevo a domicilio", "Home theatre muteki incluye su control remoto", "guitarra segunda mano tambien vendo amplificador consultar", "bicicleta mtb 10v horquilla fox excelente estado", "Tv 42 pulgadas exelente estado igual a nuevo escucho ofertas."]

function addItem(){
    if (document.getElementById('title').value != 0 && document.getElementById('price').value != 0  ){
    let art1 = newArticle();}
    //addItem verifica que el titulo y el precio esten detallados para evitar ingresar arrays vacios.
}
function newArticle(){
    let nombre = document.getElementById('title').value;
    articleNames.shift();
    articleNames.push(nombre);
    let precio =  document.getElementById('price').value;
    articlePrices.push(precio);
    articlePrices.shift();
    let user =   document.getElementById('name').value;
    articleUsers.push(user);
    articleUsers.shift();
    let description =   document.getElementById('info').value;
    articleDescription.push(description);
    articleDescription.shift();
    console.log(articleNames);
    console.log(articlePrices);
    console.log(articleUsers);
    console.log(articleDescription);
    //articleGenerator actualiza la lista de articulos luego de ingresar los nuevos valores a los arrays
    articleGenerator()

}
function articleGenerator(){
    //articleGenerator se encarga de imprimir los Arrays actuales sobre cada Card en el Documento,
    // o actualizarlas segun sea necesario.
    document.getElementById("card1title").innerHTML = `${articleNames[0]}`;
    document.getElementById("card1price").innerHTML = `$${articlePrices[0]}`;
    document.getElementById("card1user").innerHTML = `${articleUsers[0]}`;
    document.getElementById("card1description").innerHTML = `${articleDescription[0]}`;
    document.getElementById("card2title").innerHTML = `${articleNames[1]}`;
    document.getElementById("card2price").innerHTML = `$${articlePrices[1]}`;
    document.getElementById("card2user").innerHTML = `${articleUsers[1]}`;
    document.getElementById("card2description").innerHTML = `${articleDescription[1]}`;
    document.getElementById("card3title").innerHTML = `${articleNames[2]}`;
    document.getElementById("card3price").innerHTML = `$${articlePrices[2]}`;
    document.getElementById("card3user").innerHTML = `${articleUsers[2]}`;
    document.getElementById("card3description").innerHTML = `${articleDescription[2]}`;
    document.getElementById("card4title").innerHTML = `${articleNames[3]}`;
    document.getElementById("card4price").innerHTML = `$${articlePrices[3]}`;
    document.getElementById("card4user").innerHTML = `${articleUsers[3]}`;
    document.getElementById("card4description").innerHTML = `${articleDescription[3]}`;
    document.getElementById("card5title").innerHTML = `${articleNames[4]}`;
    document.getElementById("card5price").innerHTML = `$${articlePrices[4]}`;
    document.getElementById("card5user").innerHTML = `${articleUsers[4]}`;
    document.getElementById("card5description").innerHTML = `${articleDescription[4]}`;
    document.getElementById("card6title").innerHTML = `${articleNames[5]}`;
    document.getElementById("card6price").innerHTML = `$${articlePrices[5]}`;
    document.getElementById("card6user").innerHTML = `${articleUsers[5]}`;
    document.getElementById("card6description").innerHTML = `${articleDescription[5]}`;
    document.getElementById("card7title").innerHTML = `${articleNames[6]}`;
    document.getElementById("card7price").innerHTML = `$${articlePrices[6]}`;
    document.getElementById("card7user").innerHTML = `${articleUsers[6]}`;
    document.getElementById("card7description").innerHTML = `${articleDescription[6]}`;
    document.getElementById("card8title").innerHTML = `${articleNames[7]}`;
    document.getElementById("card8price").innerHTML = `$${articlePrices[7]}`;
    document.getElementById("card8user").innerHTML = `${articleUsers[7]}`;
    document.getElementById("card8description").innerHTML = `${articleDescription[7]}`;
}

//articleGenerator se inicializa con los articulos, y se actualiza nuevamente con los valores que ingresa addItem
articleGenerator()
