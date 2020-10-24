console.log("Linkeado al index.html")
console.log("Linkeado al login.html")

const superUsuario = {
    user: "diego@hotmail.com",
    password: 123456
}

localStorage.setItem('superUsuario', JSON.stringify(superUsuario));
let userRegistrado = localStorage.getItem('superUsuario');
userRegistrado = JSON.parse(userRegistrado);
// console.log(userRegistrado);

const $nodoBotonLogIn = $('#log-in')[0];

$nodoBotonLogIn.onclick = function (e){
    e.preventDefault();
    
    const $nodoMail = $('#inputEmail')[0].value;
    const $nodoPass = $('#inputPassword')[0].value;

    if ($nodoMail === userRegistrado.user && $nodoPass === userRegistrado.password.toString()) {
        window.location.href = "index.html";
    }
}




function guardarDatos(){

}

function mostrarDatos(){

}

function eliminarItems(params) {
    localStorage.removeItem('elItemEnCuestion');
}

function eliminarTodo(params) {
    localStorage.clear();
}
