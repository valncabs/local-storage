function calcular() {
let v_objeto = document.getElementById('txtfigura').value
let v_base = document.getElementById('txtbase').value
let v_altura = document.getElementById('txtaltura').value

let p =parseFloat(v_base)*2 +parseFloat(v_altura)*2
let a =parseFloat(v_base)*2 +parseFloat(v_altura)

let nuevo ={
    objeto:v_objeto,
    base:v_base,
    altura:v_altura,
    perimetro:p,
    area:a

    
}
localStorage.setItem("nuevafigura",JSON.stringify(nuevo))

var almacenar =[]
almacenar.push({ Id:'1', objeto: v_objeto, base: v_base, altura: v_altura, perimetro: p, area:a})
almacenar.push({ Id:'', objeto: v_objeto, base: v_base, altura: v_altura, perimetro: p, area:a})
almacenar.push({ Id:'', objeto: v_objeto, base: v_base, altura: v_altura, perimetro: p, area:a})


nuevojson=JSON.stringify(almacenar);
listanuevo=JSON.parse(nuevojson)
alert(listaalmacenar[0].objeto+""+listaalmacenar[1].perimetro+""+listaalmacenar[1].area)
}

function mostrar(){
let datos = JSON.parse(localStorage.getItem("nuevafigura"))
document.getElementById("info").innerHTML="Figura"+datos.objeto
alert(datos.area+""+datos.perimetro+""+datos.objeto)
}
