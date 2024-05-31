class Appointment{
    constructor(id, doctor, patient, date){
        this.id = id,
        this.doctor = doctor,
        this.patient = patient,
        this.date = date,
        this.status = "Scheduled"  //Scheduled or Cancelled
    }
}

module.exports = Appointment;