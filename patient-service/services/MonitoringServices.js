class MonitoringServices {

    IOTImplementation(patientName){
    //IOT Implementation
    console.log(`Monitoreando paciente ${patientName}.`)
    }

    send(patientName){
        //Lógica para enviar la notificación
    console.log(`Enviando notificación a ${patientName}.`);
    }
}
module.exports = MonitoringServices;