const input = [
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
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
        
    const redMax = Math.max(...game.map((x) => x.red));
    const greenMax = Math.max(...game.map((x) => x.green));
    const blueMax = Math.max(...game.map((x) => x.blue));

    if (redMax <= 12 && greenMax <= 13 && blueMax <= 14) result += i + 1;
}
console.log(result);
