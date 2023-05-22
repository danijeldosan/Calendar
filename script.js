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
    // 3) Append it / add it somewhere in the DOM
    document.getElementById("days-container").appendChild(dayNode);
  }
}

window.onload = onLoadAction;
