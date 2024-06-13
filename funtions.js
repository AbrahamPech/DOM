    // Parte 1 -- ByID
    // -- document.getElementById("demo").innerHTML = "Hola mundo";

    const elemento = document.getElementById("nitro")
    // --elemento.innerHTML = "Hola mundo 2"

    // document.getElementById("p1").innerHTML =  "Nuevo texto"

    const elemento2 = document.getElementById("titulo")
    // --elemento2.innerHTML = "Nuevo encabezado"

    // Parte 2 -- ByName y ByTagName
    const elemento3 = document.getElementsByName("p")
    
    const x = document.getElementById("main")
    // --console.log(x);
    const y = document.getElementsByClassName("p")
    // --console.log(y);

    // Parte 3 -- ByClassName
    const elemento4 = document.getElementsByClassName("intro")
    // --console.log(elemento4)

    const elemento5 = document.querySelectorAll("p.intro")
    // --console.log(elemento5)
    
    const ListItems = document.querySelectorAll("ul > li")
    // --console.log(ListItems);

    const h1Element = document.querySelector("h1")
    // --console.log(h1Element)

    const listElement = document.querySelector(".list");
    // --console.log(listElement);

    ListItems.forEach((item)=> {
        console.log(item);
    });

    // --h1Element.style.color = "blue";

    const frm1 = document.forms["frm1"];
    let texto = "";
    for (let i = 0; i < frm1.length; i++) {
        texto += frm1.elements[i].value + "<br>";
    }
    // --document.getElementById("demo2").innerHTML = texto;
    // --console.log(frm1);

    let lista = document.createElement("ul");
    document.getElementById("lista-container").appendChild(lista);

    let elemento6 = document.createElement("li");
    // --elemento6.textContent = "Flor";
    // --lista.appendChild(elemento6);

    let elemento7 = document.createElement("li");
    //--elemento7.textContent = "Jaguar";
    // --lista.appendChild(elemento7);

    const button = document.getElementById("btn");
    button.addEventListener("click", () => {
        alert("Gracias por dar Click");
    });

    // Parte 8a: Validación de formulario
    function validarFormulario() {
        let x = document.forms["miFormulario"]["nombre"].value;
        if (x === "") {
            alert("Se debe completar el nombre");
            return false;
        }
    }
    
    // Parte 8b: Validar la entrada numérica
    function miFunction() {
        let x = document.getElementById("numero").value;
        let texto;
        if (isNaN(x) || x < 1 || x > 10) {
            texto = "Entrada no válida";
        } else {
            texto = "Entrada correcta";
        }
        document.getElementById("demo3").innerHTML = texto;
    }
    
    // Parte 9: Cambiar el valor de un atributo
    function cambiarImagen() {
        document.getElementById("miImagen").src = "img/img1.webp";
    }
    
    // Parte 10: Contenido dinámico
    function mostrarFecha() {
        document.getElementById("demo4").innerHTML = new Date();
    }

