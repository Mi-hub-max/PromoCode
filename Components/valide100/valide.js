function valide100(code) {
  let evenMass = [];
  let oddMass = [];
  code.map((elem) => {
    if (elem % 2 === 0) {
      evenMass.push(elem);
    } else {
      oddMass.push(elem);
    }
  });
  let evenSum = 0;
  evenMass.map((elem) => {
    evenSum += elem;
  });
  let oddSum = 0;
  oddMass.map((elem) => {
    oddSum += elem;
  });

  if (evenSum > oddSum) {
    return true;
  } else {
    return false;
  }
}
