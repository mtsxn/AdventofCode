const input = [
            //puzzle input
  ];
  let result = 0;

for (let i = 0; i < input.length; i++){
    const game = input[i]
      .split(": ")[1]
      .split("; ")
      .map((x) => {
        const result = { red: 0, green: 0, blue: 0 };
        x.split(", ").forEach((object) => {
          const [count, color] = object.split(" ");
          result[color] = parseInt(count);
        });
                  
        return result;
      });
        
    const redMax = Math.max(...game.map((x) => x.red));
    const greenMax = Math.max(...game.map((x) => x.green));
    const blueMax = Math.max(...game.map((x) => x.blue));

    if (redMax <= 12 && greenMax <= 13 && blueMax <= 14) result += i + 1;
}
console.log(result);
