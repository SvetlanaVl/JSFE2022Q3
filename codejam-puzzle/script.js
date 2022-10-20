// пятнашки

function startGame() {
  myGameArea.start(); // создали элемент canvas

  let cellSize = myGameArea.canvas.width / 4; // игра 4*4

  let square = new component(); // создали объект пятнашек 

  // пятнашки

	square.setCellView(function(x, y) { 
		ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(34, 153, 125, 0.7)';
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
		
  });

  // цифры

	square.setNumView(function() { 
		ctx.font = "bold "+ (cellSize / 2.5) + "px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#131414";
  });
	
	// ctx.fillStyle = "rgba(250, 245, 245, 0.3)"; // цвет линий и пустой ячейки
  // ctx.fillRect(0, 0,  myGameArea.canvas.width,  myGameArea.canvas.height); // линии и пустая ячейка
	
  square.draw(ctx, cellSize); // добавили пятнашки

  // при клике закрашиваем пустой квадрат 
  
  function event(x, y) {
		square.move(x, y);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(0, 0,  myGameArea.canvas.width,  myGameArea.canvas.height);
		square.draw(ctx, cellSize);

  
	}

  // клик мышью

  myGameArea.canvas.onclick = function(e) { 
		let x = (e.pageX - myGameArea.canvas.offsetLeft) / cellSize | 0;
		let y = (e.pageY - myGameArea.canvas.offsetTop)  / cellSize | 0;
		event(x, y); // выход функции действия
	};


  
}

// canvas

const myGameArea = {
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
  let cellView = null;
  let numView = null;
  let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];

  this.draw = function(ctx, size) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
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
	let clicks = 0;

  // координата пустой клетки

	function getNull() { 
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (arr[j][i] === 0) {
					return {"x":i, "y":j};
				}
			}
		}
	};

	// перемещаем пятнашку в пустую клетку

	this.move = function(x, y) {
		let nullX = getNull().x;
		let nullY = getNull().y;
		if (((x - 1 == nullX || x + 1 == nullX) && y == nullY) || ((y - 1 == nullY || y + 1 == nullY) && x == nullX)) {
			arr[nullY][nullX] = arr[y][x];
			arr[y][x] = 0;
			clicks++;
		}
	};


}

