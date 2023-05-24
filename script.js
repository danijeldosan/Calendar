// GLOBAL VARIABLES - THE MEMORY OF CALENDAR

let exampleAppointment = { time: "9:00", title: "Doctor appointment" };

let exampleAppointmentForDay = [
  { time: "9:00", title: "Doctor appointment" },
  { time: "12:30", title: "Lunch" },
];

let appointments = [
  // EXAMPLE
  //  [
  //    { time: "9:00", title: "Meeting with my department" },
  //    { time: "12:30", title: "Lunch" },
  //  ], // Day 1
  //  [], // Day 2
  //  [], // Day 3
  //  [{ time: "12:00", title: "Lunch in the city center" }], // Day 4
  //  [], //.... up to 30
];

function visualizeAppointments() {
  // First thing we do to visualize the appointments for the day:
  // we just clear the appointments ul tag content, so that
  // we have a clean area where to visualize the new appointments.
  document.getElementById("appointments-list").innerHTML = "";

  let selectedDay = document.querySelector(".selected").innerText;
  let selectedDayNumber = parseInt(selectedDay);
  let index = selectedDayNumber - 1; // Days start from 1, but arrays count from 0
  let appointmentsForSelectedDay = appointments[index];

  for (let appointment of appointmentsForSelectedDay) {
    // 1) We create the appointment tag
    let appointmentLi = document.createElement("li");

    // 2) We customize it
    // We format the data inside the object as we want to display it:
    appointmentLi.innerText = `${appointment.time} -- ${appointment.title}`;
    // ANOTHER WAY TO DO THE SAME THING:
    // appointmentLi.innerText = appointment.time + " -- " + appointment.title;

    // 3) We append it somewhere in the DOM
    document.getElementById("appointments-list").appendChild(appointmentLi);
  }
  // This is just a nicer way to iterate through an array.
  // We could have just used a normal for/while loop.
}

function selectDay(event) {
  // Remove the class selected from the previously selected day
  let previouslySelectedDay = document.querySelector(".selected"); // Get the first node matching the .selected selector

  if (previouslySelectedDay !== null) {
    previouslySelectedDay.classList.remove("selected");
  }

  // Clicked a day!
  let clickedDayNode = event.target;
  clickedDayNode.classList.add("selected");
}

function onDayClick(event) {
  selectDay(event);
  visualizeAppointments();
}

function saveAppointment() {
  // 1) We get the two input values
  let inputTime = document.getElementById("appointment-time").value;
  let inputTitle = document.getElementById("appointment-title").value;

  let appointmentObject = {
    // We put the two values in a new object.
    time: inputTime,
    title: inputTitle,
  };

  // We are ready to store this appointment object in our list of appointments

  let selectedDay = document.querySelector(".selected").innerText;
  let selectedDayNumber = parseInt(selectedDay);
  let index = selectedDayNumber - 1;
  let appointmentsForSelectedDay = appointments[index];

  appointmentsForSelectedDay.push(appointmentObject);

  // After adding this new element, we need to visualize again the lis of appointments for the day
  visualizeAppointments();
}

function onLoadAction() {
  // The function that will be called right after the page loads
  // We do here everything we want to do as soon as the page loads.

  // Visualise the days.
  // Assumption: let's display 30 days, always.
  for (let day = 1; day <= 30; day++) {
    // 1) Create a div for the day
    let dayNode = document.createElement("div");
    // 2) Customize it as needed
    dayNode.classList.add("day");
    dayNode.innerText = day;
    dayNode.addEventListener("click", onDayClick);
    // 3) Append it / add it somewhere in the DOM
    document.getElementById("days-container").appendChild(dayNode);

    // For every day we create, we also want to have a list where to store the appointments for that day
    appointments.push([
      // We add this EMPTY LIST so that we can store here appointments
    ]);
  }
}

window.onload = onLoadAction;
