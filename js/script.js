function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_n4wttum";
    const templateID = "template_2fe5w9c";

    emailjs.send(serviceID, templateID, params) // Corrected function call
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Message sent successfully!");
        }
    )
    .catch(
        err => {
            console.error("Failed to send email:", err);
            alert("Error sending email.");
        }
    );
}