class Articulo{
    constructor(user, number, categoria, condicion, productName, price, description){
        this.user = user;
        this.number = number;
        this.categoria = categoria;
        this.condicion = condicion;
        this.productName = productName;
        this.price = price;
        this.description = description;
    }
        //articleShow
    }
   let articulo1 = new Articulo("Jose", 299445533, 2, 2, "Motorola g20", 21000, "Usado, excelente estado.")
   let articulo2 = new Articulo("Marcos", 299455231, 1, 2, "Fiat Punto", 6000000, "Usado, Unico dueño digno dever.")
   let articulo3 = new Articulo("Patricia", 297245599, 4, 1, "Taladro Percutor Dewalt", 32000, "Vendo Taladro Portatil Dewalt Nuevo")
    console.log(articulo1, articulo2, articulo3)

function ingresarArticulo(){
    let user = document.getElementById(user).value;
    let number = document.getElementById(number).value;
    let categoria = document.getElementById(categoria).value;
    let condicion = document.getElementById(condicion).value;
    let productName = document.getElementById(productName).value;
    let price = document.getElementById(price).value;
    let description = document.getElementById(description).value;
    let articulo4 = new Articulo(user, number, categoria, condicion, productName, price, description)
    console.log(articulo4)
}