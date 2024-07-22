Archivo README.md que describa de forma clara cómo un usuario tiene que usar la aplicación. Tiene que ser un instructivo sencillo y facil de entender. Aprovechá los scripts configurables del package.json para simplificar los comandos.
Consumir datos de al menos una API pública.

La app se base en traer recetas a gusto del cliente. Rs un modelo simple donde se hacen las peticiones mediantes el archivo client(que buca simular un front que hace peticiones)
Para levantar el servidor use el  "scripts": { "dev": "ts-node ./src/index.ts", y el "script": "client": "ts-node ./src/client.ts" para el usuario}.
Use la API https://dummyjson.com/que contiene recetas en la siguiente ruta : https://dummyjson.com/recipes/ y etiquetas o tags de comida https://dummyjson.com/recipes/tags/

Se pueden obtener todas las recetas, los nombres de las recetas, las recetas por id y los tags de recetas.
Me base en el modelo hecho en clases.
Por alguna razon que no llego a entender puedo levantar el servidor, traer todas las recetas y negar tags que no coinciden......pero para las otras rutas cae el servidor porque me larga un error desde el client.
Este trabajo lo hice sola, como ya te habras dado cuenta. (Queria agregar carpeta types.ts hacer archivo para armar interfaces y un monton de cosas que estan en algun lado de mi cabeza pero no se terminan de ordenar).

