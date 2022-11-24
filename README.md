# Para iniciar se debe tener instalado php, node.js, npm, git, composser y un servidor de aplicaciones como apache o nginx:
##

#### Abrir una terminal y ejecutar los siguientes comandos:

 ```
 - git clone https://github.com/dhbautistar/pruebaVue.git
 - cd  prueba
 - composer install
 - php artisan migrate
 - php artisan serve
 ```
#

#### Si desea agregar datos pre-definidos en la tabla bodegas por consola 

- php artisan db:seed --class=BodegaSeeder
#
> Tambien podra agregar datos en la tabla bodegas directamente en la base de datos
#
#### Para ver el frontend se debe abrir el archivo index.html que se encuentra en la raiz
#
### Adicional:

##### Consulta relacional solicitada:

```Sql
(SELECT bodegas.nombre , productos.* from productos INNER JOIN bodegas on productos.id_bodega = bodegas.id)
```


#
##### Para ver la cantidad de productos que exiten en cada bodega se requiere recargar la pagina