document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const tripTypeInputs = document.querySelectorAll("input[name='trip']");
  const returnDateInput = document.getElementById("returnDate");
  const fareButtons = document.querySelectorAll(".fare-button");
  const searchButton = document.getElementById("searchButton");

  // Tab switching functionality
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  // Enable/Disable return date based on trip type
  tripTypeInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      if (event.target.value === "Round Trip") {
        returnDateInput.disabled = false;
      } else {
        returnDateInput.disabled = true;
        returnDateInput.value = "";
      }
    });
  });

  // Highlight selected fare option
  fareButtons.forEach((button) => {
    button.addEventListener("click", () => {
      fareButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // Collect data and log on Search button click
  searchButton.addEventListener("click", () => {
    const tripType = document.querySelector("input[name='trip']:checked").value;
    const fromCity = document.getElementById("fromInput").value;
    const toCity = document.getElementById("toInput").value;
    const departureDate = document.getElementById("departureDate").value;
    const returnDate = document.getElementById("returnDate").value;
    const travellersClass = document.getElementById("travellerClass").value;
    const fare = document.querySelector(".fare-button.active").dataset.fare;

    console.log({
      tripType,
      fromCity,
      toCity,
      departureDate,
      returnDate: returnDate || "N/A",
      travellersClass,
      fare,
    });
    alert("Search submitted! Check console for details.");
  });
});
