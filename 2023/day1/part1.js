  let tab = [
        // puzle input here 
  ];
  let sum = 0;

  for (let i = 0; i < tab.length; i++) {
    let firstDigit = null;
    let lastDigit = null;
  
    for (let j = 0; j < tab[i].length; j++) {
      if (/\d/.test(tab[i][j])) {
        if (firstDigit === null) {
          firstDigit = tab[i][j];
        }
        lastDigit = tab[i][j];
      }
    }
  
    if (firstDigit !== null && lastDigit !== null) {
      sum += parseInt(firstDigit + lastDigit);
    }
  }
  console.log(sum);
