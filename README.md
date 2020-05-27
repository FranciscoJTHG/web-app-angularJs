
# Web-app-angularJs

Se requiere una WebApp desarrollada en AngularJs La cual se contempla en 2 partes:

## Parte I

Desarrollar un site que implemente un acceso login, haciendo uso de la información ubicada en https://dev.tuten.cl/TutenREST/#!/user/login

## Parte II

Con el token obtenido de la parte I, se debe obtener un listado de datos a mostrar en un
datagrid u otro elemento que estime conveniente, referentes al user contacto@tuten.cl.
La especificación de la API se encuentra ubicada en:
https://dev.tuten.cl/TutenREST/#!/user/bookings


## Dependencias

Las dependencias se manejaron con el herraminta npm las mismas se puede instalar corriendo el archivo package.json con el comando npm install:

* angular: ^1.7.9,
* angular-animate: ^1.7.9,
* angular-aria: ^1.7.9,
* angular-cookies: ^1.7.9,
* angular-material: ^1.1.22,
* angular-messages: ^1.7.9,
* angular-resource: ^1.7.9,
* angular-route: ^1.7.9,
* angular-sanitize: ^1.7.9,
* bootstrap: ^4.5.0,
* jquery: ^3.5.1

### Estructura del proyecto

El archivo index carga todas las dependencias de la App.

* `src/index.html/`

Cada uno de los modulos se definen dentro de la carpeta componentes:

* `src/componentes/`.

La App se divide en cuatro componentes los cuales se indican a continuación:

* `src/componentes/login`
* `src/componentes/listado`
* `src/componentes/menu`
* `src/componentes/noFound`.

Dentro de cada modulo se encuentran los archivos correspondientes a la Vista, Modelo y Controlador.

En la carpeta app se definieron las dependencias del franmework:

* `src/app/`

Estas se componen con los siguientes archivos:

* `src/app/app.js`
* `src/app/controladores.js`
* `src/app/rutas.js`
* `src/app/servicios.js`

Los estilos correspondientes a las App se encuentran en la carpeta:

* `src/style/style.css`



