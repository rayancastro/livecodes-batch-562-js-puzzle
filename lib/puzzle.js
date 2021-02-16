console.log("Good luck. :)");

const button = document.querySelector('#show-hint');

button.addEventListener('click', (event) => {
  const hintBox = document.querySelector('.hint');
  hintBox.classList.toggle('active');
});

const canMove = (tile) => {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;

  const emptyTile = document.querySelector('.empty');
  const emptyColumn = emptyTile.cellIndex;
  const emptyRow = emptyTile.parentElement.rowIndex;

  return (tileColumn === emptyColumn + 1 && tileRow === emptyRow ) ||
         (tileColumn === emptyColumn - 1 && tileRow === emptyRow ) ||
         (tileRow === emptyRow + 1 && tileColumn === emptyColumn) ||
         (tileRow === emptyRow - 1 && tileColumn === emptyColumn);

}

const moveTile = (tile) => {
  // Swap the positions of the empty tile and the tile
  // 1. Select the empty tile
  const emptyTile = document.querySelector('.empty');
  // 2. Remove the empty class of the emptyTile
  emptyTile.classList.remove('empty');
  // 3. Assign the innerText of the emptyTile to be the one from the tile
  emptyTile.innerText = tile.innerText;
  // 4. Add empty class to the tile
  tile.classList.add('empty');
  // 5. Remove the innerText from the tile
  tile.innerText = '';
}

const checkIfPlayerWon = () => {
  // Take the inner text and put in an array
  // Check if the array is in the right order

  const tilesArray = Array.from(tiles);

  const values = tilesArray.map(tile => parseInt(tile.innerText, 10));
  console.log(values);

  const winningCombo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, NaN]

  if (values.toString() === winningCombo.toString()) {
    alert("CONGRATZ! You did it! :)");
  }
}

// Select all tiles
const tiles = document.querySelectorAll('td');
console.log(tiles);
// For each tile
tiles.forEach((tile) => {
  // Add a listener for a click event
  tile.addEventListener("click", (event) => {
    // If it has an empty neighbor
    if (canMove(event.currentTarget)) {
      // Swap the tile and the empty neighbor
      moveTile(event.currentTarget);
      // Check if the player wins
      setTimeout(checkIfPlayerWon, 10);
      // checkIfPlayerWon();

    }
  });
});









