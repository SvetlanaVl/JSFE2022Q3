// пятнашки
let moves = 0;
let sec = 0;
let min = 0;
let stopwatch;

function startGame() {

	myButton.start();
	myButtonSave.start();
  myButtonResult.start();
  myButtonLoad.start();
	myGameArea.start();
  myNameMoves.start();
	myMoves.start();
  myTimeName.start();
  myTime.start();

  // игра 4*4

  let sizeSquare = myGameArea.canvas.width / 4;

  // создали объект пятнашек

  let square = new component();

  // перемешиваем пятнашки

	square.mix(200); 

  // пятнашки

	square.setViewSquare(function(x, y) {
    ctx.beginPath();
		ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(34, 153, 125, 0.7)';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(x + 2, y + 2, sizeSquare - 4, sizeSquare - 4);
    ctx.closePath();
  });

  // цифры

	square.setViewNumber(function() { 
    ctx.beginPath();
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'rgba(34, 153, 125, 0.7)';
		ctx.font = 'bold '+ (sizeSquare / 2.5) + 'px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#131414';
    ctx.closePath();
  });

  // нарисовали пятнашки

  square.draw(ctx, sizeSquare);

  // при клике закрашиваем пустой квадрат 
  
  function emptySquare(x, y) {
		square.move(x, y);
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(0, 0,  myGameArea.canvas.width,  myGameArea.canvas.height);
		square.draw(ctx, sizeSquare);

    // если всё сложено выводится сообщение

		if (square.win()) {
      clearInterval(stopwatch);
			alert('Ура! Вы решили головоломку за ' + myTime.time.innerHTML + ' и ' + square.getMoves() + ' ходов!');
		}
	}

  // клик мышью

	myGameArea.canvas.onclick = function(e) { 
    let x = (e.pageX - myGameArea.canvas.offsetLeft) / sizeSquare | 0;
		let y = (e.pageY - myGameArea.canvas.offsetTop)  / sizeSquare | 0;
    // вывод функции пустой квадрат
		emptySquare(x, y);
	};

  // при клике на нопку начинаем новую игру

	myButton.button.onclick = function(e) { 
		startGame();
	};

  // Local Storage

  function setLocalStorage() {
    localStorage.setItem('moves', myMoves.moves.innerText);
		localStorage.setItem('square', arrLocal.join());
		localStorage.setItem('minute', min);
		localStorage.setItem('second', sec);
  }

  function getLocalStorage() {
    const localMoves = localStorage.getItem('moves')
    if (localStorage.getItem('moves')) {
      myMoves.moves.textContent = +localMoves;
    }
    if (localStorage.getItem('minute') && localStorage.getItem('second')) {
      sec = +localStorage.getItem('second');
      min = +localStorage.getItem('minute');
    }
  }

  // при клике на нопку сохраняем в Local Storage

  myButtonSave.button.onclick = function(e) { 
    setLocalStorage();
    getLocalStorage();
    myButtonLoad.buttonLoad.style.pointerEvents = 'visible';
    myButtonLoad.buttonLoad.style.backgroundColor = '#FFFFFF';
  };

  if (localStorage.getItem('moves')) {
    myButtonLoad.buttonLoad.style.pointerEvents = 'visible';
    myButtonLoad.buttonLoad.style.backgroundColor = '#FFFFFF';
  }

  // при клике на нопку возвращаем из Local Storage

  myButtonLoad.buttonLoad.onclick = function(e) { 
    if (localStorage.getItem('moves')) {
      moves = +localStorage.getItem('moves');
    }
    if (localStorage.getItem('minute') && localStorage.getItem('second')) {
      sec = +localStorage.getItem('second');
      min = +localStorage.getItem('minute');
    }
    
    square.draw(ctx, sizeSquare);
    let x = (e.pageX - myGameArea.canvas.offsetLeft) / sizeSquare | 0;
		let y = (e.pageY - myGameArea.canvas.offsetTop)  / sizeSquare | 0;
    emptySquare(x, y);
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
  canvas : document.createElement('canvas'),
  start : function() {
    this.canvas.width = 320;
    this.canvas.height = 320;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[4]);
  }
}

// buttons

const myButton = {
	button : document.createElement('button'),
	start : function() {
		this.button.textContent = 'Shuffle and start';
		document.body.insertBefore(this.button, document.body.childNodes[0]);
	}
}

const myButtonSave = {
	button : document.createElement('button'),
	start : function() {
		this.button.textContent = 'Save';
		document.body.insertBefore(this.button, document.body.childNodes[1]);
	}
}

const myButtonResult = {
	button : document.createElement('button'),
	start : function() {
		this.button.textContent = 'Results';
		document.body.insertBefore(this.button, document.body.childNodes[2]);
	}
}

const myButtonLoad = {
	buttonLoad : document.createElement('button'),
	start : function() {
		this.buttonLoad.textContent = 'Load';
    this.buttonLoad.style.pointerEvents = 'none';
		document.body.insertBefore(this.buttonLoad, document.body.childNodes[3]);
	}
}

// name moves

const myNameMoves = {
	nameMoves : document.createElement('div'),
	start : function() {
    this.nameMoves.className = 'moves-name';
		this.nameMoves.textContent = 'Moves: ';
		document.body.insertBefore(this.nameMoves, document.body.childNodes[5]);
	}
}

// moves

const myMoves = {
	moves : document.createElement('div'),
	start : function() {
		this.moves.textContent = '';
		document.body.insertBefore(this.moves, document.body.childNodes[6]);
	}
}

// time name

const myTimeName = {
	timeName : document.createElement('div'),
	start : function() {
		this.timeName.textContent = 'Time: ';
		document.body.insertBefore(this.timeName, document.body.childNodes[7]);
	}
}

// time

const myTime = {
	time : document.createElement('div'),
	start : function() {
		this.time.textContent = '';
		document.body.insertBefore(this.time, document.body.childNodes[8]);
	}
}

// конструктор компонентов

let arrLocal = [];

function component() {
  ctx = myGameArea.context;
  let viewSquare = null;
  let viewNumber = null;
  let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
  
	// рисуем квадраты

  this.draw = function(ctx, size) {
    
    myButtonLoad.buttonLoad.addEventListener('click', e => {

      let arrStr = JSON.parse("[" + localStorage.getItem('square') + "]");
  
      let matrix = [], i, k;
    
      for (i = 0, k = -1; i < arrStr.length; i++) {
        if (i % 4 === 0) {
          k++;
          matrix[k] = [];
        }
        matrix[k].push(arrStr[i]);
      }
  
      arr = matrix;
    });

    arrLocal = [];

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
        arrLocal.push(arr[i][j]);
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

  // координата пустой клетки

	function getEmptySquare() { 
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (arr[j][i] === 0) {
					return {'x':i, 'y':j};
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

	// число кликов

  // let moves = 0;

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
		myMoves.moves.textContent = moves;
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

		myMoves.moves.textContent = moves;

	};

  function formatTime() {
    stopwatch = setInterval(function() {
      if (sec === 60) {
        sec = 0;
        min++;
      }
      if (sec < 10) {
        sec = `0${sec}`;
      }

      myTime.time.textContent = `${min}:${sec}`;

      sec++;
      
    }, 1000)
  }

  formatTime();


}



