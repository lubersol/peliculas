# API Películas
![Screenshot](video.png)

**1 - Introducción:**

API que simula un videoclub creada en backend con **Nodejs, Express y MongoDB**, haciendo uso de **Git, ES6, Postman, Mongoose y JSON Web Token**.

**2 - Descripción:**

Hay tres áreas: _USUARIOS, PELICULAS y PEDIDOS._

En la parte de **usuarios**, se puede crear un usuario nuevo, hacer login y crear su token, eliminar un usuario y ver el perfil de un usuario en el servidor.

   * router.post('/', controller.createUser);
   * router.get('/:id', controller.getUser);
   * router.delete('/:id', controller.deleteUser);
   * router.post('/login', controller.login);


En la parte de **películas**, se puede hacer una búsqueda por título, genero, director e intérpretes, por id de la película y ver todas las películas desde el servidor guardadas en la base de datos.

   * router.get('/', controller.getMovies);
   * router.get('/:id', controller.getMovie);
   * router.post('/', controller.createMovie);


En la parte de **pedidos**, se puede crear un pedido con una película por usuario con fecha de alquiler y con fecha de devolución.

   *  router.post('/', controller.createOrder);


https://heroku-mongo-mi-atlas.herokuapp.com/