document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const profileData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        bloodType: document.getElementById("bloodType").value,
        contactNumber: document.getElementById("contactNumber").value,
        emergencyContact: document.getElementById("emergencyContact").value,
        profilePicture: document.getElementById("profilePicture").files[0]?.name || ""
    };
    console.log("Profile Data:", profileData);
    alert("Profile Saved Successfully!");
});
const appointmentsList = document.getElementById("appointmentsList");

document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const doctorName = document.getElementById("doctorName").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const appointmentTime = document.getElementById("appointmentTime").value;

    const appointmentItem = document.createElement("li");
    appointmentItem.textContent = `${doctorName} - ${appointmentDate} at ${appointmentTime}`;
    appointmentsList.appendChild(appointmentItem);

    alert("Appointment Scheduled Successfully!");
});
// Star rating functionality
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', function() {
        const ratingValue = this.getAttribute('data-value');
        document.getElementById('ratingValue').value = ratingValue;

        stars.forEach(s => {
            s.classList.remove('selected');
        });
        for (let i = 0; i < ratingValue; i++) {
            stars[i].classList.add('selected');
        }
    });
});

// Feedback form submission
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const doctorName = document.getElementById("doctorName").value;
    const feedbackText = document.getElementById("feedbackText").value;
    const ratingValue = document.getElementById("ratingValue").value;

    const feedbackItem = document.createElement("li");
    feedbackItem.textContent = `${doctorName} - Rating: ${ratingValue}/5 - Feedback: ${feedbackText}`;
    document.getElementById("feedbackList").appendChild(feedbackItem);

    // Reset form fields
    this.reset();
    stars.forEach(s => s.classList.remove('selected'));
    document.getElementById('ratingValue').value = "0";

    alert("Feedback submitted successfully!");
});
document.getElementById("prescriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const medicineName = document.getElementById("medicineName").value;
    const dosage = document.getElementById("dosage").value;
    const frequency = document.getElementById("frequency").value;
    const doctor = document.getElementById("doctor").value;

    const medicationItem = document.createElement("li");
    medicationItem.textContent = `${medicineName} - ${dosage}, ${frequency}, prescribed by ${doctor}`;
    document.getElementById("medicationList").appendChild(medicationItem);

    alert("Prescription added successfully!");
});
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const doctor = document.getElementById("doctorSelect").value;
    const message = document.getElementById("message").value;

    const messageItem = document.createElement("li");
    messageItem.textContent = `To ${doctor}: ${message}`;
    document.getElementById("messagesList").appendChild(messageItem);

    alert("Message sent successfully!");
});
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const service = document.getElementById("service").value;
    const amount = document.getElementById("amount").value;
    const paymentMethod = document.getElementById("paymentMethod").value;

    const billingItem = document.createElement("li");
    billingItem.textContent = `Service: ${service}, Amount: $${amount}, Payment Method: ${paymentMethod}`;
    document.getElementById("billingHistory").appendChild(billingItem);

    // Reset form fields
    this.reset();
    alert("Payment successful!");
});
document.getElementById("healthForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const healthData = document.getElementById("healthData").value;
    const value = document.getElementById("value").value;

    const healthItem = document.createElement("li");
    healthItem.textContent = `${healthData}: ${value}`;
    document.getElementById("healthDataList").appendChild(healthItem);

    // Reset form fields
    this.reset();
    alert("Health data submitted successfully!");
});
document.getElementById("callEmergencyButton").addEventListener("click", function() {
    // This is a placeholder for the emergency call functionality
    alert("Calling Ambulance... (This is a simulation, no real call will be made.)");
});

document.getElementById("emergencyInfoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const allergies = document.getElementById("allergies").value;
    const chronicConditions = document.getElementById("chronicConditions").value;
    const medications = document.getElementById("medications").value;

    const emergencyInfoItem = document.createElement("li");
    emergencyInfoItem.textContent = `Allergies: ${allergies}, Chronic Conditions: ${chronicConditions}, Medications: ${medications}`;
    document.getElementById("emergencyInfoList").appendChild(emergencyInfoItem);

    // Reset form fields
    this.reset();
    alert("Emergency information saved successfully!");
});
const resources = [
    { title: "Understanding Diabetes", link: "https://www.diabetes.org/" },
    { title: "Healthy Eating Tips", link: "https://www.eatright.org/" },
    { title: "Managing Chronic Conditions", link: "https://www.chronicdisease.org/" },
    { title: "Physical Activity Guidelines", link: "https://www.cdc.gov/physicalactivity/index.html" },
    { title: "Mental Health Resources", link: "https://www.nami.org/" }
];

document.getElementById("searchButton").addEventListener("click", function() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredResources = resources.filter(resource => resource.title.toLowerCase().includes(query));

    const resourceList = document.getElementById("resourceList");
    resourceList.innerHTML = "";

    if (filteredResources.length > 0) {
        filteredResources.forEach(resource => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${resource.link}" target="_blank">${resource.title}</a>`;
            resourceList.appendChild(listItem);
        });
    } else {
        resourceList.innerHTML = "<li>No resources found.</li>";
    }
});
const translations = {
    en: {
        greeting: "Welcome to the Patient Portal!"
    },
    es: {
        greeting: "¡Bienvenido al Portal del Paciente!"
    },
    fr: {
        greeting: "Bienvenue sur le portail des patients !"
    },
    de: {
        greeting: "Willkommen im Patientenportal!"
    }
};

document.getElementById("languageSelect").addEventListener("change", function() {
    const selectedLang = this.value;
    document.getElementById("greeting").textContent = translations[selectedLang].greeting;
});
document.getElementById("enable2FAButton").addEventListener("click", function() {
    alert("Two-Factor Authentication has been enabled (simulated).");
});

document.getElementById("changeRoleButton").addEventListener("click", function() {
    const newRole = prompt("Enter new role (e.g., Patient, Doctor, Admin):");
    if (newRole) {
        document.getElementById("currentRole").textContent = newRole;
        alert(`Role changed to: ${newRole}`);
    }
});
let weightHistory = [];

document.getElementById("addWeightButton").addEventListener("click", function() {
    const weight = document.getElementById("weightInput").value;
    if (weight) {
        weightHistory.push(weight);
        updateWeightHistoryList();
        document.getElementById("weightInput").value = ""; // Reset input
    } else {
        alert("Please enter a weight.");
    }
});

function updateWeightHistoryList() {
    const weightHistoryList = document.getElementById("weightHistoryList");
    weightHistoryList.innerHTML = "";
    weightHistory.forEach(weight => {
        const listItem = document.createElement("li");
        listItem.textContent = `Weight: ${weight} kg`;
        weightHistoryList.appendChild(listItem);
    });
}

document.getElementById("downloadReportButton").addEventListener("click", function() {
    const reportContent = `Medical History Report\n\nWeight History:\n${weightHistory.join(", ")} kg`;
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "medical_history_report.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
