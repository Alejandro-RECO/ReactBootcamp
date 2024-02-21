// Definición de una clase abstracta base para los manejadores de la cadena.
class PaymentHandler {
  constructor() {
      // Inicialmente, no hay un siguiente manejador asignado.
      this.nextHandler = null;
  }

  // Método para establecer el siguiente manejador en la cadena.
  setNextHandler(handler) {
      this.nextHandler = handler;
  }

  // Método para manejar la solicitud. Si el manejador actual no puede procesarla,
  // delega la solicitud al siguiente manejador en la cadena (si existe).
  handle(request) {
      if (this.nextHandler) {
          this.nextHandler.handle(request);
      }
  }
}

// Manejador concreto para pagos con tarjeta de crédito.
class CreditCardHandler extends PaymentHandler {
  handle(request) {
      // Comprueba si el manejador actual puede procesar la solicitud.
      if (request.type === 'creditCard') {
          // Procesa el pago con tarjeta de crédito.
          console.log(`Procesando pago con tarjeta de crédito por ${request.amount}`);
          // Aquí se añadiría la lógica de procesamiento.
      } else {
          // Si no puede manejarla, pasa la solicitud al siguiente manejador en la cadena.
          super.handle(request);
      }
  }
}

// Manejador concreto para pagos con PayPal.
class PayPalHandler extends PaymentHandler {
  handle(request) {
      // Comprueba si el manejador actual puede procesar la solicitud de PayPal.
      if (request.type === 'paypal') {
          // Procesa el pago con PayPal.
          console.log(`Procesando pago con PayPal por ${request.amount}`);
          // Aquí se añadiría la lógica de procesamiento.
      } else {
          // Si no puede manejarla, pasa la solicitud al siguiente manejador en la cadena.
          super.handle(request);
      }
  }
}

// Manejador concreto para la verificación anti-fraude.
class AntiFraudHandler extends PaymentHandler {
  handle(request) {
      // Realiza la verificación anti-fraude antes de pasar la solicitud al siguiente manejador.
      console.log('Realizando verificación anti-fraude');
      // Aquí se añadiría la lógica de verificación anti-fraude.
      
      // Pasa la solicitud al siguiente manejador en la cadena.
      super.handle(request);
  }
}

// Creación de instancias de los manejadores concretos.
const creditCardHandler = new CreditCardHandler();
const payPalHandler = new PayPalHandler();
const antiFraudHandler = new AntiFraudHandler();

// Configuración de la cadena de manejadores.
// Aquí, la solicitud primero pasará por la verificación anti-fraude,
// luego intentará procesarse con tarjeta de crédito,
// y finalmente con PayPal si las opciones anteriores no la procesaron.
antiFraudHandler.setNextHandler(creditCardHandler);
creditCardHandler.setNextHandler(payPalHandler);


// Ejemplo de solicitud de pago.
const paymentRequest = { type: 'creditCard', amount: 100 };

// Iniciar el procesamiento de la solicitud a través de la cadena de manejadores.
// La solicitud se pasa al `AntiFraudHandler` primero.
antiFraudHandler.handle(paymentRequest);