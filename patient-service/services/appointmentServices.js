const Appointment = require("../entities/appointment");
const ehrServices = require('../../doctor-service/services/ehrServices');

class AppointmentServices {
    constructor(userServices, ehrServices) {
        this.appointments = [];
        this.userServices = userServices;
        this.ehrServices = ehrServices;
    }

    createAppointment(id, doctor, patient, date) {
        if (this.isDateAvailable(doctor, date)) {
            const newAppointment = new Appointment(id, doctor, patient, date);
            this.appointments.push(newAppointment);
            return newAppointment;
        } else {
            console.log('The date is not available for this doctor.');
            return null;
        }
    }

    cancelAppointment(appointment) {
        if (appointment.status === 'Scheduled') {
            appointment.status = 'Cancelled';
            console.log(`Appointment ${appointment.id} has been cancelled.`);
        } else {
            console.log(`Appointment ${appointment.id} cannot be cancelled because it is already ${appointment.status}.`);
        }
    }

    rescheduleAppointment(appointment, newDate) {
        if (appointment.status === 'Scheduled' && this.isDateAvailable(appointment.doctor, newDate)) {
            appointment.date = newDate;
            console.log(`Appointment ${appointment.id} has been rescheduled to ${appointment.date}.`);
        } else {
            console.log(`Appointment ${appointment.id} cannot be rescheduled because it is ${appointment.status} or the date is not available.`);
        }
    }

    isDateAvailable(doctor, date) {
        return !this.appointments.some(app => app.doctor.id === doctor.id && app.date === date && app.status === 'Scheduled');
    }

    createEHRFromAppointment(ehrId, appointment, content) {
        return this.ehrServices.createEHR(ehrId, appointment, content);
    }

    getAppointmentById(id) {
        return this.appointments.find(appointment => appointment.id === id);
    }
}

module.exports = AppointmentServices;