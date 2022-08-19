
let numAlumnos = parseInt(prompt("ingresa el numero de alumnos a ingresar al sistema"))
for(i = 0; i < numAlumnos; i++){
    let alumno = prompt(`ingresa el nombre del ${i+1}° alumno`)
    alert(`alumno ${alumno} registrado`)}
if(numAlumnos > 0){
    alert(`Lista registrada exitosamente`)}
else{
    alert('no se ingresaron alumnos en el sistema')
}
