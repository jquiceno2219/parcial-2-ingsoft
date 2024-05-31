class Patient{
    constructor(id, name, document, phoneNumber, birthDate, medicalHistory) {
        this.id = id,
        this.name = name,
        this.document = document,
        this.phoneNumber = phoneNumber,
        this.birthDate = birthDate,
        this.medicalHistory = medicalHistory
    }
}

module.exports = Patient;

//TESTING
//const  patient1= new Patient (1,"Juan", "111", "315", "Jun 2022", 54)
//console.log(patient1) 