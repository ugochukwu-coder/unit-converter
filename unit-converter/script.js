// document.querySelector('#show__number').addEventListener
// ('click', function() {
//     const show = Number(document.querySelector('#show__number').value);
//     console.log(show);



const btn = document.getElementById("btn")
const lengthParagraph = document.getElementById("length__paragraph")
const volumeParagraph = document.getElementById("volume__paragraph")
const massParagraph = document.getElementById("mass__paragraph")



btn.addEventListener("click", function() {
  const inputNumber = Number(document.getElementById("show__number").value)

  // METER/FEET
   const feet = 3.281;
   const meterValue = inputNumber / feet;
   const feetValue =  inputNumber * feet;
  // 20 meters = 65.620 feet | 20 feet = 6.096 meters
   lengthParagraph.textContent = ` ${inputNumber} meters = ${feetValue.toFixed(3)} feet | ${inputNumber}  feet = ${meterValue.toFixed(3)} meters`;

  // GALLONS/LITERS
   const gallon = 0.264;
   const liter = 3.785;
   const  gallonValue = inputNumber * gallon;
   const literValue = inputNumber *  liter;
  //20 liters = 5.284 gallons | 20 gallons = 75.708 liters
  volumeParagraph.textContent = `${inputNumber} liters = ${gallonValue.toFixed(3)} gallons | ${inputNumber} gallons = ${literValue.toFixed(3)} liters`

  //KILLOS/POUNDS
  const pounds = 2.205;
  const poundValue = inputNumber * pounds
  const kiloValue = inputNumber / pounds
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
  massParagraph.textContent = `${inputNumber} kilos = ${poundValue.toFixed(3)} pounds | ${inputNumber} pounds = ${kiloValue.toFixed(3)} kilos`
})
