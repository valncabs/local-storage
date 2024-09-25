/*alert("Hola, futuro ING. :)")
/*localStorage.setItem("Nombre","Eliab")
localStorage.setItem("No_Carreras","Futuro ING.")
localStorage.setItem("Carro","Nada, pailas")

let Nombre=localStorage.getItem("Nombre")

document.getElementById('Info').innerHTML="Nombre del futuro ING. "+Nombre*/

let Estudiante={
Nombre:"Eliab",
Apellido:"Lopez",
Edad:"16",
Genero:"M",
Hobby:"Ser batman",
Profesion:"Futuro ING.",
Estado_civil:"Mas solo que trabajo en dia festivo",
Direccion:" Calle 53D",
}

localStorage.setItem("nuevoestudiante",JSON.stringify(Estudiante))

let datos = JSON.parse(localStorage.getItem("nuevoestudiante"))

/*alert(datos.Nombre)*/

alert(datos.Nombre+""+datos.Apellido)