const readline = require('readline');
const Patient = require('./patient-service/entities/patient');
const Doctor = require('./doctor-service/entities/doctor');
const Appointment = require('./patient-service/entities/appointment');
const UserManager = require('./patient-service/services/userServices');
const AppointmentManager = require('./patient-service/services/appointmentServices');
const EHRManager = require('./doctor-service/services/ehrServices');
const CommsService = require('./doctor-service/services/commsServices');
const MonitoringServices = require('./patient-service/services/MonitoringServices')

const userManager = new UserManager();
const ehrManager = new EHRManager();
const appointmentManager = new AppointmentManager(userManager, ehrManager);
const commsService = new CommsService();
const monitoringServices = new MonitoringServices();


// Crear pacientes y doctores
const patient1 = userManager.createPatient(1, 'John Doe', '12345678', '123-456-7890', '1990-01-01', 'Healthy');
const patient2 = userManager.createPatient(2, 'Jane Smith', '87654321', '987-654-3210', '1985-06-15', 'Allergies');
const doctor1 = userManager.createDoctor(1, 'Dr. Smith', '87654321', '098-765-4321', '1980-05-10');

// Crear citas
const appointment1 = appointmentManager.createAppointment(1, doctor1, patient1, '2024-06-01T10:00:00');
const appointment2 = appointmentManager.createAppointment(2, doctor1, patient2, '2024-06-02T11:00:00');

// Crear EHRs
appointmentManager.createEHRFromAppointment(1, appointment1, 'Patient presented with mild symptoms of flu.');
appointmentManager.createEHRFromAppointment(2, appointment2, 'Patient presented with allergic reaction.');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const menu = `Bienvenido. Seleccione una opción.
1. Gestión de citas médicas e historiales médicos.
2. Comunicación en tiempo real.
3. Monitoreo de Salud en remoto y notificaciones.
4. Salir del sistema`;

function displayMenu() {
console.log(menu);

rl.question('Ingrese el número de la opción: ', (opcion) => {
    switch (opcion) {
        case '1':
            // Recuperar EHRs por ID de paciente
            const patient1EHRs = ehrManager.getEHRsByPatientId(1);
            const patient2EHRs = ehrManager.getEHRsByPatientId(2);
            
            console.log('EHRs for patient 1:');
            console.log(patient1EHRs);
            
            console.log('EHRs for patient 2:');
            console.log(patient2EHRs);
            displayMenu();
            break;

        case '2':
            // ===========================================CHATS======================================
            console.log('Ejecutando métodos de CommsService con pacientes y doctores de ejemplo...\n');
            
            console.log('Iniciando videoconferencias:');
            commsService.startVideoConference(patient1.name, doctor1.name);
            commsService.startVideoConference(patient2.name, doctor1.name);
        
            console.log('\nTerminando videoconferencias:');
            commsService.endVideoConference(patient1.name, doctor1.name);
            commsService.endVideoConference(patient2.name, doctor1.name);

            function simulateChatMessage(senderId, receiverId, message, delay) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                    commsService.sendMessage(senderId, receiverId, message);
                resolve();
                }, delay);
            });
        }
            
            async function simulateChat() {
                console.log('\nEnviando mensajes de chat:');
                await simulateChatMessage(patient1.name, doctor1.name, 'Hola Doctor.', 1000);
                await simulateChatMessage(doctor1.name, patient1.name, 'Hola John, ¿cómo te sientes hoy?', 2000);
                await simulateChatMessage(patient2.name, doctor1.name, 'Doctor, necesito hablar con usted.', 1000);
                await simulateChatMessage(doctor1.name, patient2.name, 'Claro Jane, ¿qué ocurre?', 2000);

                console.log('\nRecibiendo mensajes de chat:');
                await simulateChatMessage(patient1.name, doctor1.name, 'Me siento mejor, gracias.', 1000);
                await simulateChatMessage(patient2.name, doctor1.name, 'Tengo una reacción alérgica.', 1000);
                
                console.log('\nOperaciones completadas.');

                callback();
            }
            // Simulación de chat
            simulateChat();
            break;

        case '3':
            // ====== MONITOREO REMOTO
            // Implementación de monitoreo
            console.log('\nEjecutando monitoreo:');
            monitoringServices.IOTImplementation(patient1.name);
            monitoringServices.send(patient1.name);
            
            console.log('\nMonitoreo completado.\n');
            displayMenu();
            break;

        case '4':
            console.log("Saliendo del sistema");
            rl.close();
            break;

        default:
            console.log('Opción no válida. Por favor, reintentar.')
            break;
        }
    });
}

function callback() {
    displayMenu();
}

displayMenu();