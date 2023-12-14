function extractNumbers(tab) {
  const lines = [
      ["oneight", 18],
      ["twone", 21],
      ["threeight", 38],
      ["fiveight", 58],
      ["sevenine", 79],
      ["eightwo", 82],
      ["eighthree", 83],
      ["nineight", 98],
      ["one", 1],
      ["two", 2],
      ["three", 3],
      ["four", 4],
      ["five", 5],
      ["six", 6],
      ["seven", 7],
      ["eight", 8],
      ["nine", 9],
    ];
  const replaceWord = (str) => {
    for (const [word, number] of lines) {
      while (str.includes(word)){
         str = str.replace(word, number);
      }
    }
    return str;
  }
  return tab.map(replaceWord);
}
