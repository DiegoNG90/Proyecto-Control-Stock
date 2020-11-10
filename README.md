# Proyecto-Control-Stock
Trabajo integrador grupal de PDTC

## Programa pensado para la **cargar de datos a un listado de inventario con interfaz de login**.

### Herramientas/Pseudo-leguajes y lenguaje utilizados:
1. HTML
2. CSS y Bootstrap (incluye la librerías jQuery y Popper de Javascript)
3. Javascript

### Marco general de uso
HTML
* Si bien se usan varias etiquetas necesarias para crear un html funcional, el énfasis en éste proyecto está puesto fundamentalmente al interior de las etiquetas <form> y todos sus hijos (inputs, labels, buttons, span, etc).
* Utilizamos una table para mostrar los datos de carga de productos.

CSS y Bootstrap:
* La mayor parte del códgio html está estilizado con componentes y clases de Bootstrap.
* También se crea un css/style.css para terminar de dar forma a ciertas pantallas (como el index.html), así como también para retocar estilos y crear clases funcionales al DOM -desde JS-, tales como la clase "oculto" o "error-texto") o id como "#esExito".

JAVASCRIPT
* Aplicamos los conceptos del DOM para manejar datos de los <form>(HTML) desde JS.
* Utilizamos el local storage como emulación de una base de datos donde el usuario alojará datos referentes tanto a los productos cargados, como los usuarios creados para loguearse exitosamente e ingresar a la matriz del inventario.
* Se *intenta* organizar el código en un marco/paradigma funcional. 


### Estructura interna del programa/aplicación
El programa se divide en dos partes principales: la landing page, donde el usuario podrá inicar sesion y/o registrarse, y la matriz del inventario, donde el usuario, una vez logueado, podrá manipular los datos del inventario a su antojo: agregar productos, verlos por pantalla, eliminar items a discreción (eligiendo uno a uno) o a indiscreción (eliminando todos a la vez).

#### Langing Page e interfaz de log-in


