// set initial count
let count = 0

// selecting value and buttons
const buttons = document.querySelectorAll(".btn")
const value = document.querySelector("#value")

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("decrease")) {
      count--
    } else if (style.contains("increase")) {
      count++
    } else {
      count = 0
    }
    if (count > 0) {
      value.style.color = "lightgreen"
      value.style.transition = "0.5s ease"

    } else if (count < 0) {
      value.style.color = "#ffcccb "
      value.style.transition = "0.5s ease"

    } else {
      value.style.color = "black"
    }

    if (count > 9) {
      value.style.color = "green"

    }
    if (count < -9) {
      value.style.color = "red"

    }
    value.textContent = count
  })
})
