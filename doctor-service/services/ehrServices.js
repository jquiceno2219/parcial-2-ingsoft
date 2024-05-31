const EHR = require('../entities/ehr');

class ehrServices {
    constructor() {
        this.ehrs = [];
    }

    createEHR(id, appointment, content) {
        const newEHR = new EHR(id, appointment, content);
        this.ehrs.push(newEHR);
        return newEHR;
    }

    getEHRById(id) {
        return this.ehrs.find(ehr => ehr.id === id);
    }

    getEHRsByPatientId(patientId) {
        return this.ehrs.filter(ehr => ehr.appointment.patient.id === patientId);
    }

    updateEHR(id, updatedContent) {
        const ehr = this.getEHRById(id);
        if (ehr) {
            ehr.content = updatedContent;
            console.log(`EHR ${id} has been updated.`);
        } else {
            console.log(`EHR ${id} not found.`);
        }
    }
}

module.exports = ehrServices;
