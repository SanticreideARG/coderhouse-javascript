function plataformaTickets(){
let precio = 0
let descuento = 0
//seleccion de destino
function total(){
    let precioBruto = precio*pasajeros
      let discount = precioBruto*descuento
      let iva = precioBruto*0.21
       let resultado = precioBruto-discount+iva
       let visa = resultado/3
       let master = resultado/6
       alert(`El total a pagar por ${pasajeros} pasajes es de $ ${resultado}
       Su bonificacion fue de $ ${discount} 
       Los impuestos por IVA son de $${iva}`)
       if(metodoPago == 1){
          alert(`Su pago en efectivo debe ser en una sola cuota de $ ${resultado} por el Total`)
       }else if(metodoPago == 2){
          alert(`Su pago en con Tarjeta  de Credito Visa puede ser procesado en 3 cuotas de $ ${visa} por el Total`)
       }else if(metodoPago == 3){
          alert(`Su pago en con Tarjeta  de Credito Mastercard puede ser procesado en 6 cuotas de $ ${master} por el Total`)
       }
       document.getElementById("boardingpass").innerHTML = `El total a pagar por ${pasajeros} pasajes es de $ ${resultado}
       Su bonificacion fue de $ ${discount} 
       Los impuestos por IVA son de $${iva}`;
       
  }


alert("Ingrese el destino al que desee viajar")
let destino = parseInt(prompt(`
1 - Aereos a Sao Pablo - Brasil Ida + Vuelta
2 - Aereos a Nueva York - USA Ida + Vuelta
3 - Aereos a Madrid - España Ida + Vuelta
4 - Aereos a Berlin - Alemania Ida + Vuelta
`))
if(destino == 1){
    precio =  precio + 35000
}else if(destino == 2){
    precio = precio + 65000
}else if(destino == 3){
    precio = precio + 83000
}else if(destino == 4){
    precio = precio + 91000
} else{
    if (destino != [1,2,3,4])
    alert(`seleccion incorrecta`)
    return
}
if(destino == 1){
    alert(`Aereos a Sao Pablo - Brasil Ida + Vuelta sin escalas Seleccionados`)
}else if(destino == 2){
    alert(`Aereos a Nueva York - USA Ida + Vuelta con escala en Sao Pablo Seleccionados`)
}else if(destino == 3){
    alert(`Aereos a Madrid - España Ida + Vuelta con escala en Sao Pablo Seleccionados`)
}else if(destino == 4){
    alert(`Aereos a Berlin - Alemania Ida + Vuelta con escala en Sao Pablo y Madrid Seleccionados`)
}
//seleccion de pasajeros
let pasajeros = parseInt(prompt("Ingrese el numero de pasajeros (maximo 6 por compra)"))
    if(pasajeros < 7){
    alert(`Se registraron ${pasajeros} pasajeros para la compra`)
    alert(`Comprobando disponibilidad de Pasajes...`)
    alert(`Asientos disponibles para ${pasajeros} pasajeros en el vuelo elegido`)
    }
    else if (pasajeros != [1,2,3,4,5,6]){
        alert (`Seleccion incorrecta`)
        return
    }
//introduccion de codigos de descuento
let codigoDescuento = prompt("Ingrese su codigo de descuento (enter en caso omiso)")
if(codigoDescuento === "FLY020"){
    alert(`Felicidades, usted recibio un descuento del 20% en el precio de su boleto aereo`)
 descuento = 0.05
}else if(codigoDescuento === "FLY010"){
    alert(`Felicidades, usted recibio un descuento del 10% en el precio de su boleto aereo`)
 descuento = 0.1
}else if(codigoDescuento === "FLY005"){
    alert(`Felicidades, usted recibio un descuento del 5% en el precio de su boleto aereo`)
 descuento = 0.2
}else{
    alert(`Recuerde registrarse para recibir codigos de descuento para sus viajes!`)
}
let metodoPago = parseInt(prompt(`Ingrese su metodo de pago:
1 - Efectivo en puntos de pago o transferencia bancaria
2 - Tarjeta de Credito Visa
3 - Tarjeta de Credito Mastercard`))
if(metodoPago == 1){
    alert(`Seleccionado Efectivo en puntos de pago o transferencia bancaria`)
}else if(metodoPago == 2){
    alert(`Seleccionado Tarjeta de Credito Visa Bancaria`)
}else if(metodoPago == 3){
    alert(`Seleccionado Tarjeta de Credito Mastercard`)}
 else if ( metodoPago != [1,2,3], pasajeros != [1,2,3,4,5,6]){
        alert (`Seleccion incorrecta`)
        return
    }
    //calculo de precio
total()
}