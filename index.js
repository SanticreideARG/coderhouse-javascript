let precio = 0

//seleccion de destino

let destino = parseInt(prompt("Ingrese el destino al que desee viajar"))
if(destino == 1){
    precio =  precio + 35000
} if(destino == 2){
    precio = precio + 65000
} if(destino == 3){
    precio = precio + 83000
} if(destino == 4){
    precio = precio + 91000
} else{
    // alert(`Seleccion Incorrecta`)
}
if(destino == 1){
    alert(`Aereos a Sao Pablo - Brasil Ida + Vuelta sin escalas Seleccionados`)
} if(destino == 2){
    alert(`Aereos a Nueva York - USA Ida + Vuelta con escala en Sao Pablo Seleccionados`)
} if(destino == 3){
    alert(`Aereos a Madrid - España Ida+Vuelta con escala en Sao Pablo Seleccionados`)
} if(destino == 4){
    alert(`Aereos a Berlin - Alemania Ida+Vuelta con escala en Sao Pablo y Madrid Seleccionados`)
}

//seleccion de pasajeros

let pasajeros = parseInt(prompt("Ingrese el numero de pasajeros (maximo 6 por compra)"))
    if(pasajeros < 7){
    alert(`Se registraron ${pasajeros} pasajeros para la compra`)
    }
    alert(`Comprobando disponibilidad de Pasajes...`)
    alert(`Asientos disponibles para ${pasajeros} pasajeros en el vuelo elegido`)

//introduccion de codigos de descuento

let codigoDescuento = prompt("Ingrese su codigo de descuento (enter en caso omiso)")
if(codigoDescuento == "FLY020"){
    alert(`Felicidades, usted recibio un descuento del 20% en el precio de su boleto aereo`)
   let descuento = 0.20
}if(codigoDescuento == "FLY010"){
    alert(`Felicidades, usted recibio un descuento del 10% en el precio de su boleto aereo`)
    let descuento = 0.10
}if(codigoDescuento == "FLY005"){
    alert(`Felicidades, usted recibio un descuento del 5% en el precio de su boleto aereo`)
   let descuento = 0.05
}else{
    alert(`Recuerde registrarse para recibir codigos de descuento para sus viajes!`)
}

let metodoPago = parseInt(prompt("Ingrese su metodo de pago"))
if(metodoPago == 1){
    alert(`Seleccionado Efectivo en puntos de pago o transferencia bancaria`)
}if(metodoPago == 2){
    alert(`Seleccionado Tarjeta de Credito Visa Bancaria`)
}if(metodoPago == 3){
    alert(`Seleccionado Tarjeta de Credito Mastercard`)}

    //calculo de precio
    alert(`Calculando los Costos totales del pasaje`)


    let iva = precio*0.21
    let tasas = precio * 0.7    
    let precioTotal = precioPasaje*pasajeros
    alert(`Espere por favor`)

    let precioPasaje = (precio - (precio*descuento) + iva + tasas)

    alert(`Precio Pasaje = $${precio}
           IVA = $${iva}
           Tasas = $${tasas}
           Precio total por Pasaje = $${precioPasaje}
           Importe total a Pagar (${pasajeros} pasajeros) = $${precioTotal}`)

        if(metodoPago == 1){
            alert(`Los pagos en efectivo solamente se pueden realizar en una cuota.`)
        }if(metodoPago == 2){
           let precioCuota = precioTotal / 3
            alert(`Tarjeta de Credito Visa Bancaria permite hasta 3 cuotas sin interes de $${precioCuota}`)
        }if(metodoPago == 3){
            let precioCuota = precioTotal / 6
            alert(`Tarjeta de Credito Mastercard permite hasta 6 cuotas sin interes de $${precioCuota}`)
        }

// let numAlumnos = parseInt(prompt("ingresa el numero de alumnos a ingresar al sistema"))
// for(i = 0; i < numAlumnos; i++){
//     let alumnos = prompt(`ingresa el nombre del ${i+1}° alumno`)
//     alert(`alumno ${alumnos} registrado`)}
// if(numAlumnos > 0){
//     alert(`Lista registrada exitosamente`)}
// else{
//     alert('no se ingresaron alumnos en el sistema')