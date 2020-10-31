let userArray = [];

function guardarDatos(){
    let campoNombre1 = document.querySelector("#nombre");
    let campoCantidad1 = document.querySelector("#cantidad");
    let campoPrecio1 = document.querySelector("#precio");
    
    const usuario = {
        nombreUsuario: campoNombre1.value,
        cantidadUsuario: campoCantidad1.value,
        precioUsuario: campoPrecio1.value
    }

    userArray.push(usuario);

    localStorage.setItem('usuario', JSON.stringify(userArray));

    campoNombre1.value = "";
    campoCantidad1.value = "";
    campoPrecio1.value = "";
}

guardarDatos()

let btn_guardar = document.querySelector(".btn-success")
btn_guardar.addEventListener("click", guardarDatos)


function mostrarDatos(){
    let datosUsuario = JSON.parse(localStorage.getItem('usuario'));
  
    document.querySelector("#numeral1").innerHTML = 1;
    document.querySelector("#nombreProducto1").innerHTML = datosUsuario[1].nombreUsuario;
    document.querySelector("#cantidadProducto1").innerHTML = datosUsuario[1].cantidadUsuario;
    document.querySelector("#precioProducto1").innerHTML = datosUsuario[1].precioUsuario;
    

    document.querySelector("#numeral2").innerHTML = 2;
    document.querySelector("#nombreProducto2").innerHTML = datosUsuario[2].nombreUsuario;
    document.querySelector("#cantidadProducto2").innerHTML = datosUsuario[2].cantidadUsuario;
    document.querySelector("#precioProducto2").innerHTML = datosUsuario[2].precioUsuario;

    document.querySelector("#numeral3").innerHTML = 3;
    document.querySelector("#nombreProducto3").innerHTML = datosUsuario[3].nombreUsuario;
    document.querySelector("#cantidadProducto3").innerHTML = datosUsuario[3].cantidadUsuario;
    document.querySelector("#precioProducto3").innerHTML = datosUsuario[3].precioUsuario;
    
}

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

