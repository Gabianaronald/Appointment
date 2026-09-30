function bookService(service) {
    document.getElementById('booking-form').style.display = 'block';
    document.getElementById('selected-service').textContent = service;

}

function confirmBooking() {
    
    let name = document.getElementById("name").value;  
    if (name === "") {
    alert("Please enter your name.");
    return;
}
    let date = document.getElementById("date").value;
    if (date === "") {
    alert("Please select a date.");
    return;
}
    let time = document.getElementById("time").value;
    if (time === "") {
    alert("Please select a time.");
    return;
}
    if (time < "09:00" || time > "17:00") {
    alert("Please select a time between 09:00 and 17:00.");
    return;
}
    let service = document.getElementById("selected-service").textContent;
    document.getElementById("summary-service").textContent = "Service: " + service;
    document.getElementById("summary-name").textContent = "Name: " + name;
    document.getElementById("summary-date").textContent = "Date: " + date;
    document.getElementById("summary-time").textContent = "Time: " + time;

    alert(
    "Service: " + service + "\n" +
    "Name: " + name + "\n" +
    "Date: " + date + "\n" +
    "Time: " + time + "\n" +
    "Your booking has been confirmed!"
);
document.getElementById("booking-form").reset();
document.getElementById("booking-form").style.display = "none";
document.getElementById("booking-summary").style.display = "block";
}

function bookAnother() {
    document.getElementById("booking-summary").style.display = "none";
    document.getElementById("booking-form").style.display = "block";
    document.getElementById("selected-service").textContent = "";
}

window.onload = function() {
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("date").min = today;
    document.getElementById("time").min = "09:00";
    document.getElementById("time").max = "17:00";
};