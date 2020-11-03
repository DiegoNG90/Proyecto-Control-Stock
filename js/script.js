// let userArray = [];
let listadoDeProductos = [];
listadoDeProductos = JSON.parse(localStorage.getItem("listadoDeProductos"));
console.log(listadoDeProductos);


function guardarDatos(){
    let campoNombre1 = document.querySelector("#nombre");
    let campoCantidad1 = document.querySelector("#cantidad");
    let campoPrecio1 = document.querySelector("#precio");
    
    const producto = {
        nombre: campoNombre1.value,
        cantidad: campoCantidad1.value,
        precio: campoPrecio1.value
    }

let existente = localStorage.getItem("listadoDeProductos")
    if (existente === null){
        existente = [];
        existente.push(producto);
        let listadoDeProductos = localStorage.setItem("listadoDeProductos", JSON.stringify(existente))
    }else{
        let listadoDeProductos = existente;
        listadoDeProductos = JSON.parse(listadoDeProductos);
        listadoDeProductos.push(producto);
        localStorage.setItem("listadoDeProductos", JSON.stringify(listadoDeProductos));
    }

    // listadoDeProductos.push(producto);

    // localStorage.setItem('producto', JSON.stringify(listadoDeProductos));

    campoNombre1.value = "";
    campoCantidad1.value = "";
    campoPrecio1.value = "";
}

// guardarDatos()

let btn_guardar = document.querySelector(".btn-success")
btn_guardar.addEventListener("click", guardarDatos)


function mostrarDatos(){
    let datosUsuario = JSON.parse(localStorage.getItem('listadoDeProductos'));
    

    for (let i = 0; i<datosUsuario.length; i++){
            //Vamos a crear x cantidad de divs que appendearemos al div padre (#listaProductos)donde cada div mostrará: nombreproducto, cantidadproducto, precioproducto y boton "x"

            let datosProducto = document.createElement("div")
            document.querySelector("#listaProductos").appendChild(datosProducto)
            datosProducto.innerHTML += datosUsuario[i].nombre
            datosProducto.innerHTML += datosUsuario[i].cantidad
            datosProducto.innerHTML += datosUsuario[i].precio
            datosProducto.classList.add("col-12", "col-md-1")
            datosProducto.style.maxWidth = "70%"

            
            //crear boton
            let botonEliminar = document.createElement("button");
            botonEliminar.classList.add("btn","btn-eliminar1");
            botonEliminar.innerHTML = "X";
            datosProducto.appendChild(botonEliminar)

            //crear salto de linea con linea
            // let saltoDeLinea = document.createElement("hr");
            datosProducto.innerHTML += `<br>`;
            
        }
       
    // document.querySelector("#numeral1").innerHTML = 1;
    // document.querySelector("#nombreProducto1").innerHTML = datosUsuario[1].nombreUsuario;
    // document.querySelector("#cantidadProducto1").innerHTML = datosUsuario[1].cantidadUsuario;
    // document.querySelector("#precioProducto1").innerHTML = datosUsuario[1].precioUsuario;
    
    // document.querySelector("#numeral2").innerHTML = 2;
    // document.querySelector("#nombreProducto2").innerHTML = datosUsuario[2].nombreUsuario;
    // document.querySelector("#cantidadProducto2").innerHTML = datosUsuario[2].cantidadUsuario;
    // document.querySelector("#precioProducto2").innerHTML = datosUsuario[2].precioUsuario;

    // document.querySelector("#numeral3").innerHTML = 3;
    // document.querySelector("#nombreProducto3").innerHTML = datosUsuario[3].nombreUsuario;
    // document.querySelector("#cantidadProducto3").innerHTML = datosUsuario[3].cantidadUsuario;
    // document.querySelector("#precioProducto3").innerHTML = datosUsuario[3].precioUsuario;
    
}
mostrarDatos(); 
// mostrarDatos()

function borrarItem(){
    localStorage.removeItem('');
}

let btn_borrarItem = document.querySelector(".btn-eliminar1")
btn_borrarItem.addEventListener("click", borrarItem)

// borrarItem()

function borrarTodo(){
    localStorage.clear();
}

// borrarTodo()

let btn_borrarTodo = document.querySelector(".btn-danger")
btn_borrarTodo.addEventListener("click", borrarTodo)

