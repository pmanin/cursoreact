// pasar a axios
// editar el css
// mostrar numero de pagina


// funcion para cargar las peliculas

window.addEventListener("load",()=>{
    cargarPeliculas()
})

let pagina = 1; // variable para controla la paginacion

//capturar los botones

let btnAnterior = document.querySelector("#btnAnterior");
let btnSiguiente = document.querySelector("#btnSiguiente");

//funcion anterior

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    //pagina = pagina-1
    pagina -= 1;
    cargarPeliculas()
    // llamar a la funcion que cargue las paginas
  }
});

btnSiguiente.addEventListener("click", () => {
  if (pagina < 500) {
    //pagina = pagina-1
    pagina += 1; // ++
    cargarPeliculas()
    // llamar a la funcion que cargue las paginas
  }
});

// funcion que cargue las pelis

/* const cargarPeliculas = async () => {
  try {
    let respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=f522d276f73b98bff14c28a254b96fd7&language=es-MX&page=${pagina}`
    );
    console.log(respuesta)
    if (respuesta.status == 200) {
      let datos = await respuesta.json();
console.log(datos);
      let peliculas = "";

      datos.results.forEach((pelicula)=>{
peliculas+=`<div class="pelicula"> 
<img class = "poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" />
<h3 class="titulo">${pelicula.title}</h3>
</div>`
}); */

let cargarPeliculas = async ()=>{

  try {
      let respuesta = await axios (`https://api.themoviedb.org/3/movie/popular?api_key=f522d276f73b98bff14c28a254b96fd7&language=es-MX&page=${pagina}`);
      let peliculas = "";
      respuesta.data.results.forEach((pelicula)=>{
        peliculas+=`<div class="pelicula"> 
        <img class = "poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" />
        <h3 class="titulo">${pelicula.title}</h3>
        </div>`
      });
      document.querySelector(".contenedor").innerHTML=peliculas;
   } catch (error) {
      console.log(error);
  }

}


