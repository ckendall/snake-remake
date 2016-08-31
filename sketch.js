var snake, food, button, gameStart;
var rate = 10;

function setup() {
	var test = $('#my-container')

	gameStart = false;
	myCanvas = createCanvas(600, 500);
	myCanvas.parent('my-container')
	myCanvas.position(test.width() - (width + 200), test.height()/2 - (height - 250))
	button = createButton("Start the Game")
	button.parent('my-container')
	button.position(test.width()/2 - 25, test.height()/2);
	button.mousePressed(startTheGame)
	frameRate(rate)
	snake = new Snake;
	food = new Food;
	food.createPosition();
};

function draw() {
	if (gameStart){
		button.hide();
		background(51);

		fill('rgba(100%,0%,100%,0.5)');
		ellipse(food.position.x, food.position.y, 20, 20)

		snake.draw();
		snake.update();
		snake.eatFood();
		snake.isSnakeDead();
		
	}else{
		background(51)
		button.show();
	}
};

function keyPressed(direction) {
	if(direction.key === "ArrowUp"){

			snake.direction(direction, 0, -2)

	}else if(direction.key === "ArrowDown"){

		snake.direction(direction, 0, 2)

	}else if(direction.key === "ArrowRight"){

		snake.direction(direction, 2, 0)

	}else if(direction.key === "ArrowLeft"){

		snake.direction(direction, -2, 0)
	}else if (keyCode === OPTION){
		snake.grow();
	}
};

function startTheGame() {
	gameStart = true;
	background(51);

}