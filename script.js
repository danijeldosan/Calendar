function onDayClick(eventData) {
  // Remove the class selected from the previously selected day
  let previouslySelectedDay = document.querySelector(".selected"); // Get the first node matching the .selected selector

  if (previouslySelectedDay !== null) {
    previouslySelectedDay.classList.remove("selected");
  }

  // Clicked a day!
  let clickedDayNode = eventData.target;
  clickedDayNode.classList.add("selected");
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
  }
}

window.onload = onLoadAction;
