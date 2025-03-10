// code your solution here
function superbowlWin(record) {
    const winningYear = record.find(game => game.result === "W");
    return winningYear ? winningYear.year : undefined;
  }
  
  console.log(superbowlWin(record)); // Output: "2016"
  