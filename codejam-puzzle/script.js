// пятнашки



function startGame() {

	myButton.start();

	myButtonSave.start();
	myButtonResult.start();

	myGameArea.start();

	myMoves.start()

  let sizeSquare = myGameArea.canvas.width / 4; // игра 4*4

  let square = new component(); // создали объект пятнашек

  // перемешиваем пятнашки

	square.mix(200); 

  // пятнашки

	square.setViewSquare(function(x, y) { 
		ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(34, 153, 125, 0.7)';
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(x + 2, y + 2, sizeSquare - 4, sizeSquare - 4);
		
  });

  // цифры

	square.setViewNumber(function() { 
		ctx.font = "bold "+ (sizeSquare / 2.5) + "px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#131414";
  });
	
	// ctx.fillStyle = "rgba(250, 245, 245, 0.3)"; // цвет линий и пустой ячейки
  // ctx.fillRect(0, 0,  myGameArea.canvas.width,  myGameArea.canvas.height); // линии и пустая ячейка
	
  square.draw(ctx, sizeSquare); // нарисовали пятнашки

  // при клике закрашиваем пустой квадрат 
  
  function emptySquare(x, y) {
		square.move(x, y);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(0, 0,  myGameArea.canvas.width,  myGameArea.canvas.height);
		square.draw(ctx, sizeSquare);

  // если всё сложено выводится сообщение

		if (square.win()) { 
			// ctx.fillStyle = "#FFFFFF";
			// ctx.fillRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
			// square.draw(ctx, sizeSquare);

      alert("Ура! Вы решили головоломку за "+ " " + " и " + square.getMoves() + " ходов!");

			
		}

	}

  // клик мышью

	myGameArea.canvas.onclick = function(e) { 
		let x = (e.pageX - myGameArea.canvas.offsetLeft) / sizeSquare | 0;
		let y = (e.pageY - myGameArea.canvas.offsetTop)  / sizeSquare | 0;
		emptySquare(x, y); // вывод функции пустой квадрат
	};

	myButton.button.onclick = function(e) { 

		startGame();
		
	};

  
  // касание пальцем

	myGameArea.canvas.ontouchend = function(e) { 
		let x = (e.touches[0].pageX - myGameArea.canvas.offsetLeft) / sizeSquare | 0;
		let y = (e.touches[0].pageY - myGameArea.canvas.offsetTop)  / sizeSquare | 0;
		emptySquare(x, y);
	};

  
}

// canvas

const myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 320;
      this.canvas.height = 320;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[3]);
    }
}

// buttons

const myButton = {
	button : document.createElement("button"),
	start : function() {
		this.button.width = 50;
		this.button.height = 50;
		this.button.textContent = 'Shuffle and start';
		document.body.insertBefore(this.button, document.body.childNodes[0]);
	}
}

const myButtonSave = {
	button : document.createElement("button"),
	start : function() {
		this.button.width = 50;
		this.button.height = 50;
		this.button.textContent = 'Save';
		document.body.insertBefore(this.button, document.body.childNodes[1]);
	}
}

const myButtonResult = {
	button : document.createElement("button"),
	start : function() {
		this.button.width = 50;
		this.button.height = 50;
		this.button.textContent = 'Results';
		document.body.insertBefore(this.button, document.body.childNodes[2]);
	}
}

// moves

const myMoves = {
	moves : document.createElement("div"),
	start : function() {
		this.moves.width = 50;
		this.moves.height = 50;
		this.moves.textContent = '';
		document.body.insertBefore(this.moves, document.body.childNodes[4]);
	}
}

// конструктор компонентов

function component() {
  ctx = myGameArea.context;
  let viewSquare = null;
  let viewNumber = null;
  let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];

	// рисуем квадраты

  this.draw = function(ctx, size) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (arr[i][j] > 0) {
          if (viewSquare !== null) {
            viewSquare(j * size, i * size);
          }
          if (viewNumber !== null) {
            viewNumber();
            ctx.fillText(arr[i][j], j * size + size / 2, i * size + size / 2);
          }
        }
      }
    }
  };

  // пятнашки

  this.setViewSquare = function(func) {
    viewSquare = func;
  };

  // цифры
  
  this.setViewNumber = function(func) {
    viewNumber = func;
  };

  let moves = 0;

  // координата пустой клетки

	function getEmptySquare() { 
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (arr[j][i] === 0) {
					return {"x":i, "y":j};
				}
			}
		}
	};

	// замешивание рандомно
	
	function getSortSquare() {
		if (Math.floor(Math.random() * 2) === 0) {
			return true;
		}
	};

	// число касаний

	this.getMoves = function() {
		
		return moves;
	};

	// перемещаем пятнашку в пустую клетку

	this.move = function(x, y) {
		let moveEmptySquareX = getEmptySquare().x;
		let moveY = getEmptySquare().y;
		if (((x - 1 == moveEmptySquareX || x + 1 == moveEmptySquareX) && y == moveY) || ((y - 1 == moveY || y + 1 == moveY) && x == moveEmptySquareX)) {
			arr[moveY][moveEmptySquareX] = arr[y][x];
			arr[y][x] = 0;
			moves++;
			
		}
		myMoves.moves.textContent = `Moves: ${moves}`;
	};

	// условие когда всё собрано

	this.win = function() {
		let winCombination = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,0]];
		let result = true;
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (winCombination[i][j] != arr[i][j]) {
					result = false;
				}
			}
		}
		return result;
	};

	// перемешиваем пятнашки

	this.mix = function(countMix) {
		let x;
		let y;
		for (let i = 0; i < countMix; i++) {
			let moveEmptySquareX = getEmptySquare().x;
			let moveEmptySquareY = getEmptySquare().y;
			let moveSortY = getSortSquare();
			let moveSortX = getSortSquare();

			if (!moveSortY && !moveSortX) { y = moveEmptySquareY; x = moveEmptySquareX - 1;}
			if (moveSortY && !moveSortX)  { x = moveEmptySquareX; y = moveEmptySquareY + 1;}
			if (!moveSortY && moveSortX)  { y = moveEmptySquareY; x = moveEmptySquareX + 1;}
			if (moveSortY && moveSortX)   { x = moveEmptySquareX; y = moveEmptySquareY - 1;}

			if (0 <= x && x <= 3 && 0 <= y && y <= 3) {
				this.move(x, y);
			}
		}

		moves = 0;

		myMoves.moves.textContent = `Moves: ${moves}`;
	};


}

