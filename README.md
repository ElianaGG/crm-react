# Descripción del proyecto
Este proyecto es un administrador de clientes el cual fue creado utilizando Vite, React-Router-DOM, TailwindCSS Y JSON-server

## Instalación
Debemos ejecutar el comando: 'npm install' para poder instalar todas nuestras dependencias.

Posterior a eso debemos ejecutar el comando: 'npm run dev' para poder iniciar nuestro servidor.

Dicho servidor esta escuchando en el puerto 5173. Podemos acceder a través de la url: http://localhost:5173/

# JSON-server
JSON-server es una herramienta que nos permite simular una API RESTful utilizando un archivo JSON como base de datos. Esto resulta útil para el desarrollo de aplicaciones que necesitan interactuar con una API, pero aún no se ha implementado la parte del servidor.

## Instalación
Para utilizar JSON-server, asegúrate de tener instalado Node.js en tu sistema. Luego, puedes instalar JSON-server globalmente ejecutando el siguiente comando en tu terminal: 'npm install -g json-server'

## Uso
1. Crea un archivo JSON con los datos que deseas utilizar como base de datos. Puedes llamarlo db.json o con el nombre que prefieras.

2. Ejecuta el siguiente comando en la terminal, dentro del directorio donde se encuentra el archivo JSON: 'json-server --watch db.json'

3. Ahora puedes hacer solicitudes HTTP a http://localhost:3000 para interactuar con la API simulada. Por ejemplo, puedes realizar una solicitud GET a http://localhost:3000/posts para obtener una lista de todos los posts.
