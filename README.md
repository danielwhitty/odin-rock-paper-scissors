# odin-rock-paper-scissors
This is a project undertaken as the Odin Project's fundamentals path.

## Purpose
The purpose of this project is to get an introductory grasp on the basics of Javascript.

## Challenges
This project wasn't too challenging to get working, but checking for the **Cancel** option of the input prompt provided some challenge.

Eventually I tackled this by first, providing a return value on line 20 in the **playRound** function found in **scripts.js**.
```
let playerInput = prompt("Rock, paper, or scissors?");
if (playerInput === null) {
    // Return value if user cancel's input
    return 1;
```
Within the **game** function (line 60 specifically), the loop then restarts if this value is returned, via decrementing the loop and continuing to go back to the previous iteration.
```
let roundWinner = playRound();

if (roundWinner === 1) {
    i--;
    continue;
```
Overall, this was a very satisfying project to get done, and I'm excited to see the next iteration of this after learning more about manipulating the DOM with Javascript.