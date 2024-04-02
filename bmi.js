const calculate = document.getElementById("calculate");

function bmi() {
  const name = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if (name !== "" && height !== "" && weight !== "") {
    const valueBMI = (weight / (height * height)).toFixed(1);

    let classification = "";

    if (valueBMI < 18.5) {
      classification = "under weight!";
    } else if (valueBMI < 25) {
      classification = "your ideal weight. Congratulations!";
    } else if (valueBMI < 30) {
      classification = "slightly overweight!";
    } else if (valueBMI < 35) {
      classification = "obese, grade I!";
    } else if (valueBMI < 40) {
      classification = "obese, grade II!";
    } else {
      classification = "obese, grade III. Careful!";
    }

    result.textContent = `${name} your BMI is ${valueBMI} and you are ${classification}`;
  } else {
    result.textContent = "Fill in all the fields!";
  }
}
calculate.addEventListener("click", bmi);
