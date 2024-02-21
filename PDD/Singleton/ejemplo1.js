class Singleton {
  // Constructor de la clase Singleton
  constructor(){
    // Si ya existe una instancia de Singleton, la retorna inmediatamente,
    // evitando así la creación de una nueva instancia.
    if (Singleton.instance){
      return Singleton.instance;
    }

    // Si no hay una instancia existente, se inicializa una propiedad
    // con un valor aleatorio para demostrar que siempre es la misma instancia.
    this.value = Math.random(100);

    // Almacena la instancia recién creada en la propiedad 'instance' de la clase.
    // Esta propiedad es estática y se comparte entre todas las instancias de la clase.
    Singleton.instance = this;

    // Congela la instancia para evitar que se modifiquen sus propiedades.
    // Esto es opcional y depende de si quieres un objeto inmutable.
    // Congela la instancia para prevenir modificaciones
    Object.freeze(this)
  }

  // Método de instancia que permite obtener el valor actual de la propiedad 'value'.
  getValue(){
    return this.value;
  }

  // Método estático que permite acceder a la instancia única de la clase.
  // Si la instancia no existe, la crea por primera vez.
  // Método estático para obtener la instancia
  static getInstance(){
    if(!Singleton.instance){
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

// Creación de una instancia de Singleton.
const instance1 = new Singleton();
// Aquí se muestra en consola el valor de la propiedad 'value'.
// Dado que es la primera instancia, se establece el valor inicial aleatorio.
console.log(instance1.getValue());

// Intento de creación de otra instancia de Singleton.
const instance2 = new Singleton();
// Se muestra en consola el valor de la propiedad 'value' de la segunda instancia.
// Como el patrón Singleton garantiza una única instancia, el valor será el mismo
// que el de la primera instancia.
console.log(instance2.getValue());

// Comparación de las dos instancias para confirmar que son el mismo objeto.
console.log(instance1 === instance2); // true, ya que instance1 e instance2 son el mismo objeto.

// Uso del método estático 'getInstance' para obtener la instancia de Singleton.
const instance3 = Singleton.getInstance();
// Se muestra en consola el valor de la propiedad 'value' de la tercera instancia.
// Nuevamente, el valor será el mismo que el de las instancias anteriores.
console.log(instance3.getValue());

// Comparación de la primera instancia y la obtenida a través de 'getInstance'
// para confirmar que son el mismo objeto.
console.log(instance1 === instance3); // true, ya que instance1 e instance3 son el mismo objeto.