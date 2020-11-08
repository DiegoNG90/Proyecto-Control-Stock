console.log("Linkeado al index.html")
console.log("Linkeado al login.html")

//SI! AHORA SI!
let ALLUSERS = [];
ALLUSERS = JSON.parse(localStorage.getItem('ALLUSERS'));

const $nodoBotonLogIn = $('#log-in')[0];


//VALIDAR LOGIN
$nodoBotonLogIn.onclick = function (e){
    e.preventDefault();
    
    const $nodoMail = $('#inputEmail')[0].value;
    const $nodoPass = $('#inputPassword')[0].value;
    const $errores = $('#errores')[0];
    
    const ALLUSERS = JSON.parse(localStorage.getItem('ALLUSERS'));
    const mails = [];
    const pass = [];

    if(ALLUSERS === null){
        const titulo = $('#titulo-login')[0];
        titulo.innerText = "No hay usuarios registrados. En breve será redireccionado a la pagina de registro para crear su usuario.";
        titulo.style.color = "red";
        document.body.style.backgroundColor = "#311c1c";
        document.querySelector('form').className = "oculto"
        redireccionar();
    }else{
        for(let i=0; i < ALLUSERS.length; i++){
            mails.push(ALLUSERS[i].user)
            pass.push(ALLUSERS[i].password)
        
            //Si coinciden (LOGIN EXITOSO!):
            if ($nodoMail === mails[i] && $nodoPass === pass[i]) {
                let logueado = localStorage.getItem('LOGIN');
    
                if (logueado === null) {
                    logueado = true;
                    const LOGIN = localStorage.setItem('LOGIN', JSON.stringify(logueado))
                }else{
                    const LOGIN = logueado;
                    localStorage.setItem('LOGIN', JSON.stringify(LOGIN));
                }
    
                window.location.href = "agregarProductos.html";
    
            }
            else {
                //Chequear si hay errores (li) antes y si hay, eliminarlos, para chequear con 0 li (errores):
                chequearYBorrarErrores($errores);
    
                let error = document.createElement("li");
                error.classList.add('error-texto')
                
                $errores.appendChild(error);
     
                //Si alguno de los campos está vacío:
                if (!$nodoMail || !$nodoPass) {
                    //Si ambos están vacíos
                    if (!$nodoMail && !$nodoPass) {
                        error.innerText = "El mail/usuario y la contraseña están incompletos."
                        $('#inputPassword')[0].className = 'error-input';
                        $('#inputEmail')[0].className = 'error-input';
                        break;
                    } else if (!$nodoMail && $nodoPass !== "") {
                        error.innerText = "El mail/usuario está incompleto."
                        $('#inputMail')[0].className = 'error-input';
                        break;
                    }else{
                        error.innerText = "La contraseña está incompleta."
                        $('#inputPassword')[0].className = 'error-input';
                        break;
                    }
                }
                //Si el mail coincide pero el pass no:
                else if ($nodoMail === mails[i] && $nodoPass !== pass[i]) {
                    error.innerText = "El password es incorrecto."
                    $('#inputPassword')[0].className = 'error-input';
                    $('#inputEmail')[0].className = 'form-control';
                    // break;
                }
                //Si el pass coincide pero el mail no:
                else if($nodoMail !== mails[i] && $nodoPass === pass[i]){
                    error.innerText = "El mail/usuario es incorrecto."
                    $('#inputEmail')[0].className = 'error-input';
                    $('#inputPassword')[0].className = 'form-control';
                    // break;
                } 
                // Si el mail y el pass no coinciden
                else if($nodoMail !== mails[i] && $nodoPass !== pass[i]){
                    error.innerText = "El mail/usuario y la contraseña no existen."
                    $('#inputPassword')[0].className = 'error-input';
                    $('#inputEmail')[0].className = 'error-input';
                    // break;
                }
                else{
                    continue;
                }
            }  
        }    

    }

    
}

function chequearYBorrarErrores(input){
    //Chequear si hay errores (li) antes y si hay, eliminarlos, para chequear con 0 li (errores):
    while(input.firstChild){
        input.removeChild(input.firstChild);
    };
}

function redireccionar(){
    setTimeout(function(){window.location.href = "registro.html";}, 4500);
}

//Funciones de Producto, AgregarProducto

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
            //Trabajamos con tablas

            //Crear tr (Producto)
            let datosProducto = document.createElement("tr");
            document.querySelector("#contenido").appendChild(datosProducto);
            datosProducto.id = `producto-${i+1}`;
            
                let numero = document.createElement("th");
                let nombre = document.createElement("th");
                let cantidad = document.createElement("th");
                let precio = document.createElement("th");
                let borrar = document.createElement("button");
                borrar.type = "button";
                borrar.innerText = "X";
                // borrar.style.textAlign = "center";
                borrar.className = `btn btn-eliminar${i+1}`;
                borrar.classList.add("border-white");
                borrar.classList.add("btn-eliminar1");
                
                


                document.querySelector(`#producto-${i+1}`).appendChild(numero);
                document.querySelector(`#producto-${i+1}`).appendChild(nombre);
                document.querySelector(`#producto-${i+1}`).appendChild(cantidad);
                document.querySelector(`#producto-${i+1}`).appendChild(precio);
                document.querySelector(`#producto-${i+1}`).appendChild(borrar);

                numero.innerText = i+1;
                nombre.innerText = datosUsuario[i].nombre;
                cantidad.innerText = datosUsuario[i].cantidad;
                precio.innerText = datosUsuario[i].precio;
            



            // const nodoDato = document.querySelector(`#producto-${i+1}`)
            // nodoDato.insertAdjacentElement('beforebegin', `<div> ${datosUsuario[i].nombre} </div>`);
            // datosProducto.innerHTML += datosUsuario[i].cantidad;
            // datosProducto.innerHTML += datosUsuario[i].precio;
            // datosProducto.classList.add("col-12");
            // datosProducto.style.maxWidth = "70%";

            
            // //crear boton
            // let botonEliminar = document.createElement("button");
            // botonEliminar.classList.add("btn","btn-eliminar1");
            // botonEliminar.innerHTML = "X";
            // datosProducto.appendChild(botonEliminar)

            // //crear salto de linea con linea
            // // let saltoDeLinea = document.createElement("hr");
            // datosProducto.innerHTML += `<br>`;
            
        }
       
    // document.querySelector("#numeral1").innerHTML = 1;
    // document.querySelector("#nombreProducto1").innerHTML = listadoDeProductos[1].nombre;
    // document.querySelector("#cantidadProducto1").innerHTML = listadoDeProductos[1].cantidad;
    // document.querySelector("#precioProducto1").innerHTML = listadoDeProductos[1].precio;
    
    // document.querySelector("#numeral2").innerHTML = 2;
    // document.querySelector("#nombreProducto2").innerHTML = listadoDeProductos[2].nombre;
    // document.querySelector("#cantidadProducto2").innerHTML = listadoDeProductos[2].cantidad;
    // document.querySelector("#precioProducto2").innerHTML = listadoDeProductos[2].precio;

    // document.querySelector("#numeral3").innerHTML = 3;
    // document.querySelector("#nombreProducto3").innerHTML = listadoDeProductos[3].nombre;
    // document.querySelector("#cantidadProducto3").innerHTML = listadoDeProductos[3].cantidad;
    // document.querySelector("#precioProducto3").innerHTML = listadoDeProductos[3].precio;
    
}
mostrarDatos(); 


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
