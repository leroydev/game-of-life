var inputCivilization = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

//Cloning inputCivilization so we can reset
var civilization = clone2DArray(inputCivilization);

var x,
    y,
    intervalId,
    rectSize = 20,
    interval = 100;

var canvas = document.getElementById("canvas"),
    startPauseBtn = document.getElementById("startPauseBtn"),
    intervalInput = document.getElementById("interval"),
    useBtn = document.getElementById("useBtn"),
    resetBtn = document.getElementById("resetBtn"),
    ctx = canvas.getContext("2d");
ctx.canvas.height = rectSize * civilization.length;
ctx.canvas.width = rectSize * civilization[0].length;

intervalInput.value = interval;

function numberOfNeighbours(x, y) {
  var nrOfNeighbours = 0;

  //If cell above given cell is alive
  if (y !== 0) {
    if (civilization[y-1][x] === 1) {
      nrOfNeighbours++;
    }
  }

  //If cell left from given cell is alive
  if (x !== 0) {
    if (civilization[y][x-1] === 1) {
      nrOfNeighbours++;
    }
  }

  //If cell below given cell is alive
  if (y !== civilization.length-1) {
    if (civilization[y+1][x] === 1) {
      nrOfNeighbours++;
    }
  }

  //If cell right from given cell is alive
  if (x !== civilization[0].length-1) {
    if (civilization[y][x+1] === 1) {
      nrOfNeighbours++;
    }
  }

  //If cell above and left of given cell is alive
  if (x !== 0 && y !== 0) {
    if (civilization[y-1][x-1] === 1) {
      nrOfNeighbours++;
    }
  }

  //If cell below and left of given cell if alive
  if (x !== 0 && y !== civilization.length-1) {
    if (civilization[y+1][x-1] === 1) {
      nrOfNeighbours++;
    }
  }

  //If cell above and right of given cell is alive
  if (x !== civilization[0].length-1 && y !== 0) {
    if (civilization[y-1][x+1] === 1) {
      nrOfNeighbours++;
    }
  }

  //If cell below and right of given cell is alive
  if (x !== civilization[0].length-1 && y !== civilization.length-1) {
    if (civilization[y+1][x+1] === 1) {
      nrOfNeighbours++;
    }
  }

  return nrOfNeighbours;
}

function playForGod() {
  var futureCivilization = [];
  for (y = 0; y < civilization.length; y++) {
    futureCivilization[y] = civilization[y].slice();
    for (x = 0; x < civilization[y].length; x++) {
      var nrOfNeighbours = numberOfNeighbours(x, y);

      if (civilization[y][x] === 0) {
        //Any dead cell with exactly three live neighbours becomes a live cell
        if (nrOfNeighbours === 3) {
          futureCivilization[y][x] = 1;
        }
      } else if (civilization[y][x] === 1) {
        //Any live cell with more than three live neighbours dies
        if (nrOfNeighbours > 3) {
          futureCivilization[y][x] = 0;
        //Any live cell with fewer than two live neighbours dies
        } else if (nrOfNeighbours < 2) {
          futureCivilization[y][x] = 0;
        }
      }
    }
  }

  for (y = 0; y < futureCivilization.length; y++) {
    civilization[y] = futureCivilization[y].slice();
  }
  drawCivilization();
}

function drawCivilization() {
  for (y = 0; y < civilization.length; y++) {
    for (x = 0; x < civilization[y].length; x++) {
      if (civilization[y][x] === 1) {
        ctx.fillRect(x * rectSize, y * rectSize, rectSize, rectSize);
      } else {
        ctx.clearRect(x * rectSize, y * rectSize, rectSize, rectSize);
      }
    }
  }
}

function clone2DArray(inputArray) {
  var clonedArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    clonedArray[i] = inputArray[i].slice();
  }
  return clonedArray;
}

//Reset button click handler
resetBtn.addEventListener("click", function() {
  civilization = clone2DArray(inputCivilization);
  drawCivilization();
}, false);

//Start pause button click handler
startPauseBtn.addEventListener("click", function() {
  var buttonText = startPauseBtn.innerHTML;
  if (buttonText === "Start") {
    startLoop();
    startPauseBtn.innerHTML = "Stop";
  } else if (buttonText === "Stop") {
    stopLoop();
    startPauseBtn.innerHTML = "Start";
  }
}, false);

//Interval input lost focus event handler
intervalInput.addEventListener("focusout", function() {
  interval = intervalInput.value;
  stopLoop();
  startLoop();
}, false);

//Canvas click handler
canvas.addEventListener("mousedown", function(event) {
  var x = event.x - canvas.offsetLeft;
  var y = event.y - canvas.offsetTop;

  //Translating x and y to grid coordinates
  x = Math.floor(x / rectSize);
  y = Math.floor(y / rectSize);

  //Inverting value of clicked grid cell if inside bounds
  if (y < civilization.length) {
    if (x < civilization[0].length) {
      if (civilization[y][x] === 0) {
        civilization[y][x] = 1;
      } else if (civilization[y][x] === 1) {
        civilization[y][x] = 0;
      }
      drawCivilization();
    }
  }
}, false);

//Use current drawn civilization click handler
useBtn.addEventListener("click", function() {
  inputCivilization = clone2DArray(civilization);
}, false);

function stopLoop() {
  window.clearInterval(intervalId);
}

function startLoop() {
  intervalId = window.setInterval(playForGod, interval);
}

drawCivilization();
