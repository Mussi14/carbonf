document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault()
  
    if (document.querySelector("#heavyeater").checked) {
      document.querySelector("#result").value = "7.19 kg CO2"
    }
    if (document.querySelector("#mediumeater").checked) {
      document.querySelector("#result").value = "5.63 kg CO2"
    }
    if (document.querySelector("#loweater").checked) {
      document.querySelector("#result").value = "4.61 kg CO2"
    }
    if (document.querySelector("#pescaterian").checked) {
      document.querySelector("#result").value = "3.91 kg CO2"
    }
    if (document.querySelector("#vegan").checked) {
      document.querySelector("#result").value = "2.89 kg CO2"
    }
    if (document.querySelector("#vegetarian").checked) {
      document.querySelector("#result").value = "3.81 kg CO2"
    }
  
    document.querySelector("form").reset()
  
    const data = localStorage.getItem("data")
  })
  
