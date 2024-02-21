class PaymentHandler {
  constructor() {
      this.nextHandler = null;
  }

  setNextHandler(handler) {
      this.nextHandler = handler;
  }

  handle(request) {
      if (this.nextHandler) {
          this.nextHandler.handle(request);
      }
  }
}

class CreditCardHandler extends PaymentHandler {
  handle(request) {
      if (request.type === 'creditCard') {
          request.handled = true;
      } else {
          super.handle(request);
      }
  }
}

class PayPalHandler extends PaymentHandler {
  handle(request) {
      if (request.type === 'paypal') {
          request.handled = true;
      } else {
          super.handle(request);
      }
  }
}

class AntiFraudHandler extends PaymentHandler {
  handle(request) {
      // La verificación anti-fraude se realiza aquí.
      super.handle(request);
  }
}

module.exports = { PaymentHandler, CreditCardHandler, PayPalHandler, AntiFraudHandler };