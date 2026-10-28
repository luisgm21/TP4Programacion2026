class Nodo {
    constructor(valor) {
        this.dato = valor;
        this.siguiente = null;
    }
}

class Cola {
    constructor() {
        this.frente = null;
        this.final = null;
    }

    estaVacia() {
        return this.frente === null;
    }

    encolar(valor) {
        const nuevoNodo = new Nodo(valor);

        if (this.estaVacia()) {
            this.frente = nuevoNodo;
            this.final = nuevoNodo;
        } else {
            this.final.siguiente = nuevoNodo;
            this.final = nuevoNodo;
        }
    }

    desencolar() {
        if (this.estaVacia()) {
            alert("La cola está vacía. No hay elementos para retirar.");
        } else {
            const valorRetirado = this.frente.dato;
            this.frente = this.frente.siguiente;

            // Si se retiró el último nodo, la cola queda vacía.
            if (this.frente === null) {
                this.final = null;
            }

            alert("Se retiró el número: " + valorRetirado);
        }
    }

    consultarFrente() {
        if (this.estaVacia()) {
            alert("La cola está vacía. No hay un elemento al frente.");
        } else {
            alert("El número al frente es: " + this.frente.dato);
        }
    }
}

const cola = new Cola();
let opcion;

do {
    opcion = prompt(
        "MENÚ DE LA COLA\n" +
        "1. Encolar\n" +
        "2. Desencolar\n" +
        "3. Consultar frente\n" +
        "4. Salir\n\n" +
        "Seleccione una opción:"
    );

    switch (opcion) {
        case "1": {
            const entrada = prompt("Ingrese un número entero:");

            if (entrada !== null) {
                const numero = Number(entrada);

                if (entrada.trim() !== "" && Number.isSafeInteger(numero)) {
                    cola.encolar(numero);
                    alert("Se encoló el número: " + numero);
                } else {
                    alert("Debe ingresar un número entero válido.");
                }
            }
            break;
        }

        case "2":
            cola.desencolar();
            break;

        case "3":
            cola.consultarFrente();
            break;

        case "4":
        case null:
            alert("Programa finalizado.");
            break;

        default:
            alert("Opción incorrecta. Intente nuevamente.");
    }
} while (opcion !== "4" && opcion !== null);