class CommsService {
    constructor() {
        this.videoConferences = [];
        this.chatMessages = [];
        this.notifications = [];
    }

    startVideoConference(patientName, doctorName) {
        const videoConference = `Video conference started between Patient ${patientName} and Doctor ${doctorName}`;
        this.videoConferences.push(videoConference);
        console.log(videoConference);
    }

    endVideoConference(patientName, doctorName) {
        const videoConference = `Video conference ended between Patient ${patientName} and Doctor ${doctorName}`;
        this.videoConferences.push(videoConference);
        console.log(videoConference);
    }

    // Simulate a chat
    sendMessage(senderId, receiverId, message) {
        const chatMessage = `Chat message from ${senderId} to ${receiverId}: ${message}`;
        this.chatMessages.push(chatMessage);
        console.log(chatMessage);
    }

    receiveMessage(senderId, receiverId, message) {
        const chatMessage = `Chat message received by ${receiverId} from ${senderId}: ${message}`;
        this.chatMessages.push(chatMessage);
        console.log(chatMessage);
    }
}

module.exports = CommsService;