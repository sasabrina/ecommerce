# Desafío técnico Meli

### Frontend

En base a los diseños dados, crear tres vistas que deben ser navegables de manera independiente y cuenten con su propia url.

- Caja de Búsqueda: `"/"`
- Resultados de la búsqueda: `"/items?search="`
- Detalle del producto: `"/items/:id"`
- En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y al enviar el formulario navegar a la vista de Resultados de búsqueda, visualizando solo 4 productos. Luego, al hacer click sobre uno de ellos, debería navegar a la vista de Detalle de Producto.
- Dado un id de producto, debería poder ingresar directamente a la vista de detalle de producto.

### Backend

Construir los siguientes endpoints para ser utilizados desde las vistas:

- `/api/items?q=​:query`
- `/api/items/​:id`

## Stack de tecnologías

- React (Hooks, Context)
- Typescript
- Sass
- Nodejs
- Express

## Setup

### Backend

Desde el directorio `server` se deben ejecutar los siguientes comandos:

1.  `npm install` para instalar dependencias.
2.  `npm run dev` para correr el proyecto en modo desarrollo.

### Frontend

El proyecto fue creado con [Vitejs](https://vitejs.dev/).  
Una vez levantado el servidor, desde el directorio `client` se deben ejecutar los siguientes comandos:

1.  `npm install` para instalar dependencias.
2.  `npm run dev` para correr el proyecto en modo desarrollo.

Abrir [http://localhost:5173/](http://localhost:5173/)



Abrir [http://localhost:3000/api/items?q=reloj​](http://localhost:3000/api/items?q=reloj) o [http://localhost:3000/api/items/MLA1186514330](http://localhost:3000/api/items/MLA1186514330)
