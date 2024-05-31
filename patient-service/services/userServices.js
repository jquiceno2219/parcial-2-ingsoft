const Patient = require("../entities/patient");
const Doctor = require("../../doctor-service/entities/doctor");

class UserServices {
    constructor() {
        this.patients = [];
        this.doctors = [];
    }

    createPatient(id, name, document, phoneNumber, birthDate, medicalHistory) {
        const newPatient = new Patient(id, name, document, phoneNumber, birthDate, medicalHistory);
        this.patients.push(newPatient);
        return newPatient;
    }

    createDoctor(id, name, document, phoneNumber, birthDate) {
        const newDoctor = new Doctor(id, name, document, phoneNumber, birthDate);
        this.doctors.push(newDoctor);
        return newDoctor;
    }

    deletePatient(patientId) {
        this.patients = this.patients.filter(patient => patient.id !== patientId);
        console.log(`Patient ${patientId} has been deleted.`);
    }

    deleteDoctor(doctorId) {
        this.doctors = this.doctors.filter(doctor => doctor.id !== doctorId);
        console.log(`Doctor ${doctorId} has been deleted.`);
    }

    updatePatient(patientId, updatedData) {
        const patient = this.patients.find(patient => patient.id === patientId);
        if (patient) {
            Object.assign(patient, updatedData);
            console.log(`Patient ${patientId} has been updated.`);
        } else {
            console.log(`Patient ${patientId} not found.`);
        }
    }

    updateDoctor(doctorId, updatedData) {
        const doctor = this.doctors.find(doctor => doctor.id === doctorId);
        if (doctor) {
            Object.assign(doctor, updatedData);
            console.log(`Doctor ${doctorId} has been updated.`);
        } else {
            console.log(`Doctor ${doctorId} not found.`);
        }
    }

    getPatientById(id) {
        return this.patients.find(patient => patient.id === id);
    }

    getDoctorById(id) {
        return this.doctors.find(doctor => doctor.id === id);
    }
}

module.exports = UserServices;
