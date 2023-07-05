"use strict";

//# Number Methods

//? 1_1

console.log("=================1_1================");

let num1 = 15.16698;
let num2 = 7.78714;
let num3 = "12.3";
let num4 = "3.14384703";
let num5 = "32px";
let num6 = true;
let num7 = false;
let num8 = "321";
let num9 = "Supercode";

const precision = (number, decimalPlaces) => number.toPrecision(decimalPlaces);

console.log(precision(num1, 2));
console.log(precision(num2, 2));
console.log(precision(Number(num3), 2));
console.log(precision(Number(num4), 2));
console.log(precision(Number(num5), 2));
console.log(precision(Number(num6), 2));
console.log(precision(Number(num7), 2));
console.log(precision(Number(num8), 2));
console.log(precision(Number(num9), 2));

console.log(precision(num1, 3));
console.log(precision(num2, 3));
console.log(precision(Number(num3), 3));
console.log(precision(Number(num4), 3));
console.log(precision(Number(num5), 3));
console.log(precision(Number(num6), 3));
console.log(precision(Number(num7), 3));
console.log(precision(Number(num8), 3));
console.log(precision(Number(num9), 3));

console.log(precision(num1, 5));
console.log(precision(num2, 5));
console.log(precision(Number(num3), 5));
console.log(precision(Number(num4), 5));
console.log(precision(Number(num5), 5));
console.log(precision(Number(num6), 5));
console.log(precision(Number(num7), 5));
console.log(precision(Number(num8), 5));
console.log(precision(Number(num9), 5));

console.log("=================1_2================");

//? 1_2

console.log(num1.toFixed(2));
console.log(num2.toFixed(2));
console.log(Number(num3).toFixed(2));
console.log(Number(num6).toFixed(2));
console.log(Number(num7).toFixed(2));
console.log(Number(num8).toFixed(2));
console.log(Number(num9).toFixed(2));

console.log("=================1_3================");

//? 1_3

console.log(num1.toString(2));
console.log(num1.toString(2));
console.log(num2.toString(2));
console.log(num3.toString(2));
console.log(num4.toString(2));
console.log(num5.toString(2));
console.log(num6.toString(2));
console.log(num7.toString(2));
console.log(num8.toString(2));
console.log(num9.toString(2));

console.log(num1.toString(8));
console.log(num1.toString(8));
console.log(num2.toString(8));
console.log(num3.toString(8));
console.log(num4.toString(8));
console.log(num5.toString(8));
console.log(num6.toString(8));
console.log(num7.toString(8));
console.log(num8.toString(8));
console.log(num9.toString(8));

console.log(num1.toString(16));
console.log(num1.toString(16));
console.log(num2.toString(16));
console.log(num3.toString(16));
console.log(num4.toString(16));
console.log(num5.toString(16));
console.log(num6.toString(16));
console.log(num7.toString(16));
console.log(num8.toString(16));
console.log(num9.toString(16));

console.log("=================1_4================");

//? 1_4

console.log(Number(num1));
console.log(Number(num2));
console.log(Number(num3));
console.log(Number(num4));
console.log(Number(num5));
console.log(Number(num6));
console.log(Number(num7));
console.log(Number(num8));
console.log(Number(num9));

console.clear();

//# Mehrwersteuer-Rechner

const inputForm = document.querySelector(".mwst_input_form");
const grossToNet = document.querySelector("#gross_to_net");
const netToGross = document.querySelector("#net_to_gross");
const amountInput = document.querySelector("#amount_input");
const amountInputLabel = document.querySelector('label[for="amount_input"]');
const netGrossOutputText = document.querySelector(".net_gross_output_heading");
const taxRate19 = document.querySelector("#tax_rate_19");
const taxRate7 = document.querySelector("#tax_rate_7");
const mwstOutput = document.querySelector(".mwst_output");
const NetGrossOutput = document.querySelector(".net_gross_output");

const changeNetGrossBtn = () => {
  if (grossToNet.checked) {
    amountInputLabel.textContent = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
    netGrossOutputText.textContent = "Bruttobetrag (Endpreis)";
  } else {
    amountInputLabel.textContent = "Nettobetrag (Preis ohne Mehrwersteuer) in Euro";
    netGrossOutputText.textContent = "Nettobetrag";
  }
};

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const amountInputValue = Number(amountInput.value);
  let taxRate;
  let netGrossResult;

  if (taxRate7.checked) {
    taxRate = 1.07;
  } else {
    taxRate = 1.19;
  }

  if (grossToNet.checked) {
    netGrossResult = amountInputValue / taxRate;
  } else {
    netGrossResult = amountInputValue * taxRate;
  }
  netGrossResult = netGrossResult.toFixed(2);
  const mwstResult = Math.abs(amountInputValue - netGrossResult).toFixed(2);

  mwstOutput.textContent = `${mwstResult}€`;
  NetGrossOutput.textContent = `${netGrossResult}€`;
});

grossToNet.addEventListener("click", changeNetGrossBtn);
netToGross.addEventListener("click", changeNetGrossBtn);
