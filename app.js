//Selectores
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll('input[type="radio"]');
const fechaInput = document.getElementById("fecha");
let fechaTexto = document.getElementById("fechaTexto");

//Array Inicial
let valores = [
    entrada = "",
    segundo = "",
    postre = "",
    fecha = ""
];

//Obtener la fecha 
function obtenerFecha() {
    const fechaActual = new Date();
    console.log(fechaActual)
    console.log(fechaInput.value)
    fechaInput.value = fechaActual.toISOString().split("T")[0];
    console.log(fechaInput.value)

    
    fechaTexto.textContent = fechaActual.toLocaleDateString("es-ES",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });

     valores[3] = fechaActual.toISOString();
}



fechaInput.addEventListener("change", ()=> {
    const nuevaFecha = new Date(fechaInput.value);
    valores[3] = nuevaFecha.toISOString();

    fechaTexto.textContent = nuevaFecha.toLocaleDateString("es-ES",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
})

inputs.forEach(input => {
    input.addEventListener("click", ()=> {
        if(input.checked) {

            if(input.name === "cantidadEntrada") {
                valores[0] = input.value;
            } else if(input.name === "cantidadSegundo") {
                valores[1] = input.value;
            } else if(input.name === "cantidadPostre") {
                valores[2] = input.value;
            }

        }
    })
})

formulario.addEventListener("submit", e => {
    e.preventDefault();
    
    if(valores[0] === "" || valores[1] === "" || valores[2] === "") {
        mostrarAlerta("Por favor, selecciona una opción para cada plato.", "error");
        return;
    } else {
        mostrarAlerta("Registro guardado con éxito.", "correcto");
        
    }
    setTimeout(() => {
        window.location.href = "resumen.html";
    }, 2000);
})

function mostrarAlerta(mensaje, error) {
    //Eliminar la alerta previa
    const alertaExistente = document.querySelector(".alerta");
    if(alertaExistente) {
        alertaExistente.remove();
    }

    //Crear notificación
    const alerta = document.createElement("div");
    alerta.classList.add("alerta", "w-[90%]", "mx-auto", "py-4", "border", "text-lg", "px-4", "rounded-md");

    alerta.classList.add(`bg-${error === "error" ? "red" : "green"}-300`);
    alerta.classList.add(`border-${error === "error" ? "red" : "green"}-400`);
    alerta.classList.add(`text-${error === "error" ? "red" : "green"}-700`);
    

    alerta.textContent = mensaje;

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);

    
}

obtenerFecha();
