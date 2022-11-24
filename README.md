# Para iniciar se debe tener instalado php, npm, git, composser y un servidor de aplicaciones como apache o nginx:

## Abrir una terminal y ejecutar los siguientes comandos:

git clone https://github.com/dhbautistar/pruebaVue.git

cd  prueba

composer install

crear base de datos con el nombre: "prueba"

php artisan migrate

Agregar datos en la tabla bodegas directamente en la base de datos

Tambien podria agregar datos pre-definidos en la tabla bodegas por consola con php artisan db:seed --class=BodegaSeeder

php artisan serve

Para ver el frontend se debe abrir el archivo index.html que se encuentra en la raiz

Consulta relacional solicitada:
(SELECT bodegas.nombre , productos.* from productos INNER JOIN bodegas on productos.id_bodega = bodegas.id)

Para ver la cantidad de productos que exiten en cada bodega se requiere recargar la pagina
