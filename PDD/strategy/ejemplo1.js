
// Define la clase base Strategy que actuará como interfaz para las estrategias concretas.
class Strategy {
  // Método execute que deberá ser implementado por las subclases.
  execute(data){
     // Lanza un error si una subclase no implementa este método.
    throw new console.error('method execute() must be implemented');
  }
}

// Define una estrategia concreta que hereda de Strategy, llamada ConcreteStrategyA.
class ConcreteStrategyA extends Strategy {   // Sobrescribe el método execute para realizar una tarea específica, en este caso, ordenar en forma ascendente.
  execute(data){
    // Devuelve el array ordenado de menor a mayor.
    return data.sort((a, b) => a - b)
  }
}

// Define otra estrategia concreta que hereda de Strategy, llamada ConcreteStrategyB.
class ConcreteStrategyB extends Strategy {
  // Sobrescribe el método execute para realizar una tarea específica, en este caso, ordenar en forma descendente.
  execute(data){
    // Devuelve el array ordenado de mayor a menor.
    return data.sort((a, b) => b-a)
  }
}

// Define la clase Context que será usada por el cliente para utilizar una estrategia.
class Context extends Strategy {
  // El constructor acepta una estrategia como argumento para su inicialización.
  constructor(strategy){
    super();
    // Almacena la referencia a la estrategia pasada al contexto.
    this.strategy = strategy
  }
  
  // Permite cambiar la estrategia del contexto en tiempo de ejecución.
  setStrategy(strategy){
    // Actualiza la estrategia del contexto.
    this.strategy = strategy
  }
// Ejecuta la estrategia actualmente asignada al contexto.
  executeStrategy(data){
    // Delega la ejecución a la estrategia, pasando los datos necesarios.
    return this.strategy.execute(data)
  }
}


// Datos de ejemplo a ser ordenados.
const data = [9, 4, 5, 2, 8];

// Crea una instancia de ConcreteStrategyA.
const ascendingStrategy = new ConcreteStrategyA();
// Crea una instancia de ConcreteStrategyB.
const descendingStrategy = new ConcreteStrategyB();

// Crea un contexto y le asigna una estrategia, en este caso, la estrategia ascendente.
const context = new Context(ascendingStrategy);


// Utiliza el contexto para ejecutar la estrategia y ordenar los datos. Imprime el resultado.
console.log('Orden Ascendente:', context.executeStrategy([...data]));

// Cambia la estrategia del contexto a la estrategia descendente.
context.setStrategy(descendingStrategy);


// Utiliza el contexto para ejecutar la nueva estrategia y ordenar los datos. Imprime el resultado.
console.log('Orden Descendente:', context.executeStrategy([...data]));