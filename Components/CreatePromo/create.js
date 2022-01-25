function CreateCode() {
  let CodeMass = [];
  let StringCode = "";
  for (let i = 0; i < 8; i++) {
    let num = Math.floor(Math.random() * 10);
    CodeMass.push(num);
    StringCode += num;
  }

  let text = document.getElementById("promo");
  let numberCode = document.getElementById("numberCode");
  numberCode.innerHTML = StringCode;

  if (valide2000(CodeMass)) {
    text.innerHTML = "У вас бонус 2000";
  } else if (valide1000(CodeMass)) text.innerHTML = "У вас бонус 1000";
  else if (valide100(CodeMass)) text.innerHTML = "У вас бонус 100";
  else if (!valide100(CodeMass))
    text.innerHTML = " Извините, у вас нету промокода";
}
