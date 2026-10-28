class Nodo {
    constructor(valor) {
        this.dato = valor;
        this.siguiente = null;
    }
}

class Pila {
    constructor() {
        this.tope = null;
    }

    estaVacia() {
        return this.tope === null;
    }

    apilar(valor) {
        const nuevoNodo = new Nodo(valor);

        nuevoNodo.siguiente = this.tope;
        this.tope = nuevoNodo;
    }

    desapilar() {
        if (this.estaVacia()) {
            alert("La pila está vacía. No hay elementos para retirar.");
        } else {
            const valorRetirado = this.tope.dato;
            this.tope = this.tope.siguiente;

            alert("Se retiró el número: " + valorRetirado);
        }
    }

    consultarTope() {
        if (this.estaVacia()) {
            alert("La pila está vacía. No hay un elemento en el tope.");
        } else {
            alert("El número en el tope es: " + this.tope.dato);
        }
    }
}

const pila = new Pila();
let opcion;

do {
    opcion = prompt(
        "MENÚ DE LA PILA\n" +
        "1. Apilar\n" +
        "2. Desapilar\n" +
        "3. Consultar tope\n" +
        "4. Salir\n\n" +
        "Seleccione una opción:"
    );

    switch (opcion) {
        case "1": {
            const entrada = prompt("Ingrese un número entero:");

            if (entrada !== null) {
                const numero = Number(entrada);

                if (
                    entrada.trim() !== "" &&
                    Number.isSafeInteger(numero)
                ) {
                    pila.apilar(numero);
                    alert("Se apiló el número: " + numero);
                } else {
                    alert("Debe ingresar un número entero válido.");
                }
            }
            break;
        }

        case "2":
            pila.desapilar();
            break;

        case "3":
            pila.consultarTope();
            break;

        case "4":
        case null:
            alert("Programa finalizado.");
            break;

        default:
            alert("Opción incorrecta. Intente nuevamente.");
    }
} while (opcion !== "4" && opcion !== null);