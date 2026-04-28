let selectedDoctor = "";
let selectedTime = "";

function selectDoctor(name) {
  selectedDoctor = name;
  updateSummary();
}

function selectTime(time) {
  selectedTime = time;
  updateSummary();
}

function updateSummary() {
  document.getElementById("summary").innerText =
    selectedDoctor && selectedTime
      ? `${selectedDoctor} at ${selectedTime}`
      : "No selection yet";
}

function confirmBooking() {
  if (!selectedDoctor || !selectedTime) {
    alert("Please select doctor and time");
    return;
  }
  alert("Appointment Confirmed!");
}
