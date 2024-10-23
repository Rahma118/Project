//..................... START BMI............................................//

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  var bmi = weight / (height * height);
  document.getElementById("bmi").innerHTML = bmi;
  let bmiCat = "";

  switch (true) {
    case bmi < 18:
      bmiCat = "نحيف";
      break;

    case bmi < 27:
      bmiCat = "وزن مثالي";
      break;

    case bmi < 32:
      bmiCat = "وزن زائد";
      break;

    case bmi < 36:
      bmiCat = "سمنه درجه اولي";
      break;

    case bmi < 42:
      bmiCat = "سمنه درجه ثانيه";
      break;
    case bmi > 43:
      bmiCat = "سمنه مفرطه ";
      break;
  }

  document.getElementById("bmi-cat").innerHTML = bmiCat;
  var weight = document.getElementById("weight").value = "";
  var height = document.getElementById("height").value = "";
});


