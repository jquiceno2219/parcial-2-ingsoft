class Notification {
    constructor(notif_id, patient_id, message, date) {
        this.notif_id = notif_id,
        this.patient_id = patient_id,
        this.message = message,
        this.date = date
    }
}

module.exports = Notification;