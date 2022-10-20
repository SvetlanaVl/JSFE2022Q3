// пятнашки

function startGame() {
  myGameArea.start(); // создали элемент canvas

  var cellSize = myGameArea.canvas.width / 4; // игра 4*4

  var square = new component(); // создали объект пятнашек

  // пятнашеки

	square.setCellView(function(x, y) { 
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
  });

  // цифры

	square.setNumView(function() { 
    ctx.font = "bold "+ (cellSize / 2.5) + "px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000000";
  });

  ctx.fillStyle = "#000000"; // цвет линий и пустой ячейки
  ctx.fillRect(0, 0,  myGameArea.canvas.width,  myGameArea.canvas.height); // линии и пустая ячейка
	
  square.draw(ctx, cellSize); // добавили пятнашки

	
  
}

// canvas

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 320;
        this.canvas.height = 320;
        
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[2]);
    }
}

// конструктор компонентов

function component() {
  ctx = myGameArea.context;
  var cellView = null;
  var numView = null;
  var arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];

  this.draw = function(ctx, size) {
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (arr[i][j] > 0) {
          if (cellView !== null) {
            cellView(j * size, i * size);
          }
          if (numView !== null) {
            numView();
            ctx.fillText(arr[i][j], j * size + size / 2, i * size + size / 2);
          }
        }
      }
    }
  };

  // пятнашки

  this.setCellView = function(func) {
    cellView = func;
  };

  // цифры
  
  this.setNumView = function(func) {
    numView = func;
  };

  

}

