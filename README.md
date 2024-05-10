[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/CaXtHsbh)

# DSIkea: API REST con Node/Express
## <p align="center">[🧠] Introduccion [🧠]</p>
En esta segunda práctica grupal de la asignatura, nos enfrentamos al desafío de desarrollar un API REST utilizando Node.js y **Express** para gestionar una tienda de muebles. El objetivo es implementar operaciones *CRUD* (Create, Read, Update, Delete) para manipular registros de muebles. Todo el código se alojará en un repositorio compartido en GitHub, siguiendo una estructura de proyecto similar a la enseñada en clase. Se elaborará un informe detallado resaltando las decisiones de diseño tomadas, y se grabará un vídeo explicativo de máximo 10 minutos donde cada miembro del grupo participará. Además, cabe destacar que el despliegue del proyecto se realizará utilizando **Render**. Este proyecto representa una oportunidad para aplicar conocimientos en un entorno práctico y colaborativo, demostrando habilidades en desarrollo de APIs REST, gestión de proyectos de software y despliegue en plataformas en la nube como **Render**.

## <p align="center"> [🫀] Funcionamiento [🫀]</p>
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

## <p align="center"> [🧬] Configuracion [🧬]</p>
- [🦴] Clientes [🦴]
- [🦴] Proveedores [🦴]
- [🦴] Muebles [🦴]
- [🦴] Transaccion [🦴]
## <p align="center"> [💭] Conclusion [💭]</p>