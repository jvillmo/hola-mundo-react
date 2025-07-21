# Hola Mundo React

Este proyecto fue actualizado para usar **React 18** y las últimas
dependencias de *react-router-dom*. Ahora la aplicación hace uso de
componentes funcionales y *hooks* para manejar el estado y las
peticiones a la API de películas. Redux ha sido eliminado ya que el
ejemplo es pequeño y la gestión de estado se resuelve de forma local.

Para la clave de la API se utiliza una variable de entorno llamada
`REACT_APP_API_KEY`. Copia el archivo `.env.sample` a `.env` y asigna tu
propia clave antes de iniciar la aplicación.

## Scripts disponibles

```bash
npm install
npm start
npm test
```

`npm start` ejecuta el proyecto en modo desarrollo.
`npm test` corre la suite de pruebas si está configurada.
