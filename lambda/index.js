const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido a la calculadora UTHH. Puedes decirme suma 5 más 3, resta 5 menos 3, divide 10 entre 2 o multiplica 5 por 4. ¿Qué operación te gustaría realizar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = '¡Hola Mundo!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput) {
        const num = parseInt(Alexa.getSlotValue(handlerInput.requestEnvelope, 'num'), 10);
        const numm = parseInt(Alexa.getSlotValue(handlerInput.requestEnvelope, 'numm'), 10);
        
        if (isNaN(num) || isNaN(numm)) {
            const speakOutput = 'Lo siento, no pude entender los números que mencionaste. Por favor, intenta de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }

        const resultado = num + numm;
        const speakOutput = `La suma de ${num} y ${numm} es ${resultado}. ¿Qué más te gustaría hacer?`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Puedes decirme suma, resta, divide o multiplica seguido de dos números.')
            .getResponse();
    }
};

const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput) {
        const num = parseInt(Alexa.getSlotValue(handlerInput.requestEnvelope, 'num'), 10);
        const numm = parseInt(Alexa.getSlotValue(handlerInput.requestEnvelope, 'numm'), 10);
        
        if (isNaN(num) || isNaN(numm)) {
            const speakOutput = 'Lo siento, no pude entender los números que mencionaste. Por favor, intenta de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }

        const resultado = num - numm;
        const speakOutput = `La resta de ${num} menos ${numm} es ${resultado}. ¿Qué más te gustaría hacer?`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Puedes decirme suma, resta, divide o multiplica seguido de dos números.')
            .getResponse();
    }
};

const DivideIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivideIntent';
    },
    handle(handlerInput) {
        const num = parseInt(Alexa.getSlotValue(handlerInput.requestEnvelope, 'num'), 10);
        const numm = parseInt(Alexa.getSlotValue(handlerInput.requestEnvelope, 'numm'), 10);
        
        if (isNaN(num) || isNaN(numm)) {
            const speakOutput = 'Lo siento, no pude entender los números que mencionaste. Por favor, intenta de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }

        if (numm === 0) {
            const speakOutput = 'No se puede dividir entre cero. Por favor, intenta con un divisor diferente de cero.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }

        const resultado = num / numm;
        const speakOutput = `La división de ${num} entre ${numm} es ${resultado}. ¿Qué más te gustaría hacer?`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Puedes decirme suma, resta, divide o multiplica seguido de dos números.')
            .getResponse();
    }
};

const MultiplicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicaIntent';
    },
    handle(handlerInput) {
        const num = parseInt(Alexa.getSlotValue(handlerInput.requestEnvelope, 'num'), 10);
        const numm = parseInt(Alexa.getSlotValue(handlerInput.requestEnvelope, 'numm'), 10);
        
        if (isNaN(num) || isNaN(numm)) {
            const speakOutput = 'Lo siento, no pude entender los números que mencionaste. Por favor, intenta de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }

        const resultado = num * numm;
        const speakOutput = `La multiplicación de ${num} por ${numm} es ${resultado}. ¿Qué más te gustaría hacer?`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Puedes decirme suma, resta, divide o multiplica seguido de dos números.')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes decirme suma 5 más 3, resta 5 menos 3, divide 10 entre 2 o multiplica 5 por 4. ¿Cómo puedo ayudarte?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Adiós!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no entiendo esa solicitud. Por favor, intenta de nuevo.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Sesión terminada: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Acabas de activar ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tuve problemas para hacer lo que pediste. Por favor, intenta de nuevo.';
        console.log(`~~~~ Error manejado: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
                LaunchRequestHandler,
        HelloWorldIntentHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        DivideIntentHandler,
        MultiplicaIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler
    )
    .addErrorHandlers(ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();

