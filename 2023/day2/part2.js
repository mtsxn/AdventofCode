const input = [
  ];

function part2() {
  answer = 0;
  inputs.forEach(x => {
    let red = 0;
    let green = 0;
    let blue = 0;

    
    let y = x.split(' ');
    for (let i = 3; i < y.length; i++) {
      let temp = Number(y[i - 1]);
      
      if (y[i].match(/^red/g)) red = red > temp ? red : temp;
      else if (y[i].match(/^green/g)) green = green > temp ? green : temp;
      else if (y[i].match(/^blue/g)) blue = blue > temp ? blue : temp
  });
}
