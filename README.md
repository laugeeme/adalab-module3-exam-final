<p align="center">
<img src="https://http2.mlstatic.com/rick-and-morty-pickle-peluche-original-pepino-pepinillo-D_NQ_NP_637338-MLA26815354336_022018-F.jpg" width="500">
</p>


# · Buscador de Rick and Morty ·
---
Ejercicio de evaluación del módulo 3 que consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje.

Realizado por: [laurageeme](https://github.com/laurageeme) :woman: :computer:
___

## Requisitos: :clipboard:
- Traer ==listado== de personajes desde la API:
 
  `https://rickandmortyapi.com/documentation/#get-all-characters`
  
- ==Filtrado== de personajes por nombre.

- ==Link== con acceso al detalle del personaje usando React-Router.

- Uso de ==grid== para mostrar los resultados.

- Diseño ==responsive== para diferentes dispositivos.


## Construido con: :house:

- HTML5 y CSS3
- SASS
- JavaScript y React
- VCode
- Git y GitHub

## Estructura de carpetas: :open_file_folder:
```
`- _public
   |   `favicon.ico
   |   `index.html
   |   `manifest.json
   |   `rick-and-morty.ico
   |   `robots.txt

`- _src
   |- components
   |  |    `App.js
   |  |    `CharacterCard.js
   |  |    `CharacterDetail.js
   |  |    `CharacterList.js
   |  |    `FilterSearch.js
   |  |    `Header.js
   |  |    `NoResults.js
   |  |    `PageNotFound.js
   |- Images
   |- Services
   |  |    `Fetch.js
   |- stylesheets
   |  |		|- base
   |  |    	|	`- _mixins.scss
   |  |    	|	`- _reset.scss
   |  |    	|	`- _variables.scss
   |  |		|- components
   |  |    	|	`- _characterCard.scss
   |  |    	|	`- _characterDetail.scss
   |  |    	|	`- _characterList.scss
   |  |    	|	`- _filterSearch.scss
   |  |    	|	`- _header.scss
   |  |    	|	`- _noResults.scss
   |  |    	|	`- _pageNotFound.scss
   |  |		`- _app.js
   |  |		`- _footer.js
   |  |		`- _space.js
   |  |
   |-index.css
   |-index.js
   |
`- .gitignore
`- .enunciado-react.pdf
`- package-lock.json
`- package.json
`- README.md 

```

## Instalación: :wrench:

1.Instalar [Node.js](Node.js).

2.Descarga o clona el repositorio.

3.Instalar dependencias locales con *$ npm install*

4.Lanzar el proyecto con *$ npm start*

---

Este proyecto ha sido creado con  [Create React App](https://github.com/facebook/create-react-app).

