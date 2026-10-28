class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    agregarAlFinal(valor) {
        const nuevoNodo = new Nodo(valor);
        if (this.cabeza === null) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    mostrar() {
        if (this.cabeza === null) {
            console.log("La lista enlazada está vacía.");
            return;
        }
        let actual = this.cabeza;
        let posicion = 1;
        while (actual !== null) {
            console.log(`Posición ${posicion}: ${actual.valor}`);
            actual = actual.siguiente;
            posicion++;
        }
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lista = new ListaEnlazada();

function cargarDatos() {
    rl.question('Ingrese un número entero (o "FIN" para terminar): ', (entrada) => {
        if (entrada.trim().toUpperCase() === 'FIN') {
            lista.mostrar();
            rl.close();
        } else {
            const numero = parseInt(entrada, 10);
            if (!isNaN(numero)) {
                lista.agregarAlFinal(numero);
            }
            cargarDatos();
        }
    });
}

cargarDatos();