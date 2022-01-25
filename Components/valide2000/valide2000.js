function valide2000(code) {
  let position1 = (position2 = 0);
  for (let i = 0; i < code.length; i++) {
    if (i == code.length - 1) continue;
    if (code[i] % 2 !== 0 && code[i + 1] % 2 !== 0) {
      i++;
      if (position1 == 0) position1 = i;
      else if (position2 == 0) position2 = i - 1;
    }
  }
  for (let index = position1 + 1; index < position2; index++) {
    if (code[index] % 2 == 0) {
      if (
        code[position1] > code[position1 - 1] &&
        code[position2 + 1] > code[position2]
      )
        return true;
    }
  }
  return false;
}
