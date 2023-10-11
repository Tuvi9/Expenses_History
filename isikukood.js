const hospitals = require("./hospitals.json");

function parseIsikukood(isikukood) {
  // 1. Kontrollnumber
  function kontrollnumber() {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += isikukood[i] * (i % 9 + 1);
    }
    let remainder = sum % 11;
    if (remainder === 10) {
      sum = 0;
      for (let i = 0; i < 10; i++) {
        sum += isikukood[i] * ((i + 2) % 9 + 1);
      }
      remainder = sum % 11;
      if (remainder === 10) {
        remainder = 0;
      }
    }
    return (remainder);
  }
  let whole = kontrollnumber();

  // 2. Kontrollnumber 2
  function kontrollnumber2(whole) {
    let weight1 = [3, 4, 5, 6, 7, 8, 9, 1, 2];
    let weight2 = [7, 3, 4, 5, 6, 7, 8, 9, 1];
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += isikukood[i] * weight2[i];
    }
    let remainder = (sum + whole * weight1[8]) % 11;
    if (remainder === 10) {
      sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += isikukood[i] * weight1[i];
      }
      remainder = (sum + whole * weight2[8]) % 11;
      if (remainder === 10) {
        remainder = 0;
      }
    }
    return remainder;
  }
  whole = kontrollnumber2(whole);

  // 3. Sugu
  function sex() {
    if (isikukood[0] % 2 === 0) {
      return "Naine";
    } else {
      return "Mees";
    }
  }
  let gender = sex();

  // 4. Sünnikuupäev
  function birthdate() {
    let birthday_number =
      isikukood[5] +
      isikukood[6] +
      "." +
      isikukood[3] +
      isikukood[4] +
      "." +
      isikukood[1] +
      isikukood[2];
    return birthday_number;
  }
  let percise_birthday = birthdate();

  // 5. Sünnikoht
  function row() {
    let row_number = isikukood[7] + isikukood[8] + isikukood[9];
    return row_number;
  }
  let out_of_many = row();

  function hospital_value() {
    if (out_of_many in hospitals) {
      let hospital = hospitals[out_of_many];
      return hospital;
    } else {
      return "Tundmatu";
    }
  }
  let hospital = hospital_value(out_of_many);

  return {
    whole,
    gender,
    out_of_many,
    percise_birthday,
    hospital,
  };
}

module.exports = {
  parseIsikukood,
} ;