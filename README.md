<p aling="center">
<a href='https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct13-dsikea-api-groupe?branch=main'><img src='https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct13-dsikea-api-groupe/badge.svg?branch=main' alt='Coverage Status' /></a>
<a href='https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct13-dsikea-api-groupe'><img src='https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct13-dsikea-api-groupe&metric=alert_status' alt='Sonar Cloud'></a>
</p>

# DSIkea: API REST con Node/Express
## [🧠] Introduccion [🧠]</p>
En esta segunda práctica grupal de la asignatura, nos enfrentamos al desafío de desarrollar un API REST utilizando Node.js y **Express** para gestionar una tienda de muebles. El objetivo es implementar operaciones *CRUD* (Create, Read, Update, Delete) para manipular registros de muebles. Todo el código se alojará en un repositorio compartido en GitHub, siguiendo una estructura de proyecto similar a la enseñada en clase. Se elaborará un informe detallado resaltando las decisiones de diseño tomadas, y se grabará un vídeo explicativo de máximo 10 minutos donde cada miembro del grupo participará. Además, cabe destacar que el despliegue del proyecto se realizará utilizando **Render**. Este proyecto representa una oportunidad para aplicar conocimientos en un entorno práctico y colaborativo, demostrando habilidades en desarrollo de APIs REST, gestión de proyectos de software y despliegue en plataformas en la nube como **Render**.

## [🫀] Funcionamiento [🫀]</p>
El API que estamos desarrollando debe cumplir con una serie de requisitos específicos para cada una de sus rutas o puntos de acceso. A continuación, describiremos el funcionamiento esperado para cada una de estas rutas:

- [🦴] **Clientes (/customers):** [🦴]
  - Se deben poder realizar operaciones CRUD (Create, Read, Update, Delete) sobre los clientes a través de los métodos HTTP correspondientes.
  - Para la operación de lectura, se puede utilizar una query string con el NIF del cliente o el identificador único del cliente como parámetro dinámico.
  - Se deben implementar al menos siete manejadores diferentes para esta ruta.

- [🦴] **Proveedores (/providers):** [🦴]
  - Al igual que con los clientes, se deben poder realizar operaciones CRUD sobre los proveedores.
  - La operación de lectura puede hacerse utilizando una query string con el CIF del proveedor o el identificador único del proveedor como parámetro dinámico.
  - Se deben implementar al menos siete manejadores diferentes para esta ruta.

- [🦴] **Muebles (/furnitures):** [🦴]
  - Se deben poder realizar operaciones CRUD sobre los muebles.
  - Para la operación de lectura, se puede utilizar una query string con diferentes campos como nombre, descripción, color, etc., o el identificador único del mueble como parámetro dinámico.
  - Se deben implementar al menos siete manejadores diferentes para esta ruta.

- [🦴] **Transacciones (/transactions):** [🦴]
  - Se deben poder realizar operaciones CRUD sobre las transacciones, que incluyen información de clientes/proveedores y muebles.
  - Las operaciones de creación deben recibir toda la información necesaria en el cuerpo de la petición, incluyendo el NIF/CIF del cliente/proveedor y una lista de nombres de muebles con cantidades.
  - La operación de lectura puede hacerse utilizando una query string con el NIF/CIF del cliente/proveedor, fechas de inicio y fin, y tipo de transacciones.
  - Las operaciones de modificación y borrado se realizan utilizando el identificador único de la transacción como parámetro dinámico.
  - Se deben implementar al menos seis manejadores diferentes para esta ruta, teniendo en cuenta la complejidad de la lógica involucrada.

## [🧬] Configuracion [🧬]</p>
- [🦴] Clientes [🦴]
  - En este caso se han implementado diferentes metodos CRUD, estos metodos trabajan con los parametros ID/NIF
  - **ID**, es un identificador unico para cada cliente
  - **NIF**, es un identificador unico para cada cliente, tiene el formato del DNI
  - **NAME**, es el nombre del cliente
  - **SURNAME**, es el apellido del cliente
  - **DIRECTION**, es la direccion del cliente, puede no proporcionarse
  - **NUMBER**, es la numero de telefono del cliente
- [🦴] Proveedores [🦴]
  - En este caso se han implementado diferentes metodos CRUD, estos metodos trabajan con los parametros ID/CIF
  - **ID**, es un identificador unico para cada proveedor
  - **CIF**, es un identificador unico para cada proveedor, tiene el formato del DNI
  - **NAME**, es el nombre del proveedor
  - **SURNAME**, es el apellido del proveedor
  - **DIRECTION**, es la direccion del proveedor, puede no proporcionarse
  - **NUMBER**, es la numero de telefono del proveedor
- [🦴] Muebles [🦴]
  - En este caso se han implementado diferentes metodos CRUD, estos metodos trabajan con los parametros ID/PRICE/STOCK/SERIALNUMBER
  - **ID**, es un identificador unico para cada mueble
  - **NAME**, es el nombre del mueble
  - **DESCRIPTION**, es la descripcion del mueble, puede no proporcionarse
  - **SIZE**, es el tamaño del mueble, puede no proporcionarse
  - **PRICE**, es el precio del mueble
  - **STOCK**, es el numero de mueble disponibles
  - **SERIALNUMBER**, es el numero de serie del mueble
- [🦴] Transaccion [🦴]
  - En este caso se han implementado diferentes metodos CRUD, estos metodos trabajan con los parametros ID/TIME/TYPE/PAY
  - **ID**, es un identificador unico para cada transaccion
  - **HUMANID**, es el _ID del comprador/proveedor
  - **TYPE**, es el tipo de transaccion que se va a realizar
  - **FURNITURE**, es el _ID del mueble, puede no proporcionarse
  - **CUSTOMER**, es el NIF del comprador, puede no ser añadido
  - **PROVIDER**, es el CIF del proveedor, puede no ser añadido
  - **AMOUNT**, es el numero muebles que se solicitan/proporcionan en la transaccion
  - **PAY**, es el dinero proporcionado en la transaccion
  - **TIME**, es la hora de la transaccion

## [💭] Conclusion [💭]</p>
Este proyecto ha representado una oportunidad invaluable para adquirir conocimientos en la creación de una API REST destinada a gestionar diversas operaciones dentro de una tienda de muebles. En este proceso, hemos empleado la plataforma Render para el despliegue de nuestra aplicación. Sin embargo, enfrentamos desafíos considerables debido a los largos tiempos de despliegue y la falta de información en ciertas ocasiones, lo que añadió complejidad al desarrollo.

Además, hemos utilizado un Cluster de MongoDB para almacenar los datos de nuestra aplicación. Aunque esta plataforma resulta eficiente en cuanto a funcionalidad, su interfaz de usuario puede resultar poco intuitiva debido a la cantidad de opciones y la falta de claridad en la disposición de los elementos.

Durante el desarrollo, nos encontramos con dificultades relacionadas con la VPN, que inicialmente nos impidió desplegar la aplicación localmente. Afortunadamente, logramos solventar este problema y continuar con el proyecto con éxito.

En cuanto a las pruebas realizadas, la mayoría fueron relativamente sencillas. Sin embargo, nos enfrentamos a un obstáculo significativo al intentar completar las pruebas de transacciones, ya que el método POST no funcionaba correctamente, a pesar de que en la aplicación sí lo hacía. Esta anomalía representó un desafío técnico que aún estamos investigando para comprender su origen.

Por último, es importante destacar que este proyecto ha sido una continuación del anterior, y gracias al uso de MongoDB y Express, fue considerablemente más fácil de llevar a cabo. Estas herramientas facilitaron aspectos clave como la gestión de la base de datos, permitiéndonos centrarnos en otros aspectos de la implementacion.

En conclusión, este proyecto ha sido una experiencia integral que nos ha permitido aplicar y consolidar los conocimientos adquiridos a lo largo de la asignatura. A pesar de los desafíos encontrados, hemos logrado desarrollar una aplicación funcional y completa, lo que demuestra nuestro crecimiento y capacidad para enfrentar proyectos de envergadura.

## [🔬] Consideraciones [🔬]
Esta práctica, aunque concebida como un trabajo grupal, se ha llevado a cabo de manera individual debido al abandono de la asignatura por parte de uno de los miembros del equipo.

Es importante destacar que las pruebas de las transacciones no han sido totalmente implementadas faltan DELETE/PATCH/POST.