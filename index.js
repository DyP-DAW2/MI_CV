function redirigir(){
    const nombreSeleccionado = document.getElementById("nombreSeleccionado");
    const rutaSeleccionada = (nombreSeleccionado.value==="David")? "./curriculumDavid.html": "./curriculumPablo.html";
    console.log(rutaSeleccionada);
    location.href =rutaSeleccionada;
}
