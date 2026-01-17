// Events data (with date & time)
const events = [
  { title: "Prayer Night", date: "October 15, 2025", time: "07:30 PM" },
  { title: "National Youth Conference", date: "December 06, 2025", time: "07:00 AM" },
  { title: "Prayer Breakfast", date: "October 25, 2025", time: "05:00 AM" }
];

// Populate event list
const list = document.getElementById("eventList");
events.forEach(event => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${event.title}</strong><br>${event.date} • ${event.time}`;
  list.appendChild(li);
});

// Navigation behavior
function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
