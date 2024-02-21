const { PaymentHandler, CreditCardHandler, PayPalHandler, AntiFraudHandler } = require('./test.js');

describe('Chain of Responsibility Pattern', () => {
    let creditCardHandler;
    let payPalHandler;
    let antiFraudHandler;

    beforeEach(() => {
        // Inicializar los manejadores antes de cada prueba.
        creditCardHandler = new CreditCardHandler();
        payPalHandler = new PayPalHandler();
        antiFraudHandler = new AntiFraudHandler();

        // Configurar la cadena de manejadores.
        antiFraudHandler.setNextHandler(creditCardHandler);
        creditCardHandler.setNextHandler(payPalHandler);
    });

    test('should handle credit card payment', () => {
        const request = { type: 'creditCard', amount: 100, handled: false };
        antiFraudHandler.handle(request);
        expect(request.handled).toBeTruthy();
    });

    test('should handle PayPal payment', () => {
        const request = { type: 'paypal', amount: 200, handled: false };
        antiFraudHandler.handle(request);
        expect(request.handled).toBeTruthy();
    });

    test('should not handle unknown payment type', () => {
        const request = { type: 'bitcoin', amount: 300, handled: false };
        antiFraudHandler.handle(request);
        expect(request.handled).toBeFalsy();
    });
});